import { site } from "../content/site";
import { img } from "../utils/img";
import Split from "../components/Split";

// Principles follow real states in the app: "Not responding", "Low battery",
// "Replace filter", "Tank empty", "Tipped over" are all screens in the design.
const principles = [
  {
    title: "One screen first",
    text: "Every device is a card on Home you can use right there.",
  },
  {
    title: "Use what you already own",
    text: "HomeKit accessories, TVs and speakers on your Wi‑Fi, AirPlay.",
  },
  {
    title: "Say plainly what’s wrong",
    text: "Not responding, low battery, replace filter: in words, not codes.",
  },
];

export default function About() {
  return (
    <>
      <section className="dhero dhero--about">
        <div className="container dhero__about">
          <div>
            <Split as="h1" className="h1" parts={[["Built around"], ["\n"], ["the room you’re in."]]} />
            <p className="lead">
              {site.brand} started from a simple idea: the phone in your hand should be enough to run the house.
            </p>
          </div>
          <img className="phone dhero__phone" src={img("/images/phone-home.webp")} alt="Home screen with a speaker, an air conditioner and a smart lamp" width={720} height={1560} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="shead shead--left">
            <h2 className="h2">How we build it</h2>
            <p className="lead">Smart homes get complicated fast. We keep the app calm on purpose.</p>
          </div>
          <div className="pgrid">
            {principles.map((p) => (
              <article className="pcard" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </div>
          <p className="about__op">{site.brand} is published by {site.operator}.</p>
        </div>
      </section>
    </>
  );
}
