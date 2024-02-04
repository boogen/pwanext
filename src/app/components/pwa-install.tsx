import * as Reactfrom from "react";
import { useRef, useEffect } from 'react';

/*  dependencies:
    "@khmyznikov/pwa-install": "*",
    "@lit": "*"
*/
//import PWAInstall from '@khmyznikov/pwa-install';
import PWAInstall from '@khmyznikov/pwa-install/dist/pwa-install.react.js';

/*
  manifestUrl = '/manifest.json',
  icon = '',
  name = 'React App',
  description = '',
  installDescription = '',
  disableDescription = false,
  disableScreenshots = false,
  manualApple = false,
  manualChrome = false,
  disableChrome = false,
*/

type PWAProps = {
  onInstallSuccess: any;
  onInstallFail: any;
  onUserChoiceResult: any;
  onInstallAvailable: any,
  onInstallHowTo: any,
  onInstallGallery: any,
};

const PWAInstallComponent = ({
  onInstallSuccess,
  onInstallFail,
  onUserChoiceResult,
  onInstallAvailable,
  onInstallHowTo,
  onInstallGallery,
  ...props
} : PWAProps) => {
  const pwaInstallRef = useRef(null);

  // Filter out null or undefined props
  const nonNullProps = Object.fromEntries(
    Object.entries(props).filter(([_, value]) => value != null)
  );

  useEffect(() => {
    const currentElement = pwaInstallRef.current as EventTarget | null;

    const handleInstallSuccess = (event: any) => onInstallSuccess?.(event);
    const handleInstallFail = (event: any) => onInstallFail?.(event);
    const handleUserChoiceResult = (event: any) => onUserChoiceResult?.(event);
    const handleInstallAvailable = (event: any) => onInstallAvailable?.(event);
    const handleInstallHowTo = (event: any) => onInstallHowTo?.(event);
    const handleInstallGallery = (event: any) => onInstallGallery?.(event);

    if (currentElement) {
      currentElement.addEventListener('pwa-install-success-event', handleInstallSuccess);
      currentElement.addEventListener('pwa-install-fail-event', handleInstallFail);
      currentElement.addEventListener('pwa-user-choice-result-event', handleUserChoiceResult);
      currentElement.addEventListener('pwa-install-available-event', handleInstallAvailable);
      currentElement.addEventListener('pwa-install-how-to-event', handleInstallHowTo);
      currentElement.addEventListener('pwa-install-gallery-event', handleInstallGallery);

      return () => {
        currentElement.removeEventListener('pwa-install-success-event', handleInstallSuccess);
        currentElement.removeEventListener('pwa-install-fail-event', handleInstallFail);
        currentElement.removeEventListener('pwa-user-choice-result-event', handleUserChoiceResult);
        currentElement.removeEventListener('pwa-install-available-event', handleInstallAvailable);
        currentElement.removeEventListener('pwa-install-how-to-event', handleInstallHowTo);
        currentElement.removeEventListener('pwa-install-gallery-event', handleInstallGallery);
      };
    }
  }, [onInstallSuccess, onInstallFail, onUserChoiceResult, onInstallAvailable, onInstallHowTo, onInstallGallery]);

  return (
    <>
      <PWAInstall
        ref={pwaInstallRef}
        {...nonNullProps}
      />
      <button onClick={() => pwaInstallRef?.current?.showDialog?.(true)}>Show Install Prompt</button>
    </>
  );
};

export default PWAInstallComponent;
