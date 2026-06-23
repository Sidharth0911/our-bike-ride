import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Heart, MapPin, Calendar, Bike, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "To My Favorite Human, Richa ❤️" },
      { name: "description", content: "A little love note for Richa before our Daman getaway." },
      { property: "og:title", content: "To My Favorite Human, Richa ❤️" },
      { property: "og:description", content: "A little love note for Richa before our Daman getaway." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RichaLoveNote,
});

const EXCITEMENT_LABELS: Record<number, string> = {
  1: "A tiny flutter 💗",
  2: "Blooming a little 🌸",
  3: "Smiles are forming ☺️",
  4: "Heart is warming 🥰",
  5: "Properly excited 💕",
  6: "Butterflies activated 🦋",
  7: "Can’t stop grinning 😍",
  8: "Over the moon 🌙✨",
  9: "Bursting with joy! 🎉",
  10: "MAXIMUM CHEESE LEVEL! 🧀💖",
};

function RichaLoveNote() {
  const [excitement, setExcitement] = useState(5);
  const [showMessage, setShowMessage] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleConfetti = () => {
    setShowMessage(true);

    const rect = buttonRef.current?.getBoundingClientRect();
    const originX = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const originY = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.6;

    const colors = ["#f472b6", "#ec4899", "#db2777", "#fce7f3", "#fff1f2", "#fbbf24"];

    confetti({
      particleCount: 120,
      spread: 100,
      origin: { x: originX, y: originY },
      colors,
      disableForReducedMotion: true,
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.8 },
        colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.8 },
        colors,
        disableForReducedMotion: true,
      });
    }, 250);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-romance font-body text-foreground">
      <FloatingHearts />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-5 py-8 sm:px-8 sm:py-12">
        <header className="animate-fade-in-up text-center" style={{ animationDelay: "0.1s" }}>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            A little note for
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-rose sm:text-5xl md:text-6xl">
            To My Favorite Human, Richa <span className="animate-heart-beat inline-block">❤️</span>
          </h1>
        </header>

        <section
          className="animate-fade-in-up mt-10 w-full overflow-hidden rounded-3xl border border-blush bg-card/80 shadow-rose backdrop-blur-sm"
          style={{ animationDelay: "0.25s" }}
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <img
              src="/images/hero-romance.jpg"
              alt="A dreamy pink sunset by the ocean, just like the view I want to share with you"
              className="h-full w-full object-cover"
              width={1024}
              height={640}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose/20 to-transparent" />
          </div>

          <div className="px-6 py-8 sm:px-10 sm:py-10">
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blush px-3 py-1">
                <Calendar className="h-4 w-4 text-rose" />
                July 2nd – 4th
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blush px-3 py-1">
                <MapPin className="h-4 w-4 text-rose" />
                Daman
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blush px-3 py-1">
                <Bike className="h-4 w-4 text-rose" />
                Pulsar NS400Z
              </span>
            </div>

            <h2 className="font-display text-center text-2xl font-semibold text-foreground sm:text-3xl">
              Our Daman getaway is almost here.
            </h2>

            <div className="mt-5 space-y-4 text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I can already picture it: the wind in our hair, the road stretching ahead, and the two of us riding
                all the way to Daman on my Pulsar NS400Z. Three perfect days of sunsets, beach walks, and
                making memories with you.
              </p>
              <p className="font-medium text-rose">
                “The best view is always from the pillion seat, especially when it’s with you.”
              </p>
            </div>
          </div>
        </section>

        <section
          className="animate-fade-in-up mt-8 w-full rounded-3xl border border-blush bg-card/80 p-6 shadow-rose backdrop-blur-sm sm:p-10"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="mx-auto max-w-md text-center">
            <div className="mb-4 flex items-center justify-center gap-2 text-rose">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Cheesy Excitement Meter</span>
              <Sparkles className="h-5 w-5" />
            </div>

            <label htmlFor="excitement" className="mb-6 block text-lg font-medium text-foreground">
              How excited are you for our Daman getaway?
            </label>

            <div className="relative mb-3">
              <input
                id="excitement"
                type="range"
                min={1}
                max={10}
                step={1}
                value={excitement}
                onChange={(e) => setExcitement(Number(e.target.value))}
                className="h-3 w-full cursor-pointer appearance-none rounded-full bg-blush accent-rose focus:ring-rose-focus"
                aria-label="Excitement level"
              />
              <div className="mt-2 flex justify-between px-1 text-xs text-muted-foreground">
                <span>1</span>
                <span>5</span>
                <span>10</span>
              </div>
            </div>

            <p className="text-lg font-semibold text-rose" aria-live="polite">
              Excitement Level: {excitement}/10
            </p>
            <p className="mt-1 text-sm italic text-muted-foreground">
              {EXCITEMENT_LABELS[excitement]}
            </p>
          </div>
        </section>

        <section
          className="animate-fade-in-up mt-8 w-full text-center"
          style={{ animationDelay: "0.55s" }}
        >
          <Button
            ref={buttonRef}
            onClick={handleConfetti}
            size="lg"
            className="group relative h-14 rounded-full bg-gradient-to-r from-rose to-rose-light px-8 text-lg font-semibold text-primary-foreground shadow-rose transition-all hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Let’s Go!
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          {showMessage && (
            <div className="animate-confetti-pop mt-8 rounded-3xl border border-blush bg-card/90 p-6 shadow-rose backdrop-blur-sm sm:p-8">
              <p className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                I’m already counting down the seconds until July 2nd.
              </p>
              <p className="mt-2 text-lg text-rose">See you on the bike, Richa! 😘</p>
              <div className="mt-4 flex justify-center gap-2 text-2xl">
                <span className="animate-heart-beat inline-block">💕</span>
                <span className="animate-heart-beat inline-block" style={{ animationDelay: "0.2s" }}>
                  🏍️
                </span>
                <span className="animate-heart-beat inline-block" style={{ animationDelay: "0.4s" }}>
                  💕
                </span>
              </div>
            </div>
          )}
        </section>

        <footer className="animate-fade-in-up mt-12 text-center text-sm text-muted-foreground" style={{ animationDelay: "0.7s" }}>
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 fill-rose text-rose" /> for Richa
          </p>
        </footer>
      </div>
    </main>
  );
}

function FloatingHearts() {
  const hearts = useMemo(
    () => [
      { left: "8%", top: "12%", size: 20, delay: "0s", duration: "7s" },
      { left: "85%", top: "20%", size: 16, delay: "1.2s", duration: "8s" },
      { left: "15%", top: "55%", size: 14, delay: "2.4s", duration: "6.5s" },
      { left: "78%", top: "60%", size: 22, delay: "0.8s", duration: "9s" },
      { left: "5%", top: "85%", size: 18, delay: "3s", duration: "7.5s" },
      { left: "92%", top: "82%", size: 12, delay: "1.8s", duration: "6s" },
    ],
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {hearts.map((heart, i) => (
        <svg
          key={i}
          className="absolute opacity-20"
          style={{
            left: heart.left,
            top: heart.top,
            width: heart.size,
            height: heart.size,
            animation: `float ${heart.duration} ease-in-out infinite`,
            animationDelay: heart.delay,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ))}
    </div>
  );
}
