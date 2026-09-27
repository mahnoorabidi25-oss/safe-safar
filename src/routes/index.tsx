import { createFileRoute } from "@tanstack/react-router";
import heroVideo from "@/assets/hero.mp4.asset.json";
import bgImage from "@/assets/bg.png.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BatteryFull,
  Bell,
  Cpu,
  MapPin,
  Radio,
  Ruler,
  ShieldCheck,
  Signal,
  Weight,
  Boxes,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Safe Safar — Zero-Infrastructure Urban Safety Keychain" },
      {
        name: "description",
        content:
          "Safe Safar is a low-cost safety keychain that sends emergency alerts over local public internet grids — no app, no phone, no monthly fees.",
      },
      { property: "og:title", content: "Safe Safar — Urban Safety Keychain" },
      {
        property: "og:description",
        content:
          "A cost-effective, zero-infrastructure wireless safety network for daily commuters. 450–500 PKR, one-time purchase.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="section-label">
      <span className="h-px w-6 bg-primary/60" />
      {children}
    </span>
  );
}

const navLinks = [
  { href: "#mechanism", label: "Working Mechanism" },
  { href: "#app", label: "App Engine" },
  { href: "#code", label: "Source Code" },
  { href: "#specs", label: "Specs & Costs" },
  { href: "#faq", label: "FAQs" },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="shrink-0 font-display text-lg font-extrabold tracking-tight">
          Safe <span className="text-primary">Safar</span>
        </a>
        <nav className="flex min-w-0 gap-5 overflow-x-auto text-sm font-semibold text-foreground/80">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="shrink-0 whitespace-nowrap transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-border">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${bgImage.url})` }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="min-w-0">
          <SectionLabel>Urban Safety Infrastructure</SectionLabel>
          <h1 className="title-depth mt-5 font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl">
            Safe <span className="text-primary">Safar</span>
          </h1>
          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-lift)]">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Create a localized security net
            </span>
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Safe Safar is a low-cost safety keychain that sends emergency alerts via local public
            internet grids. It works instantly without you ever having to grab your phone or open an
            app.
          </p>
        </div>
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          className="w-full rounded-2xl border-0 bg-transparent object-cover outline-none"
        />
      </div>
    </section>
  );
}

const mechanism = [
  "Our project, Safe Safar, turns the existing internet infrastructure of Pakistan into an invisible safety net.",
  "When a student clicks this button 3 times, it screams an open radio distress cry into the air. It does not need to know any private Wi-Fi passwords.",
  "We partner directly with big internet companies like StormFiber and PTCL. A simple update on their central network tells nearby street routers to catch that distress cry and instantly fire a live tracking map straight to the parents' phones. Zero hardware costs for us, and 100% safety for the city.",
];

function Mechanism() {
  return (
    <section id="mechanism" className="border-b-2 border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>30-Second Summary</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">The Working Mechanism</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {mechanism.map((t, i) => (
            <div key={i} className={`panel rounded-2xl p-6 ${i === 1 ? "border-primary" : ""}`}>
              <span className="font-mono text-sm font-semibold text-primary">0{i + 1}</span>
              <p className="mt-3 text-base leading-relaxed text-foreground/85">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  const tiles = [
    { icon: MapPin, label: "Location", value: "Live", dot: "bg-ok" },
    { icon: Radio, label: "Keychain", value: "Paired", dot: "bg-cyan" },
    { icon: Bell, label: "Alerts", value: "Private", dot: "bg-warn" },
    { icon: Cpu, label: "Failsafe", value: "Armed", dot: "bg-alert" },
  ];
  return (
    <div className="mx-auto w-full max-w-[330px]">
      <div className="rounded-[2.4rem] border-4 border-navy bg-navy p-2.5 shadow-[var(--shadow-glow)]">
        <div className="rounded-[1.9rem] bg-gradient-to-b from-navy-2 to-navy p-4 text-navy-foreground">
          <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-navy-foreground/25" />
          <div className="flex items-center justify-between text-xs text-navy-foreground/70">
            <span>9:41</span>
            <span className="inline-flex items-center gap-1">
              <Signal className="h-3.5 w-3.5" /> <BatteryFull className="h-3.5 w-3.5 text-ok" />
            </span>
          </div>
          <p className="mt-4 font-display text-lg font-bold">Command Panel</p>

          <div className="mt-3 rounded-xl border border-ok/40 bg-ok/10 p-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok/70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
              </span>
              <p className="truncate text-sm font-semibold">Guardian Daemon Active</p>
            </div>
            <p className="mt-2 text-xs text-navy-foreground/70">
              Monitoring local gateways · 3 nodes in range
            </p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {tiles.map(({ icon: Icon, label, value, dot }) => (
              <div key={label} className="rounded-lg border border-navy-foreground/10 bg-navy-foreground/5 p-3">
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-cyan" />
                  <span className={`h-2 w-2 rounded-full ${dot}`} />
                </div>
                <p className="mt-2 truncate text-[11px] uppercase tracking-wider text-navy-foreground/60">
                  {label}
                </p>
                <p className="truncate text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="mt-3 w-full animate-pulse rounded-xl bg-alert p-4 text-left text-navy-foreground shadow-[0_10px_30px_-10px_var(--alert)]"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-foreground/80">
              Emergency Probe
            </p>
            <p className="mt-1 text-sm font-bold">Triple-click keychain to broadcast</p>
          </button>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold">
            <span className="rounded-md bg-primary py-2">Private</span>
            <span className="rounded-md bg-navy-foreground/10 py-2">Community</span>
            <span className="rounded-md bg-navy-foreground/10 py-2">Log</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanionApp() {
  return (
    <section id="app" className="border-b-2 border-border bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <PhoneMock />
        </div>
        <div className="panel w-full min-w-0 rounded-2xl p-8 lg:w-1/2">
          <SectionLabel>Companion Software</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
            Mobile Companion App Engine
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            This application runs silently as an ultra-lightweight background listener to securely
            capture local hardware distress tokens and route critical telemetry.
          </p>
        </div>
      </div>
    </section>
  );
}

const firmwareCode = "#include <ESP8266WiFi.h>\nextern \"C\" { #include \"user_interface.h\" }\nconst int BUTTON_PIN = 4;\nint clickCount = 0;\nunsigned long lastClickTime = 0;\nuint8_t packetPayload[] = { 'S', 'U', 'R', 'A', '1', '0', '1' }; \n\nvoid setup() {\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  WiFi.mode(WIFI_OFF);\n}\nvoid loop() {\n  if (digitalRead(BUTTON_PIN) == LOW) {\n    unsigned long currentTime = millis();\n    if (currentTime - lastClickTime > 200) {\n      clickCount++;\n      lastClickTime = currentTime;\n    }\n    if (clickCount == 3) {\n      sendEmergencyProbe();\n      clickCount = 0;\n      ESP.deepSleep(0);\n    }\n  }\n  if (clickCount > 0 && (millis() - lastClickTime > 2000)) {\n    clickCount = 0;\n  }\n}\nvoid sendEmergencyProbe() {\n  WiFi.mode(WIFI_STA);\n  for (int channel = 1; channel <= 13; channel++) {\n    wifi_set_channel(channel);\n    for (int i = 0; i < 5; i++) {\n      wifi_send_pkt_freedom(packetPayload, sizeof(packetPayload), 0);\n      delay(10);\n    }\n  }\n}";

const failsafeCode = "import { NativeModules } from 'react-native';\nimport Geolocation from 'react-native-geolocation-service';\nimport AsyncStorage from '@react-native-async-storage/async-storage';\n\nconst KEYCHAIN_DEVICE_SIGNATURE = \"SURA101\";\n\nexport async function handleKeychainBroadcastEvent(detectedSignature) {\n  if (detectedSignature !== KEYCHAIN_DEVICE_SIGNATURE) return;\n  \n  Geolocation.getCurrentPosition(\n    async (position) => {\n      const emergencyPacket = {\n        timestamp: new Date().toISOString(),\n        latitude: position.coords.latitude,\n        longitude: position.coords.longitude,\n        status: \"OFFLINE_BLACKBOX_LOGGED\"\n      };\n      await AsyncStorage.setItem('@SafeSafar_LastActiveLocation', JSON.stringify(emergencyPacket));\n      triggerBackgroundDataNetworkSync(emergencyPacket);\n    },\n    (error) => { console.error(error.message); },\n    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }\n  );\n}";

function CodeWindow({ label, code }: { label: string; code: string }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border-2 border-navy shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-3 border-b border-ink-foreground/10 bg-ink px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-alert" />
          <span className="h-2.5 w-2.5 rounded-full bg-warn" />
          <span className="h-2.5 w-2.5 rounded-full bg-ok" />
        </span>
        <p className="truncate text-xs font-medium tracking-wide text-ink-foreground/80">{label}</p>
      </div>
      <pre className="max-h-[480px] overflow-auto bg-code-bg px-5 py-5 font-mono text-[12.5px] leading-relaxed text-ink-foreground/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const codeBlocks = [
  {
    title: "Keychain Software Code",
    desc: "Framework Language: C++ / Arduino IDE. This embedded firmware script handles hardware click inputs, wakes the Wi-Fi chip from low-power standby, and injects raw unauthenticated 802.11 management probe request frames into local open airwaves.",
    label: "keychain_firmware.ino",
    code: firmwareCode,
  },
  {
    title: "Mobile App Code",
    desc: "Framework Language: JavaScript / React Native. This background service acts as an offline black box loop. If local network infrastructure is missing, it commands the phone's satellite GPS chip to cache the current latitude and longitude coordinates safely inside the device's internal storage disk.",
    label: "offlineFailsafe.js",
    code: failsafeCode,
  },
];

function CodeSection() {
  return (
    <section id="code" className="border-b-2 border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Core Embedded Stack</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">Technical Source Code Architecture</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {codeBlocks.map((c) => (
            <div key={c.title} className="flex min-w-0 flex-col">
              <h3 className="font-display text-xl font-bold">{c.title}</h3>
              <p className="mb-5 mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-auto">
                <CodeWindow label={c.label} code={c.code} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const specs = [
  {
    icon: Ruler,
    heading: "Device Size Dimensions",
    text: "2.0 x 1.0 x 0.4 inches (Ultra-flat, slim form factor designed to lay flat on an ID card lanyard or slide comfortably into tiny pockets).",
  },
  {
    icon: Weight,
    heading: "Device Mass Weight",
    text: "15 grams total mass weight (Completely hollow core build, ensuring it adds zero pull or physical strain to keys or uniforms).",
  },
  {
    icon: Boxes,
    heading: "Structural Polymer Materials",
    text: "Impact-resistant Polycarbonate Plastic (PC) outer shield, rigid ABS internal structural matrix core, high-tactile textured rubber button array, and stainless steel internal compression springs.",
  },
];

const costs = [
  { label: "Chipset Module", value: 120 },
  { label: "Power Cell", value: 30 },
  { label: "Polymer Casing", value: 50 },
  { label: "Structural Elements", value: 50 },
];

function SpecsCosts() {
  return (
    <section id="specs" className="border-b-2 border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Logistics & Economics</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
          Industrial Cost Architecture & Physical Specs
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="panel rounded-2xl border-l-8 border-l-primary p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Retail Market Price</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-primary">450 – 500 PKR</p>
            <p className="mt-3 text-sm text-muted-foreground">Highly economical for local Pakistani students.</p>
          </div>
          <div className="panel rounded-2xl border-l-8 border-l-navy p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Factory Production Cost</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">~250 PKR</p>
            <p className="mt-3 text-sm text-muted-foreground">Per unit, at manufacturing scale.</p>
          </div>
        </div>
        <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border-2 border-border bg-card shadow-[var(--shadow-panel)]">
          {costs.map(({ label, value }) => (
            <div key={label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5">
              <div className="min-w-0">
                <p className="text-sm font-medium">{label}</p>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary/70" style={{ width: `${(value / 250) * 100}%` }} />
                </div>
              </div>
              <p className="shrink-0 font-mono text-sm font-medium text-primary">{value} PKR</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { icon: Ruler, h: "Size", t: "2.0 x 1.0 x 0.4 inches flat profile." },
            { icon: Weight, h: "Weight", t: "15 grams total mass." },
            { icon: Boxes, h: "Materials", t: "Polycarbonate shell, ABS structural plastic core, and textured rubber toggles." },
          ].map(({ icon: Icon, h, t }) => (
            <div key={h} className="panel rounded-2xl p-6">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-base font-semibold">{h}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How does Safe Safar work if I don't have my smartphone in my hand or open an app?",
    a: "The Safe Safar keychain operates entirely independently of an active smartphone interface. You do not need to reach into your pocket, unlock a screen, or search for an app. The physical module runs on its own internal power cell and radio transmitter to handle everything.",
  },
  {
    q: "Are there any monthly data fees or cellular mobile network bills?",
    a: "No. Unlike premium trackers that require active cellular SIM cards and expensive monthly network bundles, Safe Safar uses open, free radio frequencies to route data into existing internet pipelines. It is completely free to maintain with zero recurring fees.",
  },
  {
    q: "What happens if I am in a less-developed area without any nearby internet routers?",
    a: "Safe Safar features an automatic Offline Black Box Fail-Safe. If activated in an area without active gateway routers, the device securely pairs with your phone's internal offline GPS to log the last known exact coordinates locally inside the device memory, creating an automatic location tracking trail even with zero mobile data active.",
  },
  {
    q: "Is there an option to alert local neighborhood storefronts for physical help?",
    a: "Yes, this feature is completely optional. Users can select 'Private Mode' via their mobile settings to route alerts strictly and silently to family members, or enable 'Community Mode' to ping nearby partner storefronts for immediate physical assistance while family members are in transit.",
  },
];

function Faq() {
  return (
    <section id="faq">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionLabel>Support</SectionLabel>
        <h2 className="mt-4 text-3xl font-display font-bold tracking-tight">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="panel mt-8 w-full rounded-2xl px-6">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={q} value={`item-${i}`} className="last:border-b-0">
              <AccordionTrigger className="text-left text-base font-medium">{q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <Mechanism />
      <CompanionApp />
      <CodeSection />
      <SpecsCosts />
      <Faq />
      <footer className="border-t border-border py-10">
        <p className="mx-auto max-w-6xl px-6 text-sm text-muted-foreground">
          Safe Safar — urban safety technology for everyday commuters.
        </p>
      </footer>
    </main>
  );
}
