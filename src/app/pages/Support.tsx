import { useState } from "react";
import { Link } from "react-router";
import { faq, site } from "../content/site";
import Split from "../components/Split";
import Faq from "../components/Faq";

const topics = ["All", "Connecting", "Devices", "Subscription"] as const;

export default function Support() {
  const [t, setT] = useState<(typeof topics)[number]>("All");
  const list = t === "All" ? faq : faq.filter((f) => f.topic === t);
  return (
    <>
      <section className="phero">
        <div className="container container--narrow phero__inner">
          <span className="tag">Support</span>
          <Split as="h1" className="h1" parts={[["How can we help?"]]} />
          <p className="lead">Answers about connecting devices, rooms, casting and your subscription.</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow">
          <div className="w-chips w-chips--page" role="tablist" aria-label="Topics">
            {topics.map((x) => (
              <button key={x} role="tab" aria-selected={t === x} className={t === x ? "is-on" : ""} onClick={() => setT(x)}>{x}</button>
            ))}
          </div>
          <Faq key={t} items={list} first={null} />

          <div className="mailcard">
            <div>
              <h2>Still stuck?</h2>
              <p>Tell us which device you’re trying to connect and what you see on screen.</p>
            </div>
            <a className="mailcard__mail" href={`mailto:${site.email}`}>{site.email}</a>
            <Link className="link" to="/contact">Or use the contact form</Link>
          </div>
        </div>
      </section>
    </>
  );
}
