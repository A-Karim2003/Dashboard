import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { Calendar1 } from "lucide-react";

const initialTodos = [
  {
    id: 1,
    title: "Review pending customer refund and return requests.",
    description:
      "Review pending refund and return requests, verify eligibility, and approve or deny them.",
    complete: true,
  },
  {
    id: 2,
    title: "Approve or reject newly submitted product listings.",
    description:
      "Review new product submissions for compliance, quality, and completeness, then approve or reject with feedback.",
    complete: false,
  },
  {
    id: 3,
    title: "Check recent product reviews for potential issues.",
    description:
      "Scan recent customer reviews for defects, safety concerns, or recurring complaints needing action.",
    complete: false,
  },
  {
    id: 4,
    title: "Process supplier invoices and update expense logs.",
    description:
      "Verify supplier invoices against orders, record payments, and update expense logs.",
    complete: false,
  },
];

export default function AppTodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [date, setDate] = useState();
  console.log(date);

  function handleCheckedTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  }

  function formatDate(date) {
    if (!date) return "Select a date";

    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  return (
    <div className="h-full min-w-87.5 flex flex-col ">
      <h1 className="mb-4">Todo List</h1>

      <Popover>
        <PopoverTrigger asChild className="cursor-pointer">
          <Button variant="outline">
            <Calendar1 />
            {formatDate(date)}
          </Button>
        </PopoverTrigger>
        <PopoverContent open={false}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className="flex-1 min-h-0 mt-4">
        <div className="flex flex-col gap-2 ">
          {todos.map((todo) => (
            <Card
              key={todo.id}
              className={`${
                todo.complete ? "bg-(--todo)" : "bg-card)"
              } flex-row items-center p-2`}
            >
              <Checkbox
                checked={todo.complete}
                onCheckedChange={() => handleCheckedTodo(todo.id)}
                id={todo.id}
              />
              <div className="space-y-2">
                <label htmlFor={todo.id} className="cursor-pointer">
                  <CardTitle className="leading-5.5">{todo.title}</CardTitle>
                  <CardDescription>{todo.description}</CardDescription>
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
