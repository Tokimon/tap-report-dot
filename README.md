# tap-report-dot

Formatted TAP output with dots ...

**NOTE**

Originaly forked from the excellent [tap-dot](https://github.com/scottcorgan/tap-dot) by [scottcorgan](https://github.com/scottcorgan),
but the [tap-out](https://github.com/scottcorgan/tap-out) parser doesn't work properly with in-script streams,
so I switched the TAP parser to [tap-parser](https://github.com/tapjs/tap-parser)

**Passed tests**

![Passed tests](https://i.cloudup.com/NUrIyLYHct.png)

**Failed tests**

![Failed tests](https://i.cloudup.com/70SmvILs9I.png)

## Install

```
npm install tap-report-dot --save-dev
```

## Usage

**package.json**

```json
{
  "name": "module-name",
  "scripts": {
    "test": "node ./test/tap-test.js | tap-report-dot"
  }
}
```

Then run with `npm test`

**Streaming**

```js
const dot = require('tap-report-dot');
const tape = require('tape'); // Or another TAP reporter

tape.createStream()
  .pipe(dot())
  .pipe(process.stdout);
```

**Terminal**

```
tape test/index.js | node_modules/.bin/tap-report-dot
```

**Testling**

```
npm install testling -g
testling test/index.js | node_modules/.bin/tap-report-dot
```
