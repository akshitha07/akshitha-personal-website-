import React from "react";
import { FlipWords } from "@/src/components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["Scalable", "High-Performance", "Interactive", "Accessible", "Modern"];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-white">
        Building
        <FlipWords words={words} className="text-brand-blue font-bold" /> <br />
        Frontend Architectures
      </div>
    </div>
  );
}
