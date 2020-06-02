#!/usr/bin/env -S deno

import { waitForLocalhost } from "./mod.ts";

async function cli() {
  const args = Deno.args;
  await waitForLocalhost({
    port: parseInt(args[0] ?? "8080", 10),
  });
  Deno.exit();
}

cli();
