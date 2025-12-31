import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default function Profile() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="flex items-center gap-4 mb-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/118293855?v=4" />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-bold tracking-wider">John Doe</h1>
      </div>

      <ScrollArea className="overflow-scroll">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore saepe
        totam voluptate tempora, beatae culpa laboriosam consequuntur vitae
        mollitia rem velit repellat laudantium, perspiciatis dicta fugit quis
        placeat odio impedit. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Delectus iure nihil officia, incidunt voluptatum nemo facilis odit
        unde beatae impedit magni ab tempore, doloribus ea illum earum dicta
        facere iusto.
      </ScrollArea>
    </div>
  );
}
