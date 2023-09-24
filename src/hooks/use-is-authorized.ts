import { useStoreMap } from 'effector-react';

import { $auth } from '~/store/auth';

export const useIsAuthorized = () =>
  useStoreMap($auth, (s) => !!s.access_token && !!s.refresh_token);
