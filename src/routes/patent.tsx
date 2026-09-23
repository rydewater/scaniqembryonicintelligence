import { createFileRoute } from "@tanstack/react-router";
import { PatentView } from "@/components/patent/patent-view";

export const Route = createFileRoute("/patent")({ component: PatentPage });

function PatentPage() {
  return <PatentView />;
}
