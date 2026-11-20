// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are waiting for the owner — replace them before release.
// Feature wording follows the app’s own screens (onboarding, Home, Add Device,
// Wi‑Fi, AirPlay and device screens); nothing here goes beyond them.

export const PLACEHOLDER = "PLACEHOLDER";

export const site = {
  brand: "Smart Things Home Manager",
  short: "Smart Things",
  email: "support@PLACEHOLDER.com", // PLACEHOLDER — operator email
  year: new Date().getFullYear(),
  operator: PLACEHOLDER, // company that publishes the app
  disclaimer:
    "Smart Things Home Manager is an independent app. It is not affiliated with, endorsed by or sponsored by Samsung or SmartThings. Device and service names belong to their owners.",
};

export const app = {
  id: PLACEHOLDER, // App Store ID — the app is not in the store yet
  url: "https://apps.apple.com/app/idPLACEHOLDER", // PLACEHOLDER
  platform: "iPhone",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Device kinds the app has screens for — shown under the hero.
export const kinds = ["TVs", "Air conditioners", "Lights", "Speakers", "Plugs", "Locks", "Sensors"];

export const heroChecks = ["TV, AC, lights & speakers", "Rooms for every space", "HomeKit, Wi‑Fi & AirPlay"];

export const steps = [
  {
    title: "Download the app",
    text: "Get Smart Things Home Manager on your iPhone from the App Store.",
  },
  {
    title: "Add a device",
    text: "Choose Apple Home for accessories with a HomeKit setup code, or Wi‑Fi for TVs, speakers and soundbars on your network.",
  },
  {
    title: "Control and group",
    text: "Turn things on and off, set the temperature or the light color, and sort devices into rooms.",
  },
];

// Tabs in the "Works with" block: each one switches the phone screen.
export const devices = [
  {
    key: "tv",
    name: "TV & casting",
    text: "Play photos, videos and music on the TV over AirPlay, or mirror your iPhone screen. Stop playback in one tap.",
    img: "/images/phone-tv.webp",
  },
  {
    key: "speakers",
    name: "Speakers",
    text: "See what’s playing, pause, skip and set the volume. Pick where the music comes from.",
    img: "/images/phone-homepod.webp",
  },
  {
    key: "climate",
    name: "Climate",
    text: "Heat, Cool, Auto or Off. Set the temperature and keep a schedule for when you’re away.",
    img: "/images/phone-climate.webp",
  },
  {
    key: "plugs",
    name: "Plugs & power strips",
    text: "Switch a plug on or off, see power use now and today, and set a timer to turn it off.",
    img: "/images/phone-plug.webp",
  },
  {
    key: "locks",
    name: "Locks & sensors",
    text: "Lock or unlock the door, turn on auto‑lock and check motion, door and leak events with battery levels.",
    img: "/images/phone-lock.webp",
  },
  {
    key: "hubs",
    name: "Hubs & bridges",
    text: "Check that a hub is online, see the sensors connected to it and add new ones.",
    img: "/images/phone-hub.webp",
  },
  {
    key: "air",
    name: "Air purifiers",
    text: "Auto, Sleep or Turbo. Read today’s air quality and keep an eye on filter life.",
    img: "/images/phone-air.webp",
  },
];

// The three connection flows from the app’s Add Device sheet and Cast tab.
export const connect = [
  {
    name: "Apple Home",
    lead: "Accessories with a HomeKit code",
    big: "Setup code",
    points: ["Scan the code or hold iPhone close", "Allow Home access once", "Name it and pick a room"],
  },
  {
    name: "Wi‑Fi",
    lead: "TVs, speakers and soundbars",
    big: "Same network",
    points: ["Finds devices on your Wi‑Fi", "Confirm on your TV", "Some TVs ask for a PIN"],
  },
  {
    name: "AirPlay & Mirroring",
    lead: "Photos, videos and music",
    big: "Tap to cast",
    points: ["Photos and videos from your library", "Music to a speaker", "Mirror your screen on the TV"],
  },
];

export const appScreens = [
  { img: "/images/phone-home.webp", label: "Home" },
  { img: "/images/phone-add.webp", label: "Add Device" },
  { img: "/images/phone-added.webp", label: "Accessory added" },
  { img: "/images/phone-cast.webp", label: "Cast" },
  { img: "/images/phone-tv.webp", label: "Playing on TV" },
  { img: "/images/phone-homepod.webp", label: "Now playing" },
  { img: "/images/phone-climate.webp", label: "Thermostat" },
  { img: "/images/phone-plug.webp", label: "Plug" },
  { img: "/images/phone-lock.webp", label: "Smart lock" },
  { img: "/images/phone-motion.webp", label: "Motion sensor" },
  { img: "/images/phone-hub.webp", label: "Hub" },
  { img: "/images/phone-air.webp", label: "Air purifier" },
];

export const specs: [string, string][] = [
  ["Platform", "iPhone"],
  ["Ways to connect", "Apple Home (HomeKit), Wi‑Fi, AirPlay, Screen Mirroring"],
  ["Devices", "TVs, speakers, air conditioners and thermostats, lights, plugs and power strips, switches, locks, sensors, hubs, air purifiers, showers and faucets"],
  ["Organize", "Rooms: Living room, Bedroom, Kitchen, Office, Kids room"],
  ["Home screen", "Temperature, humidity and air quality at the top"],
];

export type Faq = { q: string; a: string; topic: "Connecting" | "Devices" | "Subscription" };

export const faq: Faq[] = [
  { topic: "Connecting", q: "How do I add a device?", a: "Tap + on the Home screen and choose Apple Home for accessories with a HomeKit setup code, or Wi‑Fi for TVs, speakers and soundbars on your network. Then name the device and pick a room." },
  { topic: "Connecting", q: "My TV or speaker doesn’t show up", a: "Make sure the device is on and connected to the same Wi‑Fi as your iPhone, then tap Search Again. If your iPhone isn’t on Wi‑Fi, the app will ask you to open Wi‑Fi Settings." },
  { topic: "Connecting", q: "Why does the app ask for Local Network access?", a: "It needs it to find TVs, speakers and soundbars on your Wi‑Fi. You can change this later in iPhone Settings." },
  { topic: "Connecting", q: "My TV asks to allow the connection", a: "Select Allow on the TV with the TV remote to finish. Some TVs show a 4‑digit code instead: type it into the app." },
  { topic: "Devices", q: "How do rooms work?", a: "Tap Add room, give it a name and type, then choose which devices belong to it. Inside a room you can turn everything off at once." },
  { topic: "Devices", q: "How do I cast photos or videos to the TV?", a: "Open the Cast tab, choose AirPlay and pick photos or videos from your library. To show your whole screen, choose Screen Mirroring." },
  { topic: "Devices", q: "A device says Not responding", a: "Check that it has power and is still on your network, then open it again in the app. For hub devices, make sure the hub itself is online." },
  { topic: "Subscription", q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple ID. Manage or cancel them in iPhone Settings, then your name, then Subscriptions. Deleting the app doesn’t cancel an active subscription." },
  { topic: "Subscription", q: "How do I restore a purchase?", a: "Use Restore in the app with the same Apple ID you paid with. Billing and refunds are handled by Apple." },
];
