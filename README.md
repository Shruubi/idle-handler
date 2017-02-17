# idleHandler

A simple, dependency-free implementation of a window-idle checker.

## Installation

#### NPM

Library can be installed via NPM using the following command:

```
$ npm install --save idle-handler
```

#### Browser

Download a copy of `idlehandler.bundle.js` from the `dist/` folder.

## Usage

#### NPM

```
import { createIdleHandler } from 'idle-handler';

var handler = createIdleHandler(timeoutInMinutes, function () {
	alert('you have timed out');
});

window.onload = handler;
```

#### Browser

Add the distribution javascript file to your HTML page

```
<script type="text/javascript" src="/some/path/to/idlehandler.bundle.js"></script>
```

Now use the `createIdleHandler()` function on the `idleHandler` object to create
your handler function and assign it as the callback for `window.onload`.

```
var timeoutInMinutes = 5;
var handler = idleHandler.createIdleHandler(timeoutInMinutes, function () {
	alert('you have timed out');
});

window.onload = handler;
```

## Documentation

###### createIdleHandler(timeout: Number, callback: Function): Function

- `timeout` represents the amount of time in minutes before `callback` is called.
- `callback` is the function that will be called if there is no interaction with
the browser for the period of time specified by 1timeout

**Note: timeout is the amount of time in whole minutes, so prepare accordingly.**

## License

This software is licensed under the MIT license. Refer to `LICENSE` for 
more information.