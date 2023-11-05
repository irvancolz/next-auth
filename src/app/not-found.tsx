import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>page Not Found</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
