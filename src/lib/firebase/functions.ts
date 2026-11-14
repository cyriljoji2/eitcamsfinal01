import { getFunctions, type Functions } from 'firebase/functions';
import { getFirebaseApp } from './app';
import { getFirebaseConfigurationStatus } from './config';

let cachedFunctions: Functions | null = null;

export function getFirebaseFunctions(): Functions | null {
  if (cachedFunctions) {
    return cachedFunctions;
  }
  const app = getFirebaseApp();
  if (!app) {
    return null;
  }
  const { functionsRegion } = getFirebaseConfigurationStatus();
  cachedFunctions = getFunctions(app, functionsRegion);
  return cachedFunctions;
}
