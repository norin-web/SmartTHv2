import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, Tv, AirVent, Lightbulb, Speaker, Plug, Lock, Radar } from "lucide-react";
import { app, connect, devices, faq, heroChecks, kinds, steps } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Split from "../components/Split";
import Faq from "../components/Faq";
import { ClimateWidget, LampWidget, MusicWidget, RoomsWidget } from "../components/Widgets";

const kindIcons = [Tv, AirVent, Lightbulb, Speaker, Plug, Lock, Radar];

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="tag">Smart home remote for iPhone</span>
          <Split as="h1" className="h1" parts={[["Your whole home,"], ["\n"], ["one remote."]]} />
          <p className="lead">Control TVs, air conditioners, lights and speakers from one app, and group every device by room.</p>
          <div className="hero__cta">
            <Btn href={app.url}>Download on the App Store</Btn>
          </div>
          <ul className="checks">
            {heroChecks.map((c) => (
              <li key={c}><span className="checks__i"><Check size={13} strokeWidth={2.6} /></span>{c}</li>
            ))}
          </ul>
          <div className="kinds">
            <p>Works with the devices you already have</p>
            <ul>
              {kinds.map((k, i) => {
                const I = kindIcons[i];
                return <li key={k}><I size={18} strokeWidth={1.7} aria-hidden="true" />{k}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="hero__panel">
          <img className="phone hero__phone" src={img("/images/phone-home.webp")} alt="Smart Things Home Manager Home screen with a speaker, an air conditioner and a smart lamp" width={720} height={1560} />
        </div>
      </div>
    </section>
  );
}

function Head({ tag, title, text }: { tag: string; title: ReactNode; text: string }) {
  return (
    <div className="shead">
      <span className="tag">{tag}</span>
      <h2 className="h2">{title}</h2>
      <p className="lead">{text}</p>
    </div>
  );
}

function Features() {
  const cards = [
    { title: "Climate in one tap", text: "Mode and temperature right on the card.", w: <ClimateWidget /> },
    { title: "Music where you are", text: "See what’s playing and pause it from Home.", w: <MusicWidget /> },
    { title: "Light in any color", text: "Power and color in one row.", w: <LampWidget /> },
    { title: "Rooms for every space", text: "Group devices and turn a room off at once.", w: <RoomsWidget /> },
  ];
  return (
    <section className="section" id="features">
      <div className="container">
        <Head tag="Features" title={<>Every device,<br />one calm screen.</>} text="Each device is a card you can use right away." />
        <div className="fgrid">
          {cards.map((c) => (
            <article className="fcard" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <div className="fcard__ui">{c.w}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="section" id="how">
      <div className="container">
        <Head tag="How it works" title="Set up in minutes" text="Download the app, add what you have at home, and start controlling it." />
        <ol className="steps">
          {steps.map((s, i) => (
            <li className="step" key={s.title}>
              {i === 0 ? (
                <img className="step__icon" src={img("/images/app-icon.png")} alt="" width={48} height={48} />
              ) : (
                <span className="step__n" aria-hidden="true">{i + 1}</span>
              )}
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const AUTO_MS = 6000;

function Devices() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = auto && inView && !paused;
  const d = devices[i];

  return (
    <section className="section" id="devices">
      <div className="container">
        <Head tag="Devices" title={<>One app for<br />the whole house.</>} text="Each kind of device gets its own screen with the controls it actually needs." />
        <div
          className="dev"
          ref={ref}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="dev__list" role="tablist" aria-label="Device types">
            {devices.map((x, j) => (
              <button
                key={x.key}
                role="tab"
                id={`dev-${x.key}`}
                aria-selected={i === j}
                aria-controls="dev-panel"
                className={`dev__tab${i === j ? " is-on" : ""}`}
                onClick={() => { setI(j); setAuto(false); }}
              >
                <b>{x.name}</b>
                <span className="dev__text"><span>{x.text}</span></span>
                {i === j && auto && (
                  <span className="dev__bar" aria-hidden="true">
                    <i
                      key={i}
                      style={{ animationDuration: `${AUTO_MS}ms`, animationPlayState: running ? "running" : "paused" }}
                      onAnimationEnd={() => setI((i + 1) % devices.length)}
                    />
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="dev__stage" id="dev-panel" role="tabpanel" aria-labelledby={`dev-${d.key}`}>
            {devices.map((x, j) => (
              <img
                key={x.key}
                className={`phone dev__phone${i === j ? " is-on" : ""}`}
                src={img(x.img)}
                alt={i === j ? `${x.name} screen in the app` : ""}
                aria-hidden={i !== j}
                width={720}
                height={1560}
                loading={j === 0 ? undefined : "lazy"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section className="section" id="connect">
      <div className="container">
        <Head tag="Connect" title={<>Three ways in.<br />No setup maze.</>} text="Tap + on Home and pick how a device connects." />
        <div className="cgrid">
          {connect.map((c) => (
            <article className="ccard" key={c.name}>
              <h3>{c.name}</h3>
              <p className="ccard__lead">{c.lead}</p>
              <p className="ccard__big">{c.big}</p>
              <ul className="checks checks--col">
                {c.points.map((p) => (
                  <li key={p}><span className="checks__i"><Check size={13} strokeWidth={2.6} /></span>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <Devices />
      <Connect />
      <section className="section" id="faq">
        <div className="container container--narrow">
          <Head tag="FAQ" title={<>Good to know<br />before you start.</>} text="More answers are on the Support page." />
          <Faq items={faq.slice(0, 6)} first={null} />
        </div>
      </section>
    </>
  );
}
