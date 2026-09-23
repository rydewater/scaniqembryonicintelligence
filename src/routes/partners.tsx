import { createFileRoute } from "@tanstack/react-router";
import { PartnersView } from "@/components/partners/partners-view";

export const Route = createFileRoute("/partners")({ component: PartnersPage });

function PartnersPage() {
  return <PartnersView />;
}
