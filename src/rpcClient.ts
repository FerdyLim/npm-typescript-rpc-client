import axios, { AxiosRequestConfig } from "axios";
import { RpcHeaders, RpcRequestModel, RpcResponseModel } from "./types";

export async function callFunction(method: string, data: any, headers?: RpcHeaders) {
    try {
        const request: RpcRequestModel = {
            method,
            data,
        }
        const fullHeaders: AxiosRequestConfig = {
            headers: {
                // 'Authorization': "", // future enhancements
                ...headers,
                'Content-Type': 'application/json',
            },
            responseType: "json",
        }
        const response = await axios.post(process.env.RPC_URL+"/rpc",request, fullHeaders);
        return response.data as RpcResponseModel;
    } catch (error) {
        return {
            error: {
                code: 404,
                description: "Unable to reach server"
            },
            data: null,
        } as RpcResponseModel;
    }
}