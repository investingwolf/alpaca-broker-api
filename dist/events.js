"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlpacaEvents = exports.AlpacaEventStreams = void 0;
const eventsource_1 = __importDefault(require("eventsource"));
const stream_1 = require("stream");
exports.AlpacaEventStreams = {
    ACCOUNT_STATUS: '/events/accounts/status',
    TRADES: '/events/trades',
    JOURNAL_STATUS: '/events/journals/status',
    TRANSFER_STATUS: '/events/transfers/status',
    NTA: '/events/nta',
};
class AlpacaEvents extends stream_1.EventEmitter {
    constructor({ apiKey, apiSecret, basePath }) {
        super();
        this.streams = {};
        this.authToken = `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")}`;
        this.basePath = basePath;
    }
    subscribe(stream, cb) {
        const es = new eventsource_1.default(this.basePath + stream, { headers: { authorization: this.authToken } });
        es.onmessage = (message) => {
            try {
                const data = JSON.parse(message.data);
                this.emit(stream, data);
            }
            catch (error) {
                this.emit("error", error);
            }
        };
        es.onerror = (error) => {
            this.emit("error", error);
        };
        if (cb) {
            this.on(stream, cb);
        }
        this.streams[stream] = es;
    }
}
exports.AlpacaEvents = AlpacaEvents;
