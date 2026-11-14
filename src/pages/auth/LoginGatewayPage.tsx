import { useState, type FormEvent } from 'react';
import { useParams } from 'react-router-dom';
import {
  isValidLoginGateway,
  PUBLIC_LOGIN_GATEWAYS,
  useAuth,
} from '@/src/auth';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  NoticeBanner,
} from '@/src/components/shared';
import { AuthGatewayLayout } from '@/src/layouts';
import { NotFoundPage } from '@/src/pages/errors/NotFoundPage';

export function LoginGatewayPage() {
  const { gateway } = useParams<{ gateway: string }>();
  const { firebaseReady, signInWithGateway, errorMessage } = useAuth();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  if (!isValidLoginGateway(gateway)) {
    return <NotFoundPage />;
  }

  const config = PUBLIC_LOGIN_GATEWAYS[gateway];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLocalError(null);

    if (!firebaseReady) {
      setLocalError(
        'Firebase Authentication is not configured in Phase 1. No offline or mock login is permitted.'
      );
      return;
    }

    if (!identifier.trim() || !password) {
      setLocalError('Please enter both your identifier and password.');
      return;
    }

    setSubmitting(true);
    try {
      await signInWithGateway({
        gateway: config.id,
        identifier: identifier.trim(),
        password,
      });
    } catch (err) {
      setLocalError(err instanceof Error ? err.message : 'Authentication failed.');
    } finally {
      setSubmitting(false);
    }
  }

  const activeError = localError ?? errorMessage;

  return (
    <AuthGatewayLayout>
      <Card>
        <CardHeader>
          <CardTitle>{config.label}</CardTitle>
          <CardDescription>{config.audienceSummary}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!firebaseReady && (
            <NoticeBanner tone="warning" title="Firebase Not Connected Yet">
              Firebase Authentication is intentionally unconfigured in Phase 1. Live sign-in will
              activate after Firebase project provisioning in a later phase.
            </NoticeBanner>
          )}

          {activeError && (
            <NoticeBanner tone="danger" title="Authentication Error">
              {activeError}
            </NoticeBanner>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Input
              label={config.identifierLabel}
              type="email"
              autoComplete="username"
              placeholder={config.identifierPlaceholder}
              value={identifier}
              onChange={(event) => setIdentifier(event.target.value)}
              disabled={!firebaseReady || submitting}
              required
            />

            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={!firebaseReady || submitting}
              required
            />

            <Button type="submit" fullWidth disabled={!firebaseReady || submitting}>
              {submitting ? 'Signing in...' : `Sign in to ${config.label}`}
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthGatewayLayout>
  );
}
