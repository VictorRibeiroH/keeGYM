import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Plans from "./components/Plans";

function App() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator />
      <Benefits />
      <Plans />
    </main>
  );
}

export default App;
