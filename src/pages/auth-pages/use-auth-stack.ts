import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTES } from '~/constants/routes';
import { getAuthCookie } from '~/utils/auth-cookies';
import { isJwtTokenValid } from '~/utils/jwt';

export const useAuthStack = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = getAuthCookie('access_token');
    const refreshToken = getAuthCookie('refresh_token');

    if (
      accessToken &&
      refreshToken &&
      isJwtTokenValid(accessToken) &&
      isJwtTokenValid(refreshToken)
    ) {
      navigate(ROUTES.home);
    }
  }, []);
};
