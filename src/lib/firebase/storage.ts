import { getStorage, type FirebaseStorage } from 'firebase/storage';
import { getFirebaseApp } from './app';

let cachedStorage: FirebaseStorage | null = null;

export function getFirebaseStorage(): FirebaseStorage | null {
  if (cachedStorage) {
    return cachedStorage;
  }
  const app = getFirebaseApp();
  if (!app) {
    return null;
  }
  cachedStorage = getStorage(app);
  return cachedStorage;
}
