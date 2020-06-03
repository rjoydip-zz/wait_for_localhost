# wait_for_localhost ![ci](https://github.com/rjoydip/wait_for_localhost/workflows/ci/badge.svg)

> Wait for localhost to be ready

Useful if you need a local server to be ready to accept requests before doing other things.

## Install

```sh
deno install --allow-net -f --name wait_for_localhost https://deno.land/x/wait_for_localhost/cli.ts
```

## Usage CLI

```sh
$ wait_for_localhost <PORT>

  Example
    $ wait_for_localhost 8000 && echo "Server is ready"
```

## API

### waitForLocalHost([options])

Returns a `Promise` that settles when localhost is ready.

#### options

Type: `Object`

##### port

Type: `number`<br>
Default: `80`

##### path

Type: `string`<br>
Default: `'/'`

Use a custom path.

For example, `/health` for a health-check endpoint.

##### useGet

Type: `boolean`<br>
Default: `false`

Use the `GET` HTTP-method instead of `HEAD` to check if the server is running.

## Usage API

```ts
import { waitForLocalhost } from "https://deno.land/x/wait_for_localhost/mod.ts";

await waitForLocalhost({ port: 8000 });
console.log("Server is ready");
```

## Inspired

Inspired by [wait-for-localhost](https://github.com/sindresorhus/wait-for-localhost)
Inspired by [wait-for-localhost-cli](https://github.com/sindresorhus/wait-for-localhost-cli)

## License

MIT © [Joydip Roy](https://github.com/rjoydip)
