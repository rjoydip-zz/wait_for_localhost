# wait-for-localhost ![ci](https://github.com/rjoydip/wait-for-localhost/workflows/ci/badge.svg)

> Wait for localhost to be ready

Useful if you need a local server to be ready to accept requests before doing other things.

## Install

```sh
deno install --allow-net -f --name wait-for-localhost https://raw.githubusercontent.com/rjoydip/wait-for-localhost/master/cli.ts
```

## Usage CLI

```sh
$ wait-for-localhost <PORT>

  Example
    $ wait-for-localhost 8000 && echo "Server is ready"
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
const { waitForLocalhost } = "https://raw.githubusercontent.com/rjoydip/wait-for-localhost/master/cli.ts";

(async () => {
 await waitForLocalhost(8000);
 console.log('Server is ready');
})();
```

## TODO

- Test

## License

MIT © [Joydip Roy](https://github.com/rjoydip)
