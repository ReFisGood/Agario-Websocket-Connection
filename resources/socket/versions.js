import { initialize } from "../combine";

class version {
    constructor() {
        this.version = 0;
        this.versionInt = '';
        this.protoversion = 0;
    }
    update() {
        this.getVersion();
    }
    async getVersion() {
        const req = await fetch('https://agar.io/mc/agario.js')
        const res = await req.text()
        this.versionInt = res.match(/var\sversionString="(\d.\d.\d)";/)[1];
        this.version = this.parse(this.versionInt);
        this.getProtocolVersion();
    }
    async getProtocolVersion() {
        const req = await fetch('https://agar.io/agario.core.js')
        const res = await req.text()
        this.protoversion = parseInt(res.match(/\w\[\w\+\d+>>\d\]=\w;\w+\(\w,(\d+)\);/)[1]);
        initialize.join();
    }
    parse(styleValue) {
        return 10000 * parseInt(styleValue.split(".")[0]) + 100 * parseInt(styleValue.split(".")[1]) + parseInt(styleValue.split(".")[2]);
    }
};

let agarioversion = new version();

export { agarioversion };