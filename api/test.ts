import { ServerRequest } from "https://deno.land/std@0.58.0/http/server.ts";
import { createApp } from "https://servestjs.org/@v1.1.0/mod.ts";

export default async (req: ServerRequest) => {
  // req.respond({ body: `Hell Wird!` });
  const app = createApp();
  app.get("/", async (req) => {
    await req.respond({
      status: 200,
      body: "Hell Word",
    });
  });
  app.listen({ port: 8000 });
};
