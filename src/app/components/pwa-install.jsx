import * as Reactfrom from "react";
import { useRef, useEffect, useMemo } from 'react';

/*  dependencies:
    "@khmyznikov/pwa-install": "*",
    "@lit": "*"
*/
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

const PWAInstallComponent = ({
  onInstallSuccess,
  onInstallFail,
  onUserChoiceResult,
  onInstallAvailable,
  onInstallHowTo,
  onInstallGallery,
  externalPromptEvent,
  ...props
}) => {
  const pwaInstallRef = useRef(null);

  // Filter out null or undefined props
  const nonNullProps = Object.fromEntries(
    Object.entries(props).filter(([_, value]) => value != null)
  );

  useEffect(() => {
    const currentElement = pwaInstallRef.current;

    const handleInstallSuccess = (event) => onInstallSuccess?.(event);
    const handleInstallFail = (event) => onInstallFail?.(event);
    const handleUserChoiceResult = (event) => onUserChoiceResult?.(event);
    const handleInstallAvailable = (event) => onInstallAvailable?.(event);
    const handleInstallHowTo = (event) => onInstallHowTo?.(event);
    const handleInstallGallery = (event) => onInstallGallery?.(event);

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
  }, [onInstallSuccess, onInstallFail, onUserChoiceResult, onInstallAvailable, onInstallHowTo, onInstallGallery, externalPromptEvent]);

  return (
    <>
      <PWAInstall
        ref={pwaInstallRef}
        externalPromptEvent={externalPromptEvent}
        {...nonNullProps}
      />
      <button onClick={() => pwaInstallRef.current.showDialog(true)}>Show Install Prompt</button>
    </>
  );
};

export default PWAInstallComponent;
