class formula {
    static xorBuffer(message, key) {
        let times = 0;
        for (; times < message.byteLength; times++) {
            message.setUint8(times, message.getUint8(times) ^ key >>> (times % 4 * 8) & 255);
        }
        return message
    }
    static rotateKey(key) {
        key = Math.imul(key, 1540483477) | 0
        key = (Math.imul(key >>> 24 ^ key, 1540483477) | 0) ^ 114296087
        key = Math.imul(key >>> 13 ^ key, 1540483477) | 0
        key = key >>> 15 ^ key
        return key
    }
    static murmur2(url, option) {
        if (!url.length || !option.byteLength) {
            return null;
        }
        let key = null;
        const constraints = url.match(/(wss+:\/\/)([^:]*)(:\d+)/)[2];
        const framesize = constraints.length + option.byteLength;
        const data = new Uint8Array(framesize);
        let value = 0;
        for (; value < constraints.length; value++) {
            data[value] = constraints.charCodeAt(value);
        }
        data.set(option, constraints.length);
        const view = new DataView(data.buffer);
        let maxTextureAvailableSpace = framesize - 1;
        const type = (maxTextureAvailableSpace - 4 & -4) + 4 | 0;
        let imulkeyValue = maxTextureAvailableSpace ^ 255;
        let offset = 0;
        for (; maxTextureAvailableSpace > 3;) {
            key = Math.imul(view.getInt32(offset, true), 1540483477) | 0;
            imulkeyValue = (Math.imul(key >>> 24 ^ key, 1540483477) | 0) ^ (Math.imul(imulkeyValue, 1540483477) | 0);
            maxTextureAvailableSpace = maxTextureAvailableSpace - 4;
            offset = offset + 4;
        }
        switch (maxTextureAvailableSpace) {
            case 3:
                imulkeyValue = data[type + 2] << 16 ^ imulkeyValue;
                imulkeyValue = data[type + 1] << 8 ^ imulkeyValue;
                break;
            case 2:
                imulkeyValue = data[type + 1] << 8 ^ imulkeyValue;
                break;
            case 1:
                break;
            default:
                key = imulkeyValue;
                break;
        }
        if (key != imulkeyValue) {
            key = Math.imul(data[type] ^ imulkeyValue, 1540483477) | 0;
        }
        imulkeyValue = key >>> 13;
        key = imulkeyValue ^ key;
        key = Math.imul(key, 1540483477) | 0;
        imulkeyValue = key >>> 15;
        key = imulkeyValue ^ key;
        return key;
    }
    static uncompressBuffer(input, output) {
        for (let i = 0, j = 0; i < input.length;) {
            const byte = input[i++]
            let literalsLength = byte >> 4
            if (literalsLength > 0) {
                let length = literalsLength + 240
                while (length === 255) {
                    length = input[i++]
                    literalsLength += length
                }
                const end = i + literalsLength
                while (i < end) output[j++] = input[i++]
                if (i === input.length) return output
            }
            const offset = input[i++] | (input[i++] << 8)
            if (offset === 0 || offset > j) return -(i - 2)
            let matchLength = byte & 15
            let length = matchLength + 240
            while (length === 255) {
                length = input[i++]
                matchLength += length
            }
            let pos = j - offset
            const end = j + matchLength + 4
            while (j < end) output[j++] = output[pos++]
        }
        return output
    }
};
export { formula }