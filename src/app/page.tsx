'use client'
import { useEffect, useState } from "react";
import PWAInstallComponent from "./components/pwa-install";

export default function Home() {

  const [promptEvent, setPromptEvent] = useState<any | null>(null);

  useEffect(() => {
    const ready = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      setPromptEvent(e);
      alert("ready");
    };

    window.addEventListener("beforeinstallprompt", ready as any);

    return () => {
      window.removeEventListener("beforeinstallprompt", ready as any);
    };
  }, []);

  const showEvent = (event: any) => { 
    console.log(event);
  };

  return (
    <>
      <PWAInstallComponent onInstallSuccess={showEvent} onInstallFail={showEvent} onUserChoiceResult={showEvent} onInstallAvailable={showEvent} onInstallHowTo={showEvent} onInstallGallery={showEvent} externalPromptEvent={promptEvent} />
      <h1 className="title">hello tsg store!</h1>
    </>
  );
}