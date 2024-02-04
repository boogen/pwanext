'use client'
import { useEffect, useState } from "react";
import PWAInstallComponent from "./components/pwa-install";

export default function Home() {

  return (
    <>
      <PWAInstallComponent onInstallSuccess={undefined} onInstallFail={(msg: any) => {alert(msg)}} onUserChoiceResult={undefined} onInstallAvailable={undefined} onInstallHowTo={undefined} onInstallGallery={undefined} />
    </>
  );
}