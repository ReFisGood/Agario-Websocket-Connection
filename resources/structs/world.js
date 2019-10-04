import { cell as createCell } from "./cell";

class updateCells {
    constructor() {
        this.cells = new Map;
        this.ids = new Set;
        window.as = this;
    }
    update(view) {
        var length = view.readUInt16();
        for (; length--;) {
            const eatedID = view.readUInt32();
            const eaterID = view.readUInt32();
            this.removeCell(eatedID);
        }
        for (; !view.endOfBuffer;) {
            const id = view.readUInt32();
            if (0 === id) break;
            var cell = this.getCell(id) || new createCell(id);
            cell.x = view.readInt32();
            cell.y = view.readInt32();
            cell.size = view.readUInt16();
            const flags = view.readUInt8()
            const flags2 = 128 & flags ? view.readUInt8() : 0;
            if (1 & flags) cell.virus = true
            if (2 & flags) cell.setColor(view.readUInt8(), view.readUInt8(), view.readUInt8());
            if (4 & flags) cell.skin = view.readUTF8string();
            if (8 & flags) cell.name = view.readEscapedUTF8string();
            if (32 & flags) cell.eject = true;
            if (1 & flags2) cell.food = true;
            if (2 & flags2) cell.friend = true;
            if (4 & flags2) cell.accountid = view.readUInt32();
            this.newCell(id, cell);
        }
        length = view.readUInt16();
        for (; length--;) {
            const removedID = view.readUInt32();
            this.removeCell(removedID);
        }
    }
    newCell(id, cell) {
        if (this.ids.has(id)) cell.me = true;
        this.cells.set(id, cell);
    }
    addSelfCell(view) {
        const id = view.readUInt32();
        this.selfids.add(id);
    }
    removeCell(id) {
        if (this.ids.has(id)) this.ids.delete(id);
        this.cells.delete(id);
    }
    getCell(id) {
        var user;
        if (this.cells.has(id)) {
            user = this.cells.get(id);
        } else {
            user = false;
        }
        return user;
    }
};

var world = new updateCells();

export { world }