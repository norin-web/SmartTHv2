import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq as Item } from "../content/site";

/** Accordion list; one answer open at a time. */
export default function Faq({ items, first = 0 }: { items: Item[]; first?: number | null }) {
  const [open, setOpen] = useState<number | null>(first);
  const id = useId();
  return (
    <div className="faq">
      {items.map((f, i) => {
        const on = open === i;
        return (
          <div className={`faq__item${on ? " is-open" : ""}`} key={f.q}>
            <h3>
              <button aria-expanded={on} aria-controls={`${id}-${i}`} onClick={() => setOpen(on ? null : i)}>
                <span>{f.q}</span>
                <ChevronDown aria-hidden="true" size={24} strokeWidth={2} />
              </button>
            </h3>
            <div className="faq__a" id={`${id}-${i}`} role="region">
              <div className="faq__inner">
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
