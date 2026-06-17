"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)} style={{ marginTop: "1rem", cursor: "pointer" }}>
      {liked ? "❤️ Liked" : "❤️Like"}
    </button>
  );
}
