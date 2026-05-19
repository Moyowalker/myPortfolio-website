import { readFile, access } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const requiredFiles = [
  "index.html",
  "vercel.json",
  "public/robots.txt",
  "public/sitemap.xml",
  "public/og-cover.svg",
  "public/favicon.svg",
];

const checks = [];

async function fileExists(relativePath) {
  try {
    await access(path.join(root, relativePath));
    return true;
  } catch {
    return false;
  }
}

function addCheck(label, passed, detail) {
  checks.push({ label, passed, detail });
}

async function read(relativePath) {
  return readFile(path.join(root, relativePath), "utf8");
}

async function main() {
  for (const relativePath of requiredFiles) {
    addCheck(
      `Required file exists: ${relativePath}`,
      await fileExists(relativePath),
      await fileExists(relativePath)
        ? "present"
        : "missing"
    );
  }

  const indexHtml = await read("index.html");
  const robots = await read("public/robots.txt");
  const sitemap = await read("public/sitemap.xml");
  const vercel = await read("vercel.json");
  const readme = await read("README.md");

  addCheck(
    "Canonical points to moyosore.me",
    indexHtml.includes('<link rel="canonical" href="https://moyosore.me/" />'),
    "Expected canonical domain in index.html"
  );

  addCheck(
    "Open Graph image uses local branded asset",
    indexHtml.includes('<meta property="og:image" content="/og-cover.svg" />'),
    "Expected /og-cover.svg in index.html"
  );

  addCheck(
    "Favicon uses SVG brand mark",
    indexHtml.includes('<link rel="icon" type="image/svg+xml" href="/favicon.svg" />'),
    "Expected /favicon.svg in index.html"
  );

  addCheck(
    "Plausible domain is moyosore.me",
    indexHtml.includes('data-domain="moyosore.me"'),
    "Expected plausible data-domain in index.html"
  );

  addCheck(
    "Robots points to production sitemap",
    robots.includes("Sitemap: https://moyosore.me/sitemap.xml"),
    "Expected production sitemap URL in robots.txt"
  );

  addCheck(
    "Sitemap points to production homepage",
    sitemap.includes("<loc>https://moyosore.me/</loc>"),
    "Expected homepage URL in sitemap.xml"
  );

  addCheck(
    "Vercel config uses dist output",
    vercel.includes('"outputDirectory": "dist"'),
    "Expected dist outputDirectory in vercel.json"
  );

  addCheck(
    "Vercel config includes API rewrites",
    vercel.includes('"source": "/api/:path*"') && vercel.includes('"destination": "/api/:path*"'),
    "Expected API rewrite in vercel.json"
  );

  addCheck(
    "README references production domain",
    readme.includes("https://moyosore.me") && readme.includes("dev@moyosore.me"),
    "Expected live domain and contact address in README.md"
  );

  const failures = checks.filter((check) => !check.passed);

  for (const check of checks) {
    const prefix = check.passed ? "PASS" : "FAIL";
    console.log(`${prefix}  ${check.label} - ${check.detail}`);
  }

  if (failures.length) {
    console.error(`\nLaunch verification failed with ${failures.length} issue(s).`);
    process.exit(1);
  }

  console.log("\nLaunch verification passed.");
}

main().catch((error) => {
  console.error("Launch verification crashed.");
  console.error(error);
  process.exit(1);
});
