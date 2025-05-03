"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callFunction = callFunction;
const axios_1 = require("axios");
const dotenv = require("dotenv");
dotenv.config();
async function callFunction(method, data) {
    const request = {
        method,
        data,
    };
    const response = await axios_1.default.post(process.env.RPC_URL + "/rpc", request);
    return response.data;
}
