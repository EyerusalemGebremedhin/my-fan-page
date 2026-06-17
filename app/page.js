import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title="♟️ My Favorite Game: Chess"
        tagline="A great strategy game I could play forever and why it is worth your time."
      />
      <CardGrid items={items} />
    </main>
  );
}
