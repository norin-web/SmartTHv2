import { useState } from "react";
import { AirVent, Lamp, Minus, Pause, Play, Plus, Power, Rewind, FastForward, Speaker, Tv, Plug } from "lucide-react";
import { img } from "../utils/img";

/*
 * Small live pieces of the app’s UI for the feature cards.
 * Shapes, labels and colors follow the app’s Home screen in Figma.
 */

const PowerBtn = ({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) => (
  <button className={`w-power${on ? " is-on" : ""}`} onClick={onClick} aria-pressed={on} aria-label={label}>
    <Power size={16} strokeWidth={2.2} />
  </button>
);

export function ClimateWidget() {
  const [t, setT] = useState(22);
  const [mode, setMode] = useState("Cool");
  const off = mode === "Off";
  const status = off ? "Off" : mode === "Cool" ? "Cooling" : mode === "Heat" ? "Heating" : "Auto";
  return (
    <div className="w-card">
      <div className="w-head">
        <span className="w-ico"><AirVent size={20} strokeWidth={1.6} /></span>
        <div className="w-name">
          <small>{status}</small>
          <b>Bedroom AC</b>
        </div>
        <PowerBtn on={!off} onClick={() => setMode(off ? "Cool" : "Off")} label="Power" />
      </div>
      <div className="w-temp">
        <button onClick={() => setT(Math.max(16, t - 1))} aria-label="Lower temperature" disabled={off}><Minus size={18} /></button>
        <output aria-live="polite" className={off ? "is-off" : ""}>{t}<span>°C</span></output>
        <button onClick={() => setT(Math.min(30, t + 1))} aria-label="Raise temperature" disabled={off}><Plus size={18} /></button>
      </div>
      <div className="w-seg" role="radiogroup" aria-label="Mode">
        {["Heat", "Cool", "Auto", "Off"].map((m) => (
          <button key={m} role="radio" aria-checked={mode === m} className={mode === m ? "is-on" : ""} onClick={() => setMode(m)}>{m}</button>
        ))}
      </div>
    </div>
  );
}

export function MusicWidget() {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="w-card w-card--dark">
      <div className="w-head">
        <span className="w-ico w-ico--dark"><Speaker size={20} strokeWidth={1.6} /></span>
        <div className="w-name">
          <small>{playing ? "Music streamed on" : "Paused on"}</small>
          <b>Living room speaker</b>
        </div>
      </div>
      <div className="w-music">
        <img src={img("/images/cover.webp")} alt="" width={240} height={240} loading="lazy" />
        <div className="w-music__meta">
          <b>Sunday Morning</b>
          <span>Playlist</span>
          <div className="w-music__ctrl">
            <Rewind size={20} fill="currentColor" aria-hidden="true" />
            <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause" : "Play"}>
              {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>
            <FastForward size={20} fill="currentColor" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

const colors = ["#ffffff", "#f28b7d", "#c45cf2", "#5b5bf5", "#5ef05e", "#f54b4b", "#f2ee6b"];

export function LampWidget() {
  const [on, setOn] = useState(true);
  const [c, setC] = useState(3);
  return (
    <div className="w-card">
      <div className="w-head">
        <span className="w-ico" style={{ background: on ? `${colors[c]}55` : undefined }}><Lamp size={20} strokeWidth={1.6} /></span>
        <div className="w-name">
          <small>{on ? "On" : "Off"}</small>
          <b>Smart Lamp</b>
        </div>
        <PowerBtn on={on} onClick={() => setOn(!on)} label="Power" />
      </div>
      <div className="w-colors" role="radiogroup" aria-label="Light color">
        {colors.map((col, i) => (
          <button
            key={col}
            role="radio"
            aria-checked={c === i}
            aria-label={`Color ${i + 1}`}
            className={c === i ? "is-on" : ""}
            style={{ background: col }}
            onClick={() => { setC(i); setOn(true); }}
          />
        ))}
      </div>
    </div>
  );
}

type Dev = { name: string; room: string; icon: "tv" | "lamp" | "ac" | "plug" };
const all: Dev[] = [
  { name: "Living room TV", room: "Living room", icon: "tv" },
  { name: "Floor lamp", room: "Living room", icon: "lamp" },
  { name: "Bedroom AC", room: "Bedroom", icon: "ac" },
  { name: "Desk plug", room: "Office", icon: "plug" },
];
const Icon = ({ k }: { k: Dev["icon"] }) =>
  k === "tv" ? <Tv size={18} strokeWidth={1.6} /> : k === "lamp" ? <Lamp size={18} strokeWidth={1.6} /> : k === "ac" ? <AirVent size={18} strokeWidth={1.6} /> : <Plug size={18} strokeWidth={1.6} />;

export function RoomsWidget() {
  const [room, setRoom] = useState("Living room");
  const [state, setState] = useState<Record<string, boolean>>({ "Living room TV": true, "Floor lamp": false, "Bedroom AC": true, "Desk plug": false });
  const list = room === "All devices" ? all : all.filter((d) => d.room === room);
  const onCount = list.filter((d) => state[d.name]).length;
  return (
    <div className="w-rooms">
      <div className="w-chips" role="tablist" aria-label="Rooms">
        {["All devices", "Living room", "Bedroom", "Office"].map((r) => (
          <button key={r} role="tab" aria-selected={room === r} className={room === r ? "is-on" : ""} onClick={() => setRoom(r)}>{r}</button>
        ))}
      </div>
      <div className="w-rooms__bar">
        <span>{list.length} {list.length === 1 ? "device" : "devices"} · {onCount} on</span>
        <button onClick={() => setState({ ...state, ...Object.fromEntries(list.map((d) => [d.name, false])) })} disabled={!onCount}>Turn All Off</button>
      </div>
      <ul className="w-list">
        {list.map((d) => (
          <li key={d.name} className="w-card w-row">
            <span className="w-ico w-ico--sm"><Icon k={d.icon} /></span>
            <b>{d.name}</b>
            <PowerBtn on={state[d.name]} onClick={() => setState({ ...state, [d.name]: !state[d.name] })} label={`${d.name} power`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
