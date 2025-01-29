// src/index.ts
var server = Bun.serve({
  port: 3000,
  fetch(_) {
    return new Response("Bun!");
  },
  development: true
});
console.log(`Listening on http://localhost:${server.port} ...`);
