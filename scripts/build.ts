import { $ } from "bun";


const htmlFile = Bun.file("./build/index.html")

await $`bunx @tailwindcss/cli -i ./src/index.css -o ./build/index.css`
await Bun.build({
  entrypoints: ['./src/main.tsx'],
  outdir: './build',
});

const exists = await htmlFile.exists();
if (!exists) {
  const htmlContent = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="data:,">
      <link rel="stylesheet" type="text/css" href="index.css">
      <title>Vite + React + TS</title>
    </head>
    <body>
      <div id="root"></div>
      <script type="module" src="/main.js"></script>
    </body>
    </html>
  `;
  await Bun.write(htmlFile, htmlContent);
}
export { }
