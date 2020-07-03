import { createApp } from "https://servestjs.org/@v1.0.0/mod.ts";
import { routes } from "./router.ts";

const app = createApp();

app.route("/", routes());
app.listen({ port: 8080 });
