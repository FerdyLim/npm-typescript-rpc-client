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
    const loginResponse = await callFunction("login",loginData);
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

### Add this line to your ```.env``` file
```
...
RPC_URL=https://some-website.com # the RPC Server URL
...
```

## Future features (My personal TODO list)
1. ~~Custom Headers support (by v1)~~
2. Add Sample Projects to showcase what this module can do