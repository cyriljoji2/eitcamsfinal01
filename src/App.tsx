import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider, ProtectedRoute } from '@/src/auth';
import { PORTAL_MANIFESTS } from '@/src/features';
import { LoginGatewayPage } from '@/src/pages/auth/LoginGatewayPage';
import { NotFoundPage } from '@/src/pages/errors/NotFoundPage';
import { UnauthorizedPage } from '@/src/pages/errors/UnauthorizedPage';
import { PortalPlaceholderPage } from '@/src/pages/portals/PortalPlaceholderPage';
import { HomePage } from '@/src/pages/public/HomePage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public entry & 3 login gateways (Student, Employee, Parent/Guardian) */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login/:gateway" element={<LoginGatewayPage />} />

          {/* Protected routes for all 10 institutional portals */}
          {PORTAL_MANIFESTS.map((portal) => (
            <Route
              key={portal.id}
              path={`${portal.basePath}/*`}
              element={
                <ProtectedRoute
                  portalId={portal.id}
                  requiredGateway={portal.gateway}
                  allowedRoles={portal.allowedRoles}
                >
                  <PortalPlaceholderPage manifest={portal} />
                </ProtectedRoute>
              }
            />
          ))}

          {/* Error & fallback routes */}
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
