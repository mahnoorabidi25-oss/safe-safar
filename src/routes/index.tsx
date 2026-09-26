import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BatteryFull,
  Bell,
  CircuitBoard,
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

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-field pointer-events-none absolute inset-0 opacity-40" />
      <div className="ice-wash pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
        <div className="min-w-0">
          <SectionLabel>Urban Safety Infrastructure</SectionLabel>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Safe Safar
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-foreground/80">
            A cost-effective, zero-infrastructure wireless safety network for daily commuters.
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Safe Safar is a low-cost safety keychain that sends emergency alerts via local public
            internet grids. It works instantly without you ever having to grab your phone or open an
            app.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: ShieldCheck, text: "No app required" },
              { icon: Radio, text: "Public grid relay" },
              { icon: BatteryFull, text: "Zero monthly fees" },
            ].map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground/80"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                {text}
              </span>
            ))}
          </div>
        </div>

        <div className="panel relative flex aspect-4/3 items-center justify-center rounded-xl">
          <div className="absolute inset-4 rounded-lg border border-dashed border-primary/30" />
          <div className="relative px-6 text-center">
            <CircuitBoard className="mx-auto h-10 w-10 text-primary/70" />
            <p className="mt-4 text-sm font-medium tracking-wide text-foreground">
              Safe Safar Hardware Model
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Drop Image Here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMock() {
  return (
    <div className="mx-auto w-full max-w-[320px]">
      <div className="panel rounded-[2.2rem] p-3">
        <div className="rounded-[1.7rem] border border-border bg-secondary/60 p-4">
          <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-foreground/15" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>9:41</span>
            <span className="inline-flex items-center gap-1">
              <Signal className="h-3.5 w-3.5" /> <BatteryFull className="h-3.5 w-3.5" />
            </span>
          </div>

          <div className="mt-4 rounded-xl border border-primary/25 bg-card p-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <p className="truncate text-sm font-semibold">Guardian Daemon Active</p>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Monitoring local gateways · 3 nodes in range
            </p>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {[
              { icon: MapPin, label: "Location", value: "Live" },
              { icon: Radio, label: "Keychain", value: "Paired" },
              { icon: Bell, label: "Alerts", value: "Private" },
              { icon: Cpu, label: "Failsafe", value: "Armed" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-lg border border-border bg-card p-3">
                <Icon className="h-4 w-4 text-primary" />
                <p className="mt-2 truncate text-[11px] uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="truncate text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl bg-ink p-4 text-ink-foreground">
            <p className="text-[11px] uppercase tracking-[0.18em] text-ink-foreground/60">
              Emergency Probe
            </p>
            <p className="mt-1 text-sm font-medium">Triple-click keychain to broadcast</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-foreground/15">
              <div className="h-full w-2/3 rounded-full bg-ice" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanionApp() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <PhoneMock />
        </div>
        <div className="w-full min-w-0 lg:w-1/2">
          <SectionLabel>Companion Software</SectionLabel>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Mobile Companion App Engine
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            This smartphone application runs silently as a lightweight background daemon. In active
            network zones, it monitors local connectivity triggers. If the user enters an unrouted
            sector with zero data, it dynamically handles offline failsafe procedures to keep the
            user secure.
          </p>
        </div>
      </div>
    </section>
  );
}

function CodeWindow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border shadow-[var(--shadow-panel)]">
      <div className="flex items-center gap-3 border-b border-ink-foreground/10 bg-ink px-4 py-3">
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-foreground/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-foreground/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-ice/70" />
        </span>
        <p className="truncate text-xs font-medium tracking-wide text-ink-foreground/80">{label}</p>
      </div>
      <pre className="overflow-x-auto bg-code-bg px-5 py-5 font-mono text-[13px] leading-relaxed text-ink-foreground/90">
        <code>{children}</code>
      </pre>
    </div>
  );
}

const K = ({ children }: { children: string }) => (
  <span className="text-syntax-key">{children}</span>
);
const F = ({ children }: { children: string }) => <span className="text-syntax-fn">{children}</span>;
const S = ({ children }: { children: string }) => (
  <span className="text-syntax-str">{children}</span>
);
const N = ({ children }: { children: string }) => (
  <span className="text-syntax-num">{children}</span>
);

function CodeSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Core Embedded Stack</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">Developer Code Windows</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <CodeWindow label="Keychain Embedded Firmware (C++)">
            {<>
              <K>void</K> <F>loop</F>{"() {\n"}
              {"  "}<K>if</K> {"("}<F>digitalRead</F>{"(BUTTON_PIN) == LOW) {\n"}
              {"    clickCount++;\n"}
              {"    "}<F>delay</F>{"("}<N>200</N>{");\n"}
              {"    "}<K>if</K> {"(clickCount == "}<N>3</N>{") {\n"}
              {"      "}<F>sendEmergencyProbe</F>{"();\n"}
              {"      clickCount = "}<N>0</N>{";\n"}
              {"      ESP."}<F>deepSleep</F>{"("}<N>0</N>{");\n"}
              {"    }\n  }\n}"}
            </>}
          </CodeWindow>
          <CodeWindow label="Mobile App Offline Failsafe (JavaScript)">
            {<>
              <K>async function</K> <F>handleKeychainBroadcast</F>{"(sig) {\n"}
              {"  "}<K>if</K> {"(sig !== SIGNATURE) "}<K>return</K>{";\n"}
              {"  Geolocation."}<F>getCurrentPosition</F>{"(\n"}
              {"    "}<K>async</K>{" (pos) => {\n"}
              {"      "}<K>const</K>{" pkt = { time: "}<K>new</K>{" "}<F>Date</F>{"(), lat: pos.coords.latitude,\n"}
              {"        lng: pos.coords.longitude };\n"}
              {"      "}<K>await</K>{" AsyncStorage."}<F>setItem</F>{"("}<S>{"'@OfflineLog'"}</S>{", JSON."}<F>stringify</F>{"(pkt));\n"}
              {"    }\n  );\n}"}
            </>}
          </CodeWindow>
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

function Hardware() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Hardware & Logistics</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">Retail & Economic Impact</h2>

        <div className="panel mt-8 rounded-xl p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Consumer Price
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-primary">450 – 500 PKR</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Engineered specifically for mass accessibility across Pakistan. An ultra-affordable
            one-time purchase model with zero recurring monthly data fees or telecom packages.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {specs.map(({ icon: Icon, heading, text }) => (
            <div key={heading} className="panel rounded-xl p-6">
              <Icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 text-base font-semibold">{heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const costs = [
  { label: "Radio Transmitter Component Module & Microchip Array", value: 120 },
  { label: "Ultra-flat CR2032 Lith-Watch Power Cell Battery", value: 30 },
  { label: "Injection-Molded Polycarbonate & ABS Casing Elements", value: 50 },
  { label: "Tactile Springs, Switches, Lanyard Clips, and Packaging", value: 50 },
];

function Costs() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionLabel>Manufacturing</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">
          Industrial Cost Architecture & Breakdown
        </h2>
        <p className="mt-4 text-lg font-medium">Total Production Cost: ~250 PKR per unit</p>

        <div className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {costs.map(({ label, value }) => (
            <div
              key={label}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 transition-colors hover:bg-accent/40"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium">{label}</p>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary/70"
                    style={{ width: `${(value / 250) * 100}%` }}
                  />
                </div>
              </div>
              <p className="shrink-0 font-mono text-sm font-medium text-primary">{value} PKR</p>
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
    <section>
      <div className="mx-auto max-w-4xl px-6 py-20">
        <SectionLabel>Support</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-8 w-full">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={q} value={`item-${i}`}>
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
      <Hero />
      <CompanionApp />
      <CodeSection />
      <Hardware />
      <Costs />
      <Faq />
      <footer className="border-t border-border py-10">
        <p className="mx-auto max-w-6xl px-6 text-sm text-muted-foreground">
          Safe Safar — urban safety technology for everyday commuters.
        </p>
      </footer>
    </main>
  );
}
