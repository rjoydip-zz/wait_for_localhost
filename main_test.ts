// import { superdeno, Router, Application } from "./deps.ts";

const { test } = Deno;
/* const PORT = 8000;

async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "hello";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

test("use get method", async () => {
  const controller = new AbortController();
  const { signal } = controller;
  app.addEventListener("listen", async ({ hostname, port, secure }) => {
    const protocol = secure ? "https" : "http";
    const url = `${protocol}://${hostname}:${port}`;

    await superdeno(url)
      .get("/")
      .set("Access-Control-Allow-Origin", "*")
      .expect("hello", () => {
        controller.abort();
      });
  });

  await app.listen({ port: PORT, signal });
});
 */
test("sample", () => {});
