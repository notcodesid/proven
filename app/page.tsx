import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#3a0f07] via-[#0a0201] to-[#010001] text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen pt-24">
        {/* Placeholder main content area */}
        <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-6xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          Bet on Yourself. Get Rewarded.
        </h1>
        <p className="mt-4 text-zinc-400 text-center max-w-md">
          Commit to personal goals. Stake money. Stay accountable.
        </p>
      </div>
    </div>
  );
}


