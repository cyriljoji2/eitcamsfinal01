import type { FirebaseOptions } from 'firebase/app';
import { getFirebaseClientEnv } from '@/src/utils/env';

export interface FirebaseConfigurationStatus {
  isConfigured: boolean;
  missingKeys: string[];
  options: FirebaseOptions | null;
  databaseId?: string;
  functionsRegion: string;
  useEmulators: boolean;
}

/**
 * Resolves Firebase Web SDK configuration exclusively from environment variables.
 * Never fabricates placeholder credentials or simulates a live connection.
 */
export function getFirebaseConfigurationStatus(): FirebaseConfigurationStatus {
  const env = getFirebaseClientEnv();
  const requiredEntries: Array<[string, string]> = [
    ['VITE_FIREBASE_API_KEY', env.apiKey],
    ['VITE_FIREBASE_AUTH_DOMAIN', env.authDomain],
    ['VITE_FIREBASE_PROJECT_ID', env.projectId],
    ['VITE_FIREBASE_APP_ID', env.appId],
  ];

  const missingKeys = requiredEntries
    .filter(([, value]) => value.length === 0)
    .map(([key]) => key);

  if (missingKeys.length > 0) {
    return {
      isConfigured: false,
      missingKeys,
      options: null,
      databaseId: env.databaseId,
      functionsRegion: env.functionsRegion,
      useEmulators: env.useEmulators,
    };
  }

  return {
    isConfigured: true,
    missingKeys: [],
    options: {
      apiKey: env.apiKey,
      authDomain: env.authDomain,
      projectId: env.projectId,
      storageBucket: env.storageBucket || undefined,
      messagingSenderId: env.messagingSenderId || undefined,
      appId: env.appId,
      measurementId: env.measurementId,
    },
    databaseId: env.databaseId,
    functionsRegion: env.functionsRegion,
    useEmulators: env.useEmulators,
  };
}

export function isFirebaseConfigured(): boolean {
  return getFirebaseConfigurationStatus().isConfigured;
}
