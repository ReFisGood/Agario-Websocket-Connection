import { socket } from "./socket/socket";
import { agarioversion } from "./socket/versions";

class init {
    constructor() {
        this.updateVersion();
    }
    updateVersion() {
        agarioversion.update();
    }
    join() {
        socket.connect("wss://live-arena-1vh5r7c.agar.io:443");
    }
}
var initialize = new init();
export { initialize };