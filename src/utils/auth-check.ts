import { AuthApi } from '~/api/auth';
import { AuthStore, login, logout } from '~/store/auth';
import { AuthResponse } from '~/types/auth';
import { getAuthCookie } from '~/utils/auth-cookies';
import { isJwtTokenValid } from '~/utils/jwt';

export const authCheck = async (): Promise<AuthStore | undefined> => {
  const result: Partial<AuthStore> = {
    access_token: getAuthCookie('access_token'),
    refresh_token: getAuthCookie('refresh_token'),
  };

  if (!isJwtTokenValid(result.refresh_token)) {
    logout();

    return;
  }

  if (!isJwtTokenValid(result.access_token)) {
    const authRes = await AuthApi.refresh(result.refresh_token as string);

    result.access_token = authRes.data.data.access_token;
  }

  login(result as AuthStore);

  return result as AuthResponse;
};
