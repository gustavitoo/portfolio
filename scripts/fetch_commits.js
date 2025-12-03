import fs from "node:fs/promises";

const GITHUB_USER = "gustavitoo";
const FEED_URL = `https://github.com/${GITHUB_USER}.atom`;

async function main() {
  console.log("Fetching commits…");

  const res = await fetch(FEED_URL);
  const xml = await res.text();

  await fs.writeFile("public/commits.xml", xml, "utf8");

  console.log("XML guardado");
}

main();
