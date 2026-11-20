import { Link, useLocation } from "react-router";
import { app, nav, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

// Contact, Support and the legal pages skip the big download block above the footer.
const NO_CTA = ["/contact", "/feedback", "/support", "/privacy", "/terms"];

export default function Footer() {
  const { pathname } = useLocation();
  const cta = !NO_CTA.includes(pathname.replace(/\/$/, ""));
  return (
    <footer className="footer">
      {cta && (
        <div className="container">
          <div className="cta">
            <div className="cta__text">
              <h2 className="h2 cta__title">Every room,<br />one screen.</h2>
              <p>Lights, climate, music and the TV, controlled from the phone that’s already in your hand.</p>
              <Btn href={app.url} variant="white">Download on the App Store</Btn>
            </div>
            <div className="cta__phone" aria-hidden="true">
              <img src={img("/images/phone-climate.webp")} alt="" width={720} height={1560} loading="lazy" />
            </div>
          </div>
        </div>
      )}

      <div className="container footer__main">
        <div className="footer__brand">
          <Link to="/" className="logo">
            <img src={img("/images/app-icon.png")} alt="" width={32} height={32} />
            <span>{site.brand}</span>
          </Link>
          <a className="footer__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        <div className="footer__cols">
          <div>
            <h3>Product</h3>
            <ul>
              {nav.slice(0, 3).map((n) => (
                <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
              ))}
              <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
            </ul>
          </div>
          <div>
            <h3>Help</h3>
            <ul>
              <li><Link to="/support">Support</Link></li>
              <li><Link to="/feedback">Feedback</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer__copy">
        <p>{site.disclaimer}</p>
        <div className="footer__row">
          <span>© {site.year} {site.operator}</span>
          <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
        </div>
      </div>
    </footer>
  );
}
