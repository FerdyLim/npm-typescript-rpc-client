import axios from "axios";
import * as dotenv from "dotenv";
import { RpcRequestModel, RpcResponseModel } from "./types";

dotenv.config();

export async function callFunction(method: string, data: any) {
    const request: RpcRequestModel = {
        method,
        data,
    }
    const response = await axios.post(process.env.RPC_URL+"/rpc",request);
    return response.data as RpcResponseModel;
}