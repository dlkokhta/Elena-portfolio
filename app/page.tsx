import About from "./components/About";
import Work from "./components/Work";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Work />

      <About />

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <p className="font-serif text-white/20 tracking-[0.3em] uppercase text-sm">
          Coming soon — Contact
        </p>
      </section>
    </main>
  );
}
