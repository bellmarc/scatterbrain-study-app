# User functions

Provides functions to add, get users from Server and Browser localStorage


## Get User from Server
```
import userServer from './functions/User/Server.js';
userServer.get({name: "Jonathan"})
```
returns a promise that resolves to response.data
## Add User to Server
```
import userServer from './functions/User/Server.js';
userServer.add({name: "Jonathan"})
```
returns a promise that resolves to response.data

## Get User object from Browser's Local Storage
```
import userBrowser from './functions/User/Browser.js';
userBrowser.get()
```
## Add User object to Browser's Local Storage
Does not return anything
```
import userBrowser from './functions/User/Browser.js';
userBrowser.add({ user: "Lynn" })
```
## Clear User
```
import userBrowser from './functions/User/Browser.js';
userBrowser.clear()
```
