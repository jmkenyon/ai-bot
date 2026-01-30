"use client";

import { WidgetHeader } from "../components/widget-header";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@workspace/ui/components/form";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Doc } from "@workspace/backend/_generated/dataModel";
import { useAtomValue, useSetAtom } from "jotai";
import {
  contactSessionIdAtomFamily,
  organizationIdAtom,
  screenAtom,
} from "../../atoms/widget-atoms";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z
    .string()
    .email("Invalid email address")
    .refine((email) => email.endsWith("sscinc.com"), {
      message: "Email must be a company address",
    }),
});

export const WidgetAuthScreen = () => {
  const setScreen = useSetAtom(screenAtom);

  const organizationId = useAtomValue(organizationIdAtom);
  const setContactSessionId = useSetAtom(
    contactSessionIdAtomFamily(organizationId || "")
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const createContactSession = useMutation(api.public.contactSessions.create);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!organizationId) {
      console.error("Organization ID is missing");
      return;
    }
    const metadata: Doc<"contactSessions">["metadata"] = {
      userAgent: navigator.userAgent ?? "",
      platform: navigator.platform ?? "",
      language: navigator.language ?? "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? "",
      screenResolution: screen ? `${screen.width}x${screen.height}` : "",
      viewPortSize:
        window.innerWidth && window.innerHeight
          ? `${window.innerWidth}x${window.innerHeight}`
          : "",
      currentUrl: location.href ?? "",
      referrer: document.referrer ?? "",
    };
    const contactSessionId = await createContactSession({
      ...values,
      organizationId,
      metadata,
    });
    setContactSessionId(contactSessionId);
    setScreen("selection");
  };

  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
          <p className=" text-3xl">Hi there! 👋</p>
          <p className="text-lg">Let&apos;s get you started</p>
        </div>
      </WidgetHeader>
      <Form {...form}>
        <form
          className="flex flex-1 flex-col gap-y-4 p-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-10 bg-background"
                    placeholder="Your Name"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="h-10 bg-background"
                    placeholder="Your Email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={form.formState.isSubmitting}
            size="lg"
            type="submit"
            className="mt-4 w-full"
          >
            Get Started
          </Button>
        </form>
      </Form>
    </>
  );
};
