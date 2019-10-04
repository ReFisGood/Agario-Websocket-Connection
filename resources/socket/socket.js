import { handle } from "./handler";
import { formula } from "./formula";
import { reader } from "../util/readBytes";
import { agarioversion } from "./versions";
import { world } from "../structs/world";
import { key } from "./protocolkeys";

class agarioSocket extends handle {
    constructor() {
        super();
        this.url = '';
        this.socket = null;
        this.socketOpen = false;
    }
    connect(url) {
        this.resetconnection();
        this.socket = new WebSocket(url);
        this.url = url;
        this.socket.binaryType = 'arraybuffer';
        this.socket.onopen = this.handleOpen.bind(this);
        this.socket.onmessage = this.handleMessage.bind(this);
        this.socket.onclose = () => {
            console.log("closed...");
        };
    }
    handleOpen() {
        this.sendPacket254();
        this.sendPacket255();
        this.socketOpen = true;
        console.log("connected...");
    }
    handleMessage(message) {
        message = new DataView(message.data);
        if (key.encrypt) {
            message = formula.xorBuffer(message, key.encrypt);
        };
        this.readMessage(message);
    }
    sendPacket254() {
        const view = this.createDataView(5);
        view.setUint8(0, 254);
        view.setUint32(1, agarioversion.protoversion, true);
        this.socket.send(view.buffer);
    }
    sendPacket255() {
        const view = this.createDataView(5);
        view.setUint8(0, 255);
        view.setUint32(1, agarioversion.version, true);
        this.socket.send(view.buffer);
    }
    readMessage(message) {
        let view = new reader(message);
        let opcode = view.readUInt8();
        this.read(opcode, view);
    }
    sendPacket(packet) {
        if (this.socketOpen) {
            packet = formula.xorBuffer(packet, key.decrypt);
            key.decrypt = formula.rotateKey(key.decrypt);
        };
        this.sendBuffer(packet);
    }
    sendBuffer(packet) {
        if (this.isOnline) {
            this.socket.send(packet);
        };
    }
    resetconnection() {
        if (this.socket) {
            this.socket.onopen = null;
            this.socket.onmessage = null
            this.socket.onclose = null;
            this.socket.close && this.socket.close();
            this.socket = null;
        };
        this.clearevents();
    }
    clearevents() {
        key.reset();
        world.cells.clear();
        world.ids.clear();
    }
    createDataView(data) {
        return new DataView(new ArrayBuffer(data))
    }
    get isOnline() {
        return this.socket != null && this.socket.readyState === WebSocket.OPEN;
    }
};
var socket = new agarioSocket();
export { socket }