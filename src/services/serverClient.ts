import { httpsCallable } from 'firebase/functions';
import { getFirebaseFunctions } from '@/src/lib/firebase';

export interface ServerOperationResult<T = unknown> {
  ok: boolean;
  data?: T;
  errorCode?: string;
  message?: string;
}

/**
 * Typed client boundary for calling server-side Cloud Functions.
 * Fails closed when Firebase Functions are not yet configured.
 */
export async function invokeServerOperation<TRequest, TResponse>(
  functionName: string,
  payload: TRequest
): Promise<ServerOperationResult<TResponse>> {
  const functionsInstance = getFirebaseFunctions();
  if (!functionsInstance) {
    return {
      ok: false,
      errorCode: 'FIREBASE_NOT_CONFIGURED',
      message: 'Firebase backend is not configured in this Phase 1 foundation.',
    };
  }

  const callable = httpsCallable<TRequest, ServerOperationResult<TResponse>>(
    functionsInstance,
    functionName
  );
  const response = await callable(payload);
  return response.data;
}
