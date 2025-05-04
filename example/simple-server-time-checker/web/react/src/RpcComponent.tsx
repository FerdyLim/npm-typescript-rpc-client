import { callFunction } from "@modulae.systems/rpc-client";
import { useState } from "react"
import { RpcObjects } from "./models";

export function RpcComponent() {

    const [text, setText] = useState("Click on a button above");
    const [accessToken, setAccessToken] = useState("");

    const url = process.env.REACT_APP_RPC_URL || "";

    return (
        <div>
            <p>
                <button onClick={ checkAlive }>Check Server Alive</button>
            </p>
            <p>
                <button onClick={ authenticate }>Authenticate</button>
            </p>
            <p>
                <button onClick={ getServerTime } disabled={ accessToken === "" }>Get Server Time</button><br />(requires authentication)
            </p>
            <hr />
            <div>{text}</div>
        </div>
    )

    async function authenticate() {
        const authKey = process.env.REACT_APP_AUTH_KEY || "";
        const authData: RpcObjects.RequestDataAuth = {
            authKey: authKey,
        }
        const loginResponse = await callFunction(url, RpcObjects.Methods.auth,authData);
        if (loginResponse.error) {
            setText(`Authorisation failed: ${loginResponse.error.code}: ${loginResponse.error.description}`);
        } else if (loginResponse.data) {
            const responseData = loginResponse.data as RpcObjects.ResponseDataAuth;
            setAccessToken(responseData.accessToken);
            setText("Authenticated");
        }         
    }
    
    async function checkAlive() {
        console.log("ENV: URL:",url);
        console.log("ENV: KEY:",process.env.REACT_APP_AUTH_KEY);
        const aliveResponse = await callFunction(url, RpcObjects.Methods.alive,{});
        console.log("SERVER RESPONSE: ",aliveResponse)
        if (aliveResponse.error) {
            setText(`Server: ${aliveResponse.error.code}: ${aliveResponse.error.description}`);
        } else if (aliveResponse.data) {
            const responseData = aliveResponse.data as RpcObjects.ResponseDataAlive;
            setText(responseData.success ? "Server is alive" : "Server is dead");
        }
    }
    
    async function getServerTime() {
        const additionalHeaders = {
            'Authorization': accessToken !== "" ? `Bearer ${accessToken}` : "",
        }
        const timeResponse = await callFunction(url, RpcObjects.Methods.time,{}, additionalHeaders);
        if (timeResponse.error) {
            setText(`Server: ${timeResponse.error.code}: ${timeResponse.error.description}`);
        } else if (timeResponse.data) {
            console.log("RESPONSE DATA: ",timeResponse.data);
            const responseData = timeResponse.data as RpcObjects.ResponseDataTime;
            const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            // timeStyle: 'short',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: 'Asia/Singapore',
            };
            setText(`Time on the server now is: ${(new Date(responseData.currentTime)).toLocaleDateString(undefined, options)}`);
        }
    }
}

export default RpcComponent;