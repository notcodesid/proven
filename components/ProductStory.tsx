import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Camera,
  Coins,
  Droplets,
  Flame,
  Footprints,
  Moon,
  ShieldCheck,
  Target,
  Trophy,
} from "lucide-react";

type Capability =
  | { label: string; image: string; icon?: never; tone?: never }
  | { label: string; icon: LucideIcon; tone: string; image?: never };

const topRow: Capability[] = [
  { label: "Walk more", image: "/capabilities/walk.png" },
  { label: "Join a challenge", icon: Target, tone: "from-[#ff765f] to-[#d9342d]" },
  { label: "Morning focus", image: "/capabilities/focus.png" },
  { label: "Stake your commitment", icon: ShieldCheck, tone: "from-[#b06950] to-[#713023]" },
  { label: "Read daily", image: "/capabilities/read.png" },
  { label: "Submit daily proof", icon: Camera, tone: "from-[#ff9b62] to-[#e75531]" },
];

const bottomRow: Capability[] = [
  { label: "Build a streak", icon: Flame, tone: "from-[#ff6f61] to-[#b52d2a]" },
  { label: "Stay hydrated", image: "/capabilities/hydrate.png" },
  { label: "Climb the leaderboard", icon: Trophy, tone: "from-[#f5bf45] to-[#c77d12]" },
  { label: "Sleep better", image: "/capabilities/sleep.png" },
  { label: "Earn rewards", icon: Coins, tone: "from-[#68b679] to-[#347747]" },
  { label: "Keep moving", icon: Footprints, tone: "from-[#6f9eda] to-[#3f64a9]" },
  { label: "Learn consistently", icon: BookOpen, tone: "from-[#9b7ad1] to-[#67509b]" },
  { label: "Track your water", icon: Droplets, tone: "from-[#65bfd0] to-[#338395]" },
];

function CapabilityCard({ item }: { item: Capability }) {
  if (item.image) {
    return (
      <div className="relative h-36 w-52 shrink-0 overflow-hidden rounded-[24px] border border-black/[0.04] bg-[#f5f2ee] shadow-[0_14px_36px_rgba(47,31,25,0.09)] sm:h-40 sm:w-60">
        <Image src={item.image} alt="" fill sizes="240px" className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-4 pt-12">
          <span className="text-sm font-bold text-white sm:text-base">{item.label}</span>
        </div>
      </div>
    );
  }

  const Icon = item.icon!;

  return (
    <div className="flex h-36 w-52 shrink-0 flex-col items-center justify-center rounded-[24px] border border-black/[0.04] bg-white px-5 text-center shadow-[0_14px_36px_rgba(47,31,25,0.09)] sm:h-40 sm:w-60">
      <span className={`mb-4 grid size-14 place-items-center rounded-full bg-gradient-to-br ${item.tone!} text-white shadow-[0_10px_28px_rgba(123,48,36,0.25)]`}>
        <Icon aria-hidden="true" className="size-6" strokeWidth={2.15} />
      </span>
      <span className="max-w-40 text-sm font-bold leading-tight text-[#30211d] sm:text-base">
        {item.label}
      </span>
    </div>
  );
}

function MarqueeRow({ items, direction }: { items: Capability[]; direction: "left" | "right" }) {
  return (
    <div className="flex overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex w-max gap-4 pr-4 ${direction === "left" ? "capabilities-marquee-left" : "capabilities-marquee-right"}`}>
        <div className="flex gap-4">
          {items.map((item) => <CapabilityCard key={item.label} item={item} />)}
        </div>
        <div aria-hidden="true" className="flex gap-4">
          {items.map((item) => <CapabilityCard key={`${item.label}-copy`} item={item} />)}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative aspect-[705/1519] w-[230px] sm:w-[260px] lg:w-[270px]">
      <div className="absolute left-[4.25%] top-[1.8%] h-[96.35%] w-[91.5%] overflow-hidden rounded-[12%] bg-[#faf7f3]">
        <Image
          src="/mockups/my-habits.png"
          alt="Proven My Habits screen showing active challenges"
          fill
          sizes="(min-width: 1024px) 247px, (min-width: 640px) 238px, 210px"
          className="object-cover"
        />
      </div>
      <Image
        src="/phone-frame.png"
        alt=""
        fill
        sizes="(min-width: 1024px) 270px, (min-width: 640px) 260px, 230px"
        className="pointer-events-none object-contain"
      />
    </div>
  );
}

export default function ProductStory() {
  return (
    <section id="inside" className="relative overflow-hidden bg-white px-4 py-20 text-[#21100c] sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-[clamp(2.6rem,5vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.055em]">
            Turn daily follow-through into real rewards.
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-relaxed text-[#6f625e] sm:text-xl">
            Join a challenge, put something on the line, and submit proof each
            day. Proven turns the work you already want to do into visible
            progress—and rewards you can earn.
          </p>
        </div>

        <div className="relative mt-14 min-h-[590px] sm:mt-16 sm:min-h-[620px] lg:min-h-[640px]">
          <div className="absolute left-1/2 top-1/2 w-screen -translate-x-1/2 -translate-y-1/2 space-y-1">
            <MarqueeRow items={topRow} direction="right" />
            <MarqueeRow items={bottomRow} direction="left" />
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
