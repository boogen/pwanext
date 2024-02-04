'use client'
import { useEffect, useState } from "react";
import { useAddToHomescreenPrompt } from "./addToHomeScreen";
import PWAInstallComponent from "./components/pwa-install";

interface IBeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function Home() {
  const [promptable, setPromptable] = useState<IBeforeInstallPromptEvent | null>(null);
  useEffect(() => {
    const ready = (e: any) => {
      e.preventDefault();
      setPromptable(e);
    };

    window.addEventListener("beforeinstallprompt", ready as any);

    return () => {
      window.removeEventListener("beforeinstallprompt", ready as any);
    };
  }, []);

  

  const promptToInstall = async () => {
    if (promptable) {
      return promptable.prompt();
    }
  };

  return (
    <>
      <PWAInstallComponent />
    </>
  );
}