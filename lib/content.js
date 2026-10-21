import fs from "fs";
import path from "path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content");
export const SECTIONS = { posts: "Posts", concepts: "Concepts", notebook: "Notebook" };

export const fmt = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d));

export function getAll(section) {
  const dir = path.join(ROOT, section);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => {
    const { data, content } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
    return { slug: f.replace(/\.mdx$/, ""), data, content };
  });
}
export const getOne = (section, slug) => getAll(section).find((x) => x.slug === slug);

// Fails the build if a post names a prerequisite or concept that does not exist.
export function validate() {
  const posts = getAll("posts");
  const postSlugs = posts.map((p) => p.slug);
  const conceptSlugs = getAll("concepts").map((c) => c.slug);
  for (const p of posts) {
    for (const s of p.data.prereqs || []) if (!postSlugs.includes(s)) throw new Error(`Post "${p.slug}": unknown prerequisite "${s}"`);
    for (const s of p.data.concepts || []) if (!conceptSlugs.includes(s)) throw new Error(`Post "${p.slug}": unknown concept "${s}"`);
  }
}

// Posts in dependency order.
export function orderPosts() {
  const posts = getAll("posts");
  const done = new Set();
  const out = [];
  while (out.length < posts.length) {
    const next = posts.filter((p) => !done.has(p.slug) && (p.data.prereqs || []).every((s) => done.has(s)));
    if (!next.length) throw new Error("Cycle in post prerequisites");
    next.forEach((p) => { done.add(p.slug); out.push(p); });
  }
  return out;
}
