import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Hassett divisors and cubic fourfold rationality</h1>
      <p>An effort to understand the lattice picture behind Hassett divisors and write it down clearly, for the Caltech Mathathon (Old Problems, New Proofs).</p>
      <p className="meta"><strong>Status:</strong> early. Nothing here is a new theorem; the goal is an exposition and an implementation of an existing algorithm.</p>
      <p><strong>Epistemic note.</strong> Posts label each nontrivial claim as proved, cited, computed, a guess, or a black box I do not yet understand.</p>
      <p>Start with <Link href="/posts">the posts</Link>, or look up a term in <Link href="/concepts">the concepts</Link>.</p>
    </>
  );
}
