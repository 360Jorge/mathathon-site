import "katex/dist/katex.min.css";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Hassett divisors and cubic fourfolds",
  description: "Notes toward understanding the lattice picture of cubic fourfold rationality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header><nav>
          <Link href="/">Start here</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/concepts">Concepts</Link>
          <Link href="/notebook">Notebook</Link>
          <Link href="/verification">Verification</Link>
          <Link href="/ai-use">AI use</Link>
          <Link href="/about">About</Link>
        </nav></header>
        <main>{children}</main>
      </body>
    </html>
  );
}
