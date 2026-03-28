import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Work />

      <About />

      <Contact />
    </main>
  );
}
