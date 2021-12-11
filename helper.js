const { Serialize } = require("eosjs");
const { TextEncoder, TextDecoder } = require("util");

const nameToArray = (name) => {
    const sb = new Serialize.SerialBuffer({
        textEncoder: new TextEncoder,
        textDecoder: new TextDecoder
    });

    sb.pushName(name);

    return sb.array;
}

const toHexString = bytes =>
    bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');

module.exports = {
    nameToHex: function (wallet, bytes = 8) {
        return toHexString(nameToArray(wallet).slice(0, bytes))
    }
};
