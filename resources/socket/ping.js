import { socket } from "./socket";

class ping {
    static send(view) {
        let packet = view.readUInt16();
        let pong = socket.createDataView(3);
        pong.setUint8(0, 227);
        pong.setUint16(1, packet)
        socket.sendPacket(pong);
    }
};

export { ping }