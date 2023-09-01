"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("datakit/http"));
function getWebpage() {
    const url = 'https://www.google.com';
    return http_1.default.get(url);
}
exports.default = getWebpage;
