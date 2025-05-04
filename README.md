# Install
```
npm i @modulae.systems/rpc-client
```

# Notice
@modulae.systems/rpc-client is best used with
- [Typescript](https://www.npmjs.com/package/typescript)
- [@modulae.systems/rpc-server](https://www.npmjs.com/package/@modulae.systems/rpc-server)

# Usage
### Public RPC calls (without requiring Tokens)
```
import { callPublicMethod } from "@modulae.systems/rpc-client";

function login() {
    let loginData = {
        user: "blablabla",
        pass: "34819d7beeabb9260a5c854bc85b3e44",
    }
    const loginResponse = await callPublicMethod(process.env.RPC_URL,"login",loginData);
    if (!loginResponse.error) {
        const responseData = loginResponse.data;
        // process the data here
    } else {
        // display your error with loginResponse.error.description
        // or handle the error according to the code returned with loginResponse.error.code
        // you may also debug with loginResponse.error.debug if your rpc-server is returning any error debug objects defined by your team
    }
}
```
### Protected RPC calls (require Tokens)
```
import { callProtectedMethod } from "@modulae.systems/rpc-client";

function editProfile(token: string) {
    let changedProfile = {
        name: "blablabla",
    }
    const profileResponse = await callProtectedMethod(process.env.RPC_URL,"editProfile",changedProfile,token);
    if (!profileResponse.error) {
        const responseData = profileResponse.data;
        // process the data here
    } else {
        // display your error with profileResponse.error.description
        // or handle the error according to the code returned with profileResponse.error.code
        // you may also debug with profileResponse.error.debug if your rpc-server is returning any error debug objects defined by your team
    }
}
```

### For your ```.env``` file
```
RPC_URL=http://mywebsite.com # enter the url to your rpc server, likely localhost during development
```
For apps with React, you need to use the REACT_APP_ prefix, making the key as REACT_APP_RPC_URL=xxxx instead of just RPC_URL=xxxx
For apps with VueJS, you need to use the VUE_APP_ prefix, making the key as VUE_APP_RPC_URL=xxxx instead of just RPC_URL=xxxx