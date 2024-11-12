import { ChevronRight, Swords } from "lucide-react";
import { Meteors } from "~/components/meteors";
import { Button } from "~/components/ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function ListTile({ questId = "1" }: { questId?: string }) {
  return (
    <div className="relative flex items-start p-4 overflow-idden backdrop-blur-md shadow-2xl bg-[#5B2B99]
 rounded-md gap-4">
      
      <div className="p-3 rounded-full bg-secondary-foreground/20 w-fit">
        <Swords />
      </div>
      <div className="pt-2 space-y-2">
        <div className="flex justify-between">
          <div>Name Of Quest</div>
          <Badge variant={"secondary"}>$30</Badge>
        </div>
        <div className="text-xs text-gray-300 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          quia laudantium eum minus rerum similique dolores perferendis placeat,
          hic necessitatibus odit eius qui a expedita quo iure. Nesciunt,
          officia animi!
        </div>
        <div className="flex justify-end pt-4">
          <Button asChild size={"sm"} className="space-x-0.5 bg-gray-100 text-gray-900 hover:bg-gray-300">
            <Link href={`/quests/${questId}`}>
              <div>View</div>
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
