import { formula } from "../socket/formula";

class reader {
    constructor(view) {
        this.dataView = view
        this.index = 0
        this.maxIndex = view.byteLength
    }
    readUInt8() {
        const view = this.dataView.getUint8(this.index, true);
        return this.index++, view
    }
    readInt8() {
        const view = this.dataView.getInt8(this.index, true);
        return this.index++, view
    }
    readUInt16() {
        const view = this.dataView.getUint16(this.index, true);
        return this.index += 2, view
    }
    readInt16() {
        const view = this.dataView.getInt16(this.index, true);
        return this.index += 2, view
    }
    readUInt32() {
        const view = this.dataView.getUint32(this.index, true);
        return this.index += 4, view
    }
    readInt32() {
        const view = this.dataView.getInt32(this.index, true);
        return this.index += 4, view
    }
    readFloat32() {
        const view = this.dataView.getFloat32(this.index, true);
        return this.index += 4, view
    }
    readFloat64() {
        const view = this.dataView.getFloat64(this.index, true);
        return this.index += 8, view
    }
    readUTF8string() {
        let string = '';
        for (; !this.endOfBuffer;) {
            const char = this.readUInt8();
            if (0 === char) break;
            string += String.fromCharCode(char)
        }
        return string
    }
    readEscapedUTF8string() {
        const string = this.readUTF8string();
        return decodeURIComponent(escape(string))
    }
    decompress() {
        const input = new Uint8Array(this.dataView.buffer);
        const output = new Uint8Array(this.readUInt32());
        formula.uncompressBuffer(input.slice(5), output)
        this.dataView = new DataView(output.buffer)
        this.index = 0
        this.maxIndex = this.dataView.byteLength
    }
    get endOfBuffer() {
        return this.index >= this.maxIndex;
    }
}

export { reader }