#!/usr/bin/env -S deno

import { waitForLocalhost } from "./mod.ts";
import { colors } from "./deps.ts";

function help() {
  console.log(`
    $ wait-for-localhost --help

    Usage
      $ wait-for-localhost [port]

    Options
      --use-get  Use the HTTP-method GET instead of HEAD to test if the server is ready

    Example
      $ wait-for-localhost 8080 && echo 'Server is ready'
  `);
}

async function cli() {
  const args = Deno.args;
  let port = 8080;
  if (
    args[0] === "--help" ||
    args[0] === "-h" ||
    args[0] === "h" ||
    args[0] === "help"
  ) {
    help();
    Deno.exit();
  }
  try {
    console.log();
    console.log(colors.cyan("Waiting for server response ..."));
    await waitForLocalhost({
      port: parseInt(args[0] ?? port, 10),
      useGet: !!args.includes("--use-get"),
    });
    console.log(colors.green("Server is ready"));
    Deno.exit();
  } catch (error) {
    Deno.exit(1);
  }
}

cli();
