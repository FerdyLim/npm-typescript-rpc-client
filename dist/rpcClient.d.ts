import { RpcHeaders, RpcResponseModel } from "./types";
export declare function callFunction(method: string, data: any, headers?: RpcHeaders): Promise<RpcResponseModel>;
