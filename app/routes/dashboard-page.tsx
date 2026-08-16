import { ArrowUpIcon } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="flex flex-wrap items-center gap-2 p-6">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}