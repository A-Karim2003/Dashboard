import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";

export default function UserBadges() {
  return (
    <>
      <h1 className="font-semibold text-xl">User Badge</h1>
      <div className="flex gap-4 items-center">
        <HoverCard>
          <HoverCardTrigger>
            <BadgeCheck
              size={36}
              className="bg-blue-500/30 rounded-full border border-blue-500/50  p-1"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold text-lg mb-2">User Badge</h1>
            <p className="text-sm text-muted-foreground">
              This user has been verified by the admin.
            </p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Shield
              size={36}
              className="bg-green-500/30 rounded-full border border-green-500/50  p-1"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold text-lg mb-2">User Badge</h1>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              ullam! Dolorem ducimus dicta libero ex, delectus aperiam. Aut quia
              numquam vero et iste nulla, quam consequuntur magnam
            </p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Candy
              size={36}
              className="bg-yellow-500/30 rounded-full border border-yellow-500/50  p-1"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold text-lg mb-2">User Badge</h1>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              ullam! Dolorem ducimus dicta libero ex, delectus aperiam. Aut quia
              numquam vero et iste nulla, quam consequuntur
            </p>
          </HoverCardContent>
        </HoverCard>

        <HoverCard>
          <HoverCardTrigger>
            <Citrus
              size={36}
              className="bg-orange-500/30 rounded-full border border-blue-500/50  p-1"
            />
          </HoverCardTrigger>
          <HoverCardContent>
            <h1 className="font-bold text-lg mb-2">User Badges</h1>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              ullam! Dolorem ducimus dicta libero ex, delectus aperiam. Aut
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
}
