import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Serves files in /api during `vite dev` the same way Vercel does in
// production, so form submissions work locally without `vercel dev`.
function vercelApiDev(): Plugin {
  return {
    name: "vercel-api-dev",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url ?? "/", "http://localhost");
        const match = url.pathname.match(/^\/api\/([\w-]+)\/?$/);
        if (!match) return next();

        try {
          const mod = await server.ssrLoadModule(`/api/${match[1]}.ts`);
          const handler = mod[req.method ?? "GET"];
          if (typeof handler !== "function") {
            res.statusCode = 405;
            res.end("Method Not Allowed");
            return;
          }

          const chunks: Buffer[] = [];
          for await (const chunk of req) chunks.push(chunk as Buffer);
          const body = chunks.length ? Buffer.concat(chunks) : undefined;

          const request = new Request(url, {
            method: req.method,
            headers: req.headers as Record<string, string>,
            body,
          });
          const response: Response = await handler(request);

          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch (error) {
          server.ssrFixStacktrace(error as Error);
          next(error);
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Expose server-only vars (e.g. RESEND_API_KEY) to the dev API handlers.
  // Shell values win over .env, matching Vercel's behaviour.
  const env = loadEnv(mode, process.cwd(), "");
  for (const [key, value] of Object.entries(env)) {
    process.env[key] ??= value;
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), vercelApiDev(), mode === "development" && componentTagger()].filter(
      Boolean
    ),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
