import Link from "next/link";
import { notFound } from "next/navigation";
import { SECTIONS, getAll, orderPosts, validate } from "../../lib/content";

export function generateStaticParams() {
  return Object.keys(SECTIONS).map((section) => ({ section }));
}

export default async function Index({ params }) {
  const { section } = await params;
  if (!SECTIONS[section]) notFound();
  validate();
  let items = section === "posts" ? orderPosts() : getAll(section);
  if (section === "notebook") items = [...items].sort((a, b) => b.slug.localeCompare(a.slug));
  return (
    <>
      <h1>{SECTIONS[section]}</h1>
      <ul>
        {items.map((i) => (
          <li key={i.slug}>
            <Link href={`/${section}/${i.slug}`}>{i.data.title}</Link>
            {i.data.summary || i.data.oneLine ? <> — {i.data.summary || i.data.oneLine}</> : null}
            {i.data.status ? <small className="meta"> [{i.data.status}]</small> : null}
          </li>
        ))}
      </ul>
    </>
  );
}
