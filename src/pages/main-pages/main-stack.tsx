import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '~/constants/routes';
import { Loader } from '~/ui/loader/loader';

export const MainStack = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route element={<Loader />} path={ROUTES.home} />
    </Routes>
  </Suspense>
);
