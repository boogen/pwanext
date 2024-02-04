'use client'
import { useEffect, useState } from "react";
import PWAInstallComponent from "./components/pwa-install";

export default function Home() {
  
  return (
    <>
      <PWAInstallComponent onInstallSuccess={undefined} onInstallFail={undefined} onUserChoiceResult={undefined} onInstallAvailable={undefined} onInstallHowTo={undefined} onInstallGallery={undefined} />
    </>
  );
}