import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { SECTIONS, getAll, getOne, validate, fmt } from "../../../lib/content";
import { components } from "../../../components/mdx";

export function generateStaticParams() {
  return Object.keys(SECTIONS).flatMap((section) => getAll(section).map((x) => ({ section, slug: x.slug })));
}

export default async function Page({ params }) {
  const { section, slug } = await params;
  if (!SECTIONS[section]) notFound();
  validate();
  const item = getOne(section, slug);
  if (!item) notFound();
  const d = item.data;
  const meta = [d.status, d.confidence && `confidence: ${d.confidence}`, d.updated && `updated ${fmt(d.updated)}`, d.date && fmt(d.date)].filter(Boolean).join(" · ");
  return (
    <article>
      <h1>{d.title}</h1>
      <p className="meta">{meta}</p>
      {d.prereqs?.length ? (
        <p className="meta">Prerequisites: {d.prereqs.map((s) => (<a key={s} href={`/posts/${s}`}>{s} </a>))}</p>
      ) : null}
      <MDXRemote
        source={item.content}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] } }}
      />
    </article>
  );
}
