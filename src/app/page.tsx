import { HeroSection } from "@/components/hero/HeroSection";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 right-0 z-50 p-6">
        <ThemeToggle />
      </header>
      <main className="pt-20">
        <HeroSection />
      </main>
    </div>
  );
}
