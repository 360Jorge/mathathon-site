export const components = {
  Claim: ({ status = "cited", children }) => (
    <div className={`claim claim-${status}`}><span className="badge">{status}</span>{children}</div>
  ),
  Sidenote: ({ children }) => <aside className="sidenote">{children}</aside>,
  Exercise: ({ children }) => <div className="exercise"><strong>Exercise.</strong>{children}</div>,
  Solution: ({ children }) => <details><summary>Solution</summary>{children}</details>,
  Confusion: ({ children }) => <div className="confusion"><strong>What I got wrong at first.</strong>{children}</div>,
  ConceptLink: ({ slug, children }) => <a href={`/concepts/${slug}`}>{children || slug}</a>,
};
