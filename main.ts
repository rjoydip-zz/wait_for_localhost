import { serve } from "./deps.ts";

export function waitForLocalhost(options: {
  port: number;
  path?: string;
  useGet?: boolean;
} = {
  port: 8080,
  path: "/",
  useGet: true,
}) {
    return new Promise((resolve) => {
    const method = options.useGet ? "GET" : "HEAD";
    const server = serve({ port: options.port });
    const main = async () => {
      for await (const req of server) {
        if (req.method === method && req.url === options.path)
          return req.respond({}).then(resolve);
      }
    };
    main();
  });
}
