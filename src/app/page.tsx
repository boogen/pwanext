'use client'
import { useEffect, useState } from "react";
import PWAInstallComponent from "./components/pwa-install";

export default function Home() {

  const showEvent = (event: any) => { 
    console.log(event);
    alert(event);
  };

  return (
    <>
      <PWAInstallComponent onInstallSuccess={showEvent} onInstallFail={showEvent} onUserChoiceResult={showEvent} onInstallAvailable={showEvent} onInstallHowTo={showEvent} onInstallGallery={showEvent} />
      <h1 className="title">hello tsg store!</h1>
    </>
  );
}