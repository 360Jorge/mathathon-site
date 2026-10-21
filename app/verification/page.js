import cases from "../../data/verification.json";
export default function Verification() {
  return (
    <>
      <h1>Verification</h1>
      <p>Each row is a published case the calculator must reproduce. Update <code>data/verification.json</code> as tests pass.</p>
      <table>
        <thead><tr><th>(d₁, d₂)</th><th>Expected components</th><th>Computed</th><th>Status</th></tr></thead>
        <tbody>{cases.map((c) => (<tr key={c.pair}><td>{c.pair}</td><td>{c.expected}</td><td>{c.computed || "—"}</td><td>{c.status}</td></tr>))}</tbody>
      </table>
    </>
  );
}
