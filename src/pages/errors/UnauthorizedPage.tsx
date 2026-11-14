import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/shared';
import { PublicLayout } from '@/src/layouts';

export function UnauthorizedPage() {
  return (
    <PublicLayout>
      <div className="mx-auto max-w-lg py-10">
        <Card>
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              Your verified account does not hold the required permissions for this portal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              to="/"
              className="inline-flex items-center rounded-[var(--eit-radius-md)] bg-[var(--eit-color-brand-primary)] px-4 py-2 text-sm font-medium text-[var(--eit-color-text-inverse)]"
            >
              Return to Home
            </Link>
          </CardContent>
        </Card>
      </div>
    </PublicLayout>
  );
}
