# Install
```
npm i @modulae.systems/rpc-client
```

# Notice
@modulae.systems/rpc-client is best used with
- [Typescript](https://www.npmjs.com/package/typescript)
- [@modulae.systems/rpc-server](https://www.npmjs.com/package/@modulae.systems/rpc-server)

# Usage
### On your .ts file
```
import { callFunction } from "@modulae.systems/rpc-client";

function doSomething() {
    let loginData = {
        user: "blablabla",
        pass: "34819d7beeabb9260a5c854bc85b3e44",
    }
    const loginResponse = await callFunction(process.env.RPC_URL,"login",loginData);
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

### For your ```.env``` file
```
RPC_URL=http://mywebsite.com # enter the url to your rpc server, likely localhost during development
```
For apps with React, you need to use the REACT_APP_ prefix, making the key as REACT_APP_RPC_URL=xxxx instead of just RPC_URL=xxxx

## Future features (My personal TODO list)
1. ~~Custom Headers support (by v1)~~
2. Add Sample Projects to showcase what this module can do