"use client";

import { useAtomValue, useSetAtom } from "jotai";

import {
  contactSessionIdAtomFamily,
  errorMessageAtom,
  loadingMessageAtom,
  organizationIdAtom,
  screenAtom,
} from "../../atoms/widget-atoms";
import { WidgetHeader } from "../components/widget-header";
import { LoaderIcon } from "lucide-react";
import React, { useEffect } from "react";
import { useAction, useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";


type InitStep = "org" | "session" | "settings" | "done";

export const WidgetLoadingScreen = ({
  organizationId,
}: {
  organizationId: string | null;
}) => {
  const [step, setStep] = React.useState<InitStep>("org");
  const [sessionValid, setSessionValid] = React.useState(false);
  const setOrganizationId = useSetAtom(organizationIdAtom);
  const loadingMessage = useAtomValue(loadingMessageAtom);
  const setErrorMessage = useSetAtom(errorMessageAtom);
  const setLoadingMessage = useSetAtom(loadingMessageAtom);
  const setScreen = useSetAtom(screenAtom);

  const contactSessionId = useAtomValue(
    contactSessionIdAtomFamily(organizationId || "")
  );

  const validationOrganization = useAction(
    api.public.organizations.validateOrganization
  );

  useEffect(() => {
    if (step !== "org") return;
    setLoadingMessage("Validating organization...");
    if (!organizationId) {
      setErrorMessage("Organization ID is missing.");
      setScreen("error");
      return;
    }

    setLoadingMessage("Validating organization...");

    validationOrganization({ organizationId: organizationId! })
      .then((result) => {
        if (result.valid) {
          setOrganizationId(organizationId);
          setStep("session");
          setSessionValid(true);
          setStep("session");
        } else {
          setErrorMessage(
            result.reason ||
              "Organization not found. Please check your organization ID."
          );
          setScreen("error");
        }
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage("An error occurred while validating the organization.");
        setScreen("error");
      });
  }, [
    step,
    organizationId,
    setErrorMessage,
    setScreen,
    setLoadingMessage,
    setOrganizationId,
    validationOrganization,
  ]);

  // Session validation effect
  const validateContactSession = useMutation(
    api.public.contactSessions.validate
  );
  useEffect(() => {
    if (step !== "session") return;

    if (!contactSessionId) {
      setSessionValid(false);
      setStep("done");
      return;
    }
    setLoadingMessage("Validating session...");
    validateContactSession({
      contactSessionId,
    })
      .then((result) => {
        setSessionValid(result.valid);
        setStep("done");
      })
      .catch((error) => {
        console.log(error)
        setSessionValid(false);
        setErrorMessage("An error occurred while validating the session.");
        setScreen("error");
      });
  }, [
    step,
    contactSessionId,
    setErrorMessage,
    setScreen,
    setLoadingMessage,
    validateContactSession,
  ]);

  useEffect(() => {
    if (step !== "done") return;
    const hasValidSession = contactSessionId && sessionValid;
    setScreen(hasValidSession ? "selection" : "auth");
  }, [step, setScreen, contactSessionId, sessionValid]);

  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-2 px-2 py-6 font-semibold">
          <p className=" text-3xl">Hi there! 👋</p>
          <p className="text-lg">How can I help you today?</p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 p-4 text-muted-foreground">
        <LoaderIcon className="animate-spin" />
        <p className="text-sm">{loadingMessage || "Loading..."}</p>
      </div>
    </>
  );
};
