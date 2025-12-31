import { useState } from "react";
import { Button } from "./ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function UserInfo() {
  const [progress] = useState(66.6);
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({
    username: "John.Doe",
    email: "John.Doe@gmail.com",
    phone: "+44 7123987465",
    location: "London, UK",
    role: "admin",
  });

  const formSchema = z.object({
    username: z
      .string()
      .min(5, "Username must be at least 5 characters.")
      .max(32, "Username must be at most 32 characters."),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone must be at least 10 characters"),
    location: z.string().min(3, "Location must be at least 3 characters"),
    role: z.enum(["admin", "user"]),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: userData,
  });

  function onSubmit(data) {
    setUserData(data);
    setIsOpen(false);
  }

  return (
    <div className="h-full overflow-scroll">
      <div className="flex items-center justify-between mb-2 ">
        <h1 className="font-bold text-lg mb-4">User Information</h1>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button className="cursor-pointer">Edit User</Button>
          </SheetTrigger>
          <SheetContent className="p-4">
            <SheetHeader>
              <SheetTitle className="mb-2">Edit User</SheetTitle>
              <SheetDescription>
                Update your user information below
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-4 mt-6">
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="email"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="tel"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="location"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Location</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="role"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Role</FieldLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger aria-invalid={fieldState.invalid}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={form.handleSubmit(onSubmit)}
                  className="flex-1"
                >
                  Save
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">Profile completion</p>
        <Progress value={progress} />

        <div className="space-y-3 mt-12">
          <div className="flex gap-3 items-center">
            <h3 className="font-bold">Username:</h3>
            <span>{userData.username}</span>
          </div>

          <div className="flex gap-3 items-center">
            <h3 className="font-bold">Email:</h3>
            <span>{userData.email}</span>
          </div>

          <div className="flex gap-3 items-center">
            <h3 className="font-bold">Phone:</h3>
            <span>{userData.phone}</span>
          </div>

          <div className="flex gap-3 items-center">
            <h3 className="font-bold">Location:</h3>
            <span>{userData.location}</span>
          </div>

          <div className="flex gap-3 items-center">
            <h3 className="font-bold">Role:</h3>
            <Button className="h-6">
              {userData.role.charAt(0).toUpperCase() + userData.role.slice(1)}
            </Button>
          </div>

          <p className="text-muted-foreground">Join on 2025/01/01</p>
        </div>
      </div>
    </div>
  );
}
