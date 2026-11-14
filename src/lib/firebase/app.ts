import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getFirebaseConfigurationStatus } from './config';

let cachedApp: FirebaseApp | null = null;

/**
 * Returns the initialized FirebaseApp if valid environment config is present,
 * otherwise returns null without creating fake connections.
 */
export function getFirebaseApp(): FirebaseApp | null {
  if (cachedApp) {
    return cachedApp;
  }

  const status = getFirebaseConfigurationStatus();
  if (!status.isConfigured || !status.options) {
    return null;
  }

  cachedApp = getApps().length > 0 ? getApp() : initializeApp(status.options);
  return cachedApp;
}
