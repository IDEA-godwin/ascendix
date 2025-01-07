import { ChevronRight, Swords } from "lucide-react";
import { Meteors } from "~/components/meteors";
import { Button } from "~/components/ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function ListTile({ questId = "1" }: { questId?: string }) {
  return (
    <div className="overflow-idden backdrop-blur-md p-4 
 rounded-md shadow-2xl bg-[#5B2B99]">
    <div className="relative flex items-start  gap-4">
     
      <div className="p-3 rounded-full bg-secondary-foreground/20 w-fit">
        <Swords />
      </div>
      <div className="pt-2 space-y-2">
        <div className="flex justify-between items-center">
          <div>QuestSphere</div>
          <div className="bg-violet-500 px-4 text-sm py-2 rounded-full ">
        <p>Open</p>
      </div>

        </div> 
        <div className="text-xs text-gray-300 line-clamp-3">
        QuestSphere is a dynamic platform where education meets adventure! Dive into a world of user-created quests spanning diverse topics and challenges. With each quest, you unlock AI-crafted quizzes designed to match your skill level and keep you engaged. Whether you are exploring new subjects or mastering old ones, QuestSphere makes learning a journey worth taking.
        </div>
       
      </div>
    </div>
    <div className="flex justify-between pt-4">
        <Badge variant={"secondary"}>$30</Badge>
          <Button asChild size={"sm"} className="space-x-0.5 bg-gray-100 text-gray-900 hover:bg-gray-300">
            <Link href={`/quests/${questId}`}>
              <div>View</div>
              <ChevronRight />
            </Link>
          </Button>
        
        </div>
    </div>
  );
}
