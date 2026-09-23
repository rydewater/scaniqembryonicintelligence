import { createFileRoute } from "@tanstack/react-router";
import { PitchDeck } from "@/components/deck/pitch-deck";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <PitchDeck />;
}
