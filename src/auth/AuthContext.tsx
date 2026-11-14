import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { User } from 'firebase/auth';
import { isFirebaseConfigured } from '@/src/lib/firebase';
import {
  AuthContextValue,
  AuthStatus,
  AuthenticatedPrincipal,
  GatewaySignInPayload,
} from '@/src/types';
import {
  authenticateWithGateway,
  resolvePrincipalFromFirebaseUser,
  signOutFromSession,
  subscribeToAuthSession,
} from './authService';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const firebaseReady = isFirebaseConfigured();

  const [status, setStatus] = useState<AuthStatus>(
    firebaseReady ? AuthStatus.INITIALIZING : AuthStatus.UNCONFIGURED
  );
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);
  const [principal, setPrincipal] = useState<AuthenticatedPrincipal | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!firebaseReady) {
      setStatus(AuthStatus.UNCONFIGURED);
      setFirebaseUser(null);
      setPrincipal(null);
      return;
    }

    const unsubscribe = subscribeToAuthSession(async (user) => {
      if (!user) {
        setFirebaseUser(null);
        setPrincipal(null);
        setStatus(AuthStatus.UNAUTHENTICATED);
        return;
      }

      try {
        const resolved = await resolvePrincipalFromFirebaseUser(user);
        setFirebaseUser(user);
        setPrincipal(resolved);
        setErrorMessage(null);
        setStatus(AuthStatus.AUTHENTICATED);
      } catch (err) {
        setFirebaseUser(null);
        setPrincipal(null);
        setErrorMessage(
          err instanceof Error ? err.message : 'Unable to verify authentication session.'
        );
        setStatus(AuthStatus.ERROR);
      }
    });

    return () => unsubscribe();
  }, [firebaseReady]);

  const signInWithGateway = useCallback(async (payload: GatewaySignInPayload) => {
    setErrorMessage(null);
    const resolved = await authenticateWithGateway(payload);
    setPrincipal(resolved);
    setStatus(AuthStatus.AUTHENTICATED);
  }, []);

  const signOut = useCallback(async () => {
    await signOutFromSession();
    setFirebaseUser(null);
    setPrincipal(null);
    setStatus(firebaseReady ? AuthStatus.UNAUTHENTICATED : AuthStatus.UNCONFIGURED);
  }, [firebaseReady]);

  const refreshClaims = useCallback(async () => {
    if (!firebaseUser) {
      return;
    }
    const resolved = await resolvePrincipalFromFirebaseUser(firebaseUser, true);
    setPrincipal(resolved);
  }, [firebaseUser]);

  const value = useMemo<AuthContextValue>(
    () => ({
      status,
      firebaseReady,
      firebaseUser,
      principal,
      errorMessage,
      signInWithGateway,
      signOut,
      refreshClaims,
    }),
    [
      status,
      firebaseReady,
      firebaseUser,
      principal,
      errorMessage,
      signInWithGateway,
      signOut,
      refreshClaims,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }
  return context;
}
