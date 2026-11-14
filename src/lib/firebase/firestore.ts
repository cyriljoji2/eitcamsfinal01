import { getFirestore, type Firestore } from 'firebase/firestore';
import { getFirebaseApp } from './app';
import { getFirebaseConfigurationStatus } from './config';

let cachedDb: Firestore | null = null;

export function getFirebaseFirestore(): Firestore | null {
  if (cachedDb) {
    return cachedDb;
  }
  const app = getFirebaseApp();
  if (!app) {
    return null;
  }
  const { databaseId } = getFirebaseConfigurationStatus();
  cachedDb = databaseId ? getFirestore(app, databaseId) : getFirestore(app);
  return cachedDb;
}
