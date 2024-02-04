'use client'
import { useEffect, useState } from "react";
import PWAInstallComponent from "./components/pwa-install";

export default function Home() {

  const showEvent = (event: any) => {alert(event)};

  return (
    <>
      <PWAInstallComponent onInstallSuccess={showEvent} onInstallFail={showEvent} onUserChoiceResult={undefined} onInstallAvailable={undefined} onInstallHowTo={undefined} onInstallGallery={undefined} />
    </>
  );
}