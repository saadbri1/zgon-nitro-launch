import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/zgon/Loader";
import { Nav } from "@/components/zgon/Nav";
import { Hero } from "@/components/zgon/Hero";
import { About } from "@/components/zgon/About";
import { Tokenomics } from "@/components/zgon/Tokenomics";
import { Farming } from "@/components/zgon/Farming";
import { Roadmap } from "@/components/zgon/Roadmap";
import { Community } from "@/components/zgon/Community";
import { FinalCta } from "@/components/zgon/FinalCta";
import { Footer } from "@/components/zgon/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-[var(--zgon-bg)] text-[var(--zgon-text)] min-h-screen">
      <Loader />
      <Nav />
      <Hero />
      <About />
      <Tokenomics />
      <Farming />
      <Roadmap />
      <Community />
      <FinalCta />
      <Footer />
    </main>
  );
}
