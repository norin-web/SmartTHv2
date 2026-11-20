import { app, appScreens, specs } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Split from "../components/Split";

export default function OurApp() {
  return (
    <>
      <section className="phero">
        <div className="container phero__inner">
          <span className="tag">The app</span>
          <Split as="h1" className="h1" parts={[["A remote for"], ["\n"], ["everything at home."]]} />
          <p className="lead">One Home screen for your devices, a Cast tab for the TV and speakers, and a screen for each device with only the controls it needs.</p>
          <Btn href={app.url}>Download on the App Store</Btn>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <ul className="screens" aria-label="App screens">
            {appScreens.map((s, i) => (
              <li key={s.label}>
                <img className="phone" src={img(s.img)} alt={`${s.label} screen`} width={720} height={1560} loading={i < 4 ? undefined : "lazy"} />
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container split2">
          <div>
            <h2 className="h2">What’s inside</h2>
            <p className="lead">The short version of what the app covers today.</p>
          </div>
          <dl className="specs">
            {specs.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
