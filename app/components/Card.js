import Image from "next/image";
import styles from "./Card.module.css";
import LikeButton from "./LikeButton";

export default function Card({ name, blurb, rating, image }) {
  return (
    <article className={styles.card}>
      <Image src={image} alt={name} width={240} height={140} />
      <h2>{name}</h2>
      <p>{blurb}</p>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>
      <LikeButton />
    </article>
  );
}
