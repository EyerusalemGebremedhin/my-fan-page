import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ 
      display: "flex", 
      gap: "24px", 
      marginBottom: "2rem",
      paddingBottom: "1rem",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
    }}>
      <Link href="/" style={{ 
        color: "#ffffff", 
        textDecoration: "none", 
        fontSize: "1.1rem",
        fontWeight: "500" 
      }}>
        Home
      </Link>
      <Link href="/about" style={{ 
        color: "#ffffff", 
        textDecoration: "none", 
        fontSize: "1.1rem",
        fontWeight: "500" 
      }}>
        About
      </Link>
    </nav>
  );
}
