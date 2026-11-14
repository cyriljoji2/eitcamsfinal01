export interface FirebaseClientEnvConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
  databaseId?: string;
  functionsRegion: string;
  useEmulators: boolean;
}

function readEnvString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function getFirebaseClientEnv(): FirebaseClientEnvConfig {
  return {
    apiKey: readEnvString(import.meta.env.VITE_FIREBASE_API_KEY),
    authDomain: readEnvString(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
    projectId: readEnvString(import.meta.env.VITE_FIREBASE_PROJECT_ID),
    storageBucket: readEnvString(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
    messagingSenderId: readEnvString(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
    appId: readEnvString(import.meta.env.VITE_FIREBASE_APP_ID),
    measurementId: readEnvString(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) || undefined,
    databaseId: readEnvString(import.meta.env.VITE_FIREBASE_DATABASE_ID) || undefined,
    functionsRegion: readEnvString(import.meta.env.VITE_FIREBASE_FUNCTIONS_REGION) || 'asia-southeast1',
    useEmulators: readEnvString(import.meta.env.VITE_FIREBASE_USE_EMULATORS) === 'true',
  };
}
