import { useState, type FormEvent } from "react";
import { site } from "../content/site";
import Split from "../components/Split";
import Btn from "../components/Btn";

const topics = ["Question", "Device won’t connect", "Subscription", "Idea"];

/**
 * No backend on a static site: the form checks the fields and then opens
 * the visitor’s mail app with everything filled in. Styled like the app’s
 * "New Room" sheet — a text field, type chips and one blue button.
 */
export default function Contact() {
  const [v, setV] = useState({ name: "", email: "", message: "" });
  const [topic, setTopic] = useState(topics[0]);
  const [err, setErr] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const check = (k: keyof typeof v, val = v[k]) => {
    if (k === "email" && !/^\S+@\S+\.\S+$/.test(val)) return val ? "That email doesn’t look right. Check for typos." : "Please enter your email.";
    if (k === "message" && !val.trim()) return "Please write a message.";
    return "";
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next = { email: check("email"), message: check("message") };
    setErr(next);
    const first = (Object.keys(next) as (keyof typeof next)[]).find((k) => next[k]);
    if (first) return document.getElementById(`f-${first}`)?.focus();
    const body = `Name: ${v.name}\nEmail: ${v.email}\nTopic: ${topic}\n\n${v.message}`;
    location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${site.short}: ${topic}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (k: keyof typeof v, label: string, type = "text", auto?: string) => (
    <div className="field">
      <label htmlFor={`f-${k}`}>{label}</label>
      {k === "message" ? (
        <textarea id={`f-${k}`} value={v[k]} rows={5} aria-invalid={!!err[k]} aria-describedby={err[k] ? `f-${k}-e` : undefined}
          onChange={(e) => setV({ ...v, [k]: e.target.value })} onBlur={() => setErr({ ...err, [k]: check(k) })} />
      ) : (
        <input id={`f-${k}`} type={type} autoComplete={auto} value={v[k]} aria-invalid={!!err[k]} aria-describedby={err[k] ? `f-${k}-e` : undefined}
          onChange={(e) => setV({ ...v, [k]: e.target.value })} onBlur={() => setErr({ ...err, [k]: check(k) })} />
      )}
      {err[k] && <span className="err" id={`f-${k}-e`} role="alert">{err[k]}</span>}
    </div>
  );

  return (
    <section className="phero contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <span className="tag">Contact</span>
          <Split as="h1" className="h1" parts={[["Write to us"]]} />
          <p className="lead">Questions, a device that won’t connect or an idea for the app: we read every message.</p>
          <a className="contact__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>

        <form className="sheet" onSubmit={submit} noValidate>
          <h2>New message</h2>
          <p className="sheet__sub">Opens your mail app with the message ready</p>
          {field("name", "Your name", "text", "name")}
          {field("email", "Email", "email", "email")}
          <fieldset className="field">
            <legend>Topic</legend>
            <div className="w-chips">
              {topics.map((t) => (
                <button type="button" key={t} aria-pressed={topic === t} className={topic === t ? "is-on" : ""} onClick={() => setTopic(t)}>{t}</button>
              ))}
            </div>
          </fieldset>
          {field("message", "Message")}
          <Btn type="submit" className="sheet__btn">Send message</Btn>
          {sent && <p className="ok" role="status">Your mail app should open with the message ready. If it didn’t, write to {site.email}.</p>}
        </form>
      </div>
    </section>
  );
}
