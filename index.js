require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");
const { banners } = require("./banners");

async function main() {
  const readmeTemplate = (
    await fs.readFile(path.join(process.cwd(), "./README.md.tmpl"))
  ).toString("utf-8");

  const banner = banners[Math.floor(Math.random() * banners.length)];

  console.log(banner);

  const readme = readmeTemplate.replace("{banner}", banner);

  await fs.writeFile("README.md", readme);
}

main();
