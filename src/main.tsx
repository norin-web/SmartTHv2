import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

// hidden-until-revealed styles apply only once scripts run
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(<App />);
