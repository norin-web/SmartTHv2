import { Fragment, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { NavLink } from "react-router";
import { ChevronDown, Search } from "lucide-react";
import { site } from "../content/site";
import type { LegalDoc } from "../content/legal";
import Split from "./Split";

type Section = { id: string; title: string; blocks: string[]; text: string };

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
      sections.push({ id: slug(title), title, blocks: [], text: title.toLowerCase() });
    } else if (sections.length) {
      const s = sections[sections.length - 1];
      s.blocks.push(block);
      s.text += " " + block.toLowerCase();
    } else if (block.trim()) intro.push(block);
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
  return (
    <p>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

/**
 * Legal document page: a Privacy / Terms switch, a search that narrows the
 * sections, collapsible sections and a reading-progress line under the header.
 */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  const { intro, sections } = useMemo(() => parse(doc.body ?? ""), [doc.body]);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<Set<string>>(() => new Set(sections.slice(0, 1).map((s) => s.id)));
  const bar = useRef<HTMLSpanElement>(null);
  const article = useRef<HTMLDivElement>(null);

  const query = q.trim().toLowerCase();
  const shown = query ? sections.filter((s) => s.text.includes(query)) : sections;
  const allOpen = shown.length > 0 && shown.every((s) => open.has(s.id));

  // reading progress through the document body
  useEffect(() => {
    const update = () => {
      const el = article.current;
      if (!el || !bar.current) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.5 - r.top) / Math.max(1, r.height - innerHeight * 0.5)));
      bar.current.style.transform = `scaleX(${p})`;
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, [shown.length, open]);

  const toggle = (id: string) => {
    const next = new Set(open);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setOpen(next);
  };

  return (
    <>
      <div className="lprogress" aria-hidden="true"><span ref={bar} /></div>

      <section className="ldoc">
        <div className="container container--doc">
          <nav className="w-seg ldoc__switch" aria-label="Documents">
            <NavLink to="/privacy" className={({ isActive }) => (isActive ? "is-on" : "")}>Privacy Policy</NavLink>
            <NavLink to="/terms" className={({ isActive }) => (isActive ? "is-on" : "")}>Terms of Use</NavLink>
          </nav>
          <Split as="h1" className="h1 ldoc__title" parts={[[doc.title]]} />

          {!doc.body ? (
            <p className="lead">
              The full {doc.title} will be published here. Until then, write to <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ) : (
            <>
              {intro.map((t, i) => (
                <p className="ldoc__intro" key={i}>{linkify(t)}</p>
              ))}

              <div className="ldoc__tools">
                <label className="ldoc__search">
                  <Search size={18} aria-hidden="true" />
                  <span className="sr-only">Search this document</span>
                  <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Search the ${doc.title.toLowerCase()}`} />
                </label>
              </div>
              <div className="ldoc__row">
                <p className="ldoc__count" aria-live="polite">
                  {query ? `${shown.length} of ${sections.length} sections match` : `${sections.length} sections`}
                </p>
                <button
                  className="ldoc__all"
                  onClick={() => setOpen(allOpen ? new Set() : new Set([...open, ...shown.map((s) => s.id)]))}
                  disabled={!shown.length}
                >
                  {allOpen ? "Collapse all" : "Expand all"}
                </button>
              </div>

              <div className="ldoc__list" ref={article}>
                {shown.map((s) => {
                  const on = open.has(s.id) || !!query;
                  return (
                    <section className={`lsec${on ? " is-open" : ""}`} id={s.id} key={s.id}>
                      <h2>
                        <button aria-expanded={on} aria-controls={`${s.id}-body`} onClick={() => toggle(s.id)}>
                          <span>{s.title}</span>
                          <ChevronDown size={22} aria-hidden="true" />
                        </button>
                      </h2>
                      <div className="lsec__body" id={`${s.id}-body`} hidden={!on}>
                        {s.blocks.map((b, j) => <Block key={j} text={b} />)}
                      </div>
                    </section>
                  );
                })}
                {!shown.length && <p className="ldoc__none">Nothing found for “{q}”. Try another word.</p>}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
