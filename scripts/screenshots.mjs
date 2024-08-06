import { readFile, mkdir } from "node:fs/promises";
import puppeteer from "puppeteer";
import { glob } from "glob";
import matter from "gray-matter";

const formats = [
  { width: 357, height: 700 },
  { width: 425, height: 700 },
  { width: 768, height: 700 },
  { width: 1024, height: 700 },
  { width: 1260, height: 700 },
];

const slugify = (str) => {
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;".split("");
  const to = "aaaaeeeeiiiioooouuuunc------".split("");
  return str
    .replace(/^\s+|\s+$/g, "")
    .toLowerCase()
    .replace(new RegExp(from.join("|"), "g"), (m) => {
      const index = from.findIndex((el) => el === m);
      return to[index] ?? "z";
    })
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/(\s+|-+)/g, "-");
};

const files = await glob("src/content/sites/*.md");

await mkdir("src/content/assets/screenshots");
const browser = await puppeteer.launch();
const page = await browser.newPage();
for await (const filePath of files) {
  const file = await readFile(filePath, { encoding: "utf8" });
  const { title, url } = matter(file).data;
  await page.goto(url);
  await page.evaluate(() => {
    return new Promise((resolve) => {
      setTimeout(
        () =>
          requestAnimationFrame(() =>
            requestIdleCallback(resolve, { timeout: 2000 })
          ),
        2000
      );
    });
  });
  for (let index = 0; index < formats.length; index++) {
    await page.setViewport(formats[index]);
    await page.screenshot({
      path: `src/content/assets/screenshots/${slugify(title)}${index}.webp`,
      type: "webp",
    });
  }
}
await browser.close();
