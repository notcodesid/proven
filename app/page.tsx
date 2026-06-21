import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080403] text-white">
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-16">
        <Image
          src="/hero-concept-01.png"
          alt="Athlete preparing for an early morning run"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-[64%_center]"
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080403] to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-black/35 via-black/10 to-transparent sm:w-[62%]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl">
          <div className="flex max-w-[780px] flex-col items-start text-left">
            <h1 className="mt-7 max-w-[780px] text-[clamp(3.25rem,7vw,6.5rem)] font-extrabold leading-[0.92] tracking-[-0.055em] text-white drop-shadow-[0_3px_24px_rgba(0,0,0,0.28)]">
              Get paid every day you show up.
            </h1>

            <p className="mt-7 max-w-lg text-lg font-medium leading-relaxed text-white/75 drop-shadow sm:text-xl">
              Complete your habit, upload proof, and get rewarded for every day
              you follow through.
            </p>

            <button className="mt-9 rounded-full bg-white px-8 py-4 text-base font-bold text-black shadow-xl transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 active:translate-y-0">
              Join the TestFlight
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
