import { items } from "../../data";
import Image from "next/image";

export default async function FaveDetail({ params }) {
  const { id } = await params;
  const item = items.find((i) => String(i.id) === id);

  if (!item) {
    return (
      <main>
        <p>Sorry, that piece doesn't exist.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <Image 
        src={item.image} 
        alt={item.name} 
        width={400} 
        height={400} 
        style={{ objectFit: "contain", borderRadius: "12px", marginBottom: "1.5rem" }} 
      />
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.name}</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{item.blurb}</p>
      <p style={{ fontSize: "1.5rem" }}>{"⭐".repeat(item.rating)}</p>
    </main>
  );
}
