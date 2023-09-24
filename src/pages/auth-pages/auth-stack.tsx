import { Suspense } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from '~/constants/routes';
import { useAuthStack } from '~/pages/auth-pages/use-auth-stack';
import { Loader } from '~/ui/loader/loader';

export const AuthStack = () => {
  useAuthStack();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/*<Route element={<LoginPage />} path={ROUTES.home} />*/}
        <Route element={<Navigate to={ROUTES.home} />} path='*' />
      </Routes>
    </Suspense>
  );
};
