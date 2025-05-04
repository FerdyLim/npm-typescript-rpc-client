import axios, { AxiosRequestConfig } from "axios";
import { RpcRequestModel, RpcResponseModel } from "./types";

export async function callPublicMethod(url: string, method: string, data: any) {
    try {
        const request: RpcRequestModel = {
            method,
            data,
        }
        const fullHeaders: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
            },
            responseType: "json",
        }
        const response = await axios.post(url+"/rpc/public",request, fullHeaders);
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

export async function callProtectedMethod(url: string, method: string, data: any, token: string) {
    try {
        const request: RpcRequestModel = {
            method,
            data,
        }
        const fullHeaders: AxiosRequestConfig = {
            headers: {
                'Authorization': "Bearer "+token,
                'Content-Type': 'application/json',
            },
            responseType: "json",
        }
        const response = await axios.post(url+"/rpc/protected",request, fullHeaders);
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