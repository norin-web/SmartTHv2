import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="nf container">
      <h1 className="h1">This page isn’t here.</h1>
      <p className="lead">The link may be old or mistyped.</p>
      <Btn to="/">Back to Home</Btn>
    </section>
  );
}
