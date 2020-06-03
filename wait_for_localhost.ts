import { serve, colors } from "./deps.ts";

export function waitForLocalhost({
  port,
  path,
  useGet,
  log,
}: {
  port?: number;
  path?: string;
  useGet?: boolean;
  log?: boolean;
}) {
  const port_ = port || 8080,
    path_ = path || "/",
    useGet_ = useGet || true,
    enableLog = log || false;
  return new Promise((resolve, reject) => {
    const method = useGet_ ? "GET" : "HEAD";
    try {
      const server = serve({ port: port_ });
      const main = async () => {
        for await (const req of server) {
          if (req.method === method && req.url === path_) {
            enableLog ??
              console.log(`${colors.cyan(`${req.method} ${req.url}`)}`);
            return req.respond({}).then(resolve);
          } else {
            enableLog ??
              console.log(`${colors.red(`${req.method} ${req.url}`)}`);
          }
        }
      };
      main();
    } catch (_) {
      console.log(colors.red(`\n${port_} is already running`));
      return reject()
    }
  });
}
