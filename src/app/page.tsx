'use client'
import { useEffect, useState } from "react";
import { useAddToHomescreenPrompt } from "./addToHomeScreen";

export default function Home() {
  const [promptable, setPromptable] = useState(null);
  useEffect(() => {
    const ready = (e) => {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex items-center justify-center text-8xl">
      TSG Store {promptable ? '👍' : '👎'}
    </div>
    <button id="install" onClick={promptToInstall}>Add to homescreen</button>
  </main>
  );
}