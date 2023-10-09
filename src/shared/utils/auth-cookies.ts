import Cookies from 'js-cookie';

import { AuthStore } from '~/shared/types/models/auth.ts';

type AuthCookie = keyof AuthStore;

export const getAuthCookie = (token: AuthCookie) => Cookies.get(token);

export const setAuthCookie = (
  token: AuthCookie,
  value: string,
  options?: Record<string, unknown>,
) => Cookies.set(token, value, { expires: 30, secure: true, ...options });

export const removeAuthCookie = (tokens: AuthCookie[]) => {
  for (const token of tokens) Cookies.remove(token);
};
