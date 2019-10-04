import { socket } from "./socket";
import { borders } from '../structs/border';
import { world } from "../structs/world";
import { key } from "./protocolkeys";
import { ping } from "./ping";

class handle {
    read(code, view) {
        switch (code) {
            case 32:
                world.addSelfCell(view);
                break;
            case 226:
                ping.send(view);
                break;
            case 241:
                key.update(view);
                break;
            case 255:
                view.decompress();
                code = view.readUInt8();
                switch (code) {
                    case 16:
                        world.update(view);
                        break;
                    case 64:
                        borders.update(view);
                        break;
                }
                break;
        }
    }
}

export { handle }