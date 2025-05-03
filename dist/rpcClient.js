"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callFunction = callFunction;
const axios_1 = require("axios");
const dotenv = require("dotenv");
dotenv.config();
async function callFunction(method, data, headers) {
    const request = {
        method,
        data,
    };
    const fullHeaders = {
        headers: {
            // 'Authorization': "", // future enhancements
            ...headers,
            'Content-Type': 'application/json',
        },
        responseType: "json",
    };
    const response = await axios_1.default.post(process.env.RPC_URL + "/rpc", request, fullHeaders);
    return response.data;
}
