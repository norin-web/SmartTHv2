import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import { legalUpdated, type LegalDoc } from "../content/legal";
import Split from "./Split";
import Btn from "./Btn";

type Section = { id: string; title: string; blocks: string[] };

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : part,
  );

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Split the verbatim text into an intro and "## " sections; wording is never changed. */
function parse(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const title = block.slice(3);
      sections.push({ id: slug(title), title, blocks: [] });
    } else if (sections.length) sections[sections.length - 1].blocks.push(block);
    else if (block.trim()) intro.push(block);
  }
  return { intro, sections };
}

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  // all-caps legal clauses get a quiet box so they don’t shout across the page
  const caps = text.length > 40 && text === text.toUpperCase();
  return (
    <p className={caps ? "legal-caps" : undefined}>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const { intro, sections } = useMemo(() => parse(doc.body ?? ""), [doc.body]);
  const [active, setActive] = useState(sections[0]?.id);

  // highlight the section whose heading last passed the upper third of the viewport
  useEffect(() => {
    if (!sections.length) return;
    const onScroll = () => {
      let cur = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [sections]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 96, behavior: "smooth" });
  };

  return (
    <>
      <section className="dhero">
        <div className="container">
          <p className="dhero__date">{doc.body ? `Effective ${legalUpdated}` : "Coming soon"}</p>
          <Split as="h1" className="h1" parts={[[doc.title]]} />
          <div className="dhero__meta">
            {sections.length > 0 && <span>{sections.length} sections</span>}
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <Link to={doc.other.to}>{doc.other.label}</Link>
          </div>
        </div>
      </section>

      <section className="legal">
        <div className={`container ${sections.length ? "legal__grid" : "container--narrow"}`}>
          {sections.length > 0 && (
            <nav className="legal__toc" aria-label="Contents">
              <ol>
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      className={active === s.id ? "is-on" : ""}
                      onClick={() => go(s.id)}
                      aria-current={active === s.id ? "true" : undefined}
                      aria-label={s.title}
                      title={s.title}
                    >
                      <b>{i + 1}</b>
                      <i aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <article className="legal__body">
            {!doc.body && (
              <div className="legal__soon">
                <h2>The full {doc.title} will be published here.</h2>
                <p>
                  Until then, write to <a href={`mailto:${site.email}`}>{site.email}</a> with any question about {doc.title === "Privacy Policy" ? "your data" : "using the app"}.
                </p>
              </div>
            )}

            {doc.glance && doc.glance.length > 0 && (
              <div className="glance">
                <h2>At a glance</h2>
                <div className="glance__grid">
                  {doc.glance.map(([h, t]) => (
                    <div className="glance__card" key={h}>
                      <b>{h}</b>
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <p className="glance__note">A short summary for convenience. The full text below is what applies.</p>
              </div>
            )}

            {intro.map((t, i) => (
              <p className="legal__intro" key={i}>{linkify(t)}</p>
            ))}

            {sections.map((s, i) => (
              <section className="lsec" id={s.id} key={s.id}>
                <h2>{s.title}</h2>
                {s.blocks.map((b, j) => <Block key={j} text={b} />)}
              </section>
            ))}

            <div className="legal__ask">
              <div>
                <h2>Questions?</h2>
                <p>Write to <a href={`mailto:${site.email}`}>{site.email}</a> and we’ll get back to you.</p>
              </div>
              <Btn to="/contact" variant="dark">Contact us</Btn>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
