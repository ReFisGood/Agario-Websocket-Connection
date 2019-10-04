import { socket } from "./socket";
import { formula } from "./formula";
import { agarioversion } from "./versions";

class protoKeys {
    constructor() {
        this.encrypt = null;
        this.decrypt = null;
        this.move = null;
    }
    update(view) {
        this.move = view.readUInt32();
        this.encrypt = this.move ^ agarioversion.version;
        this.decrypt = formula.murmur2(socket.url, new Uint8Array(view.dataView.buffer, view.index));
        console.log('Keys Generated:', this.encrypt, this.decrypt)
    }
    reset() {
        this.encrypt = null;
        this.decrypt = null;
        this.move = null;
    }
}

var key = new protoKeys();

export { key }