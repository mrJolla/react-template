import { createEffect, createEvent, createStore, sample } from 'effector';

import { queryClient } from '~/index';
import { removeAuthCookie, setAuthCookie } from '~/utils/auth-cookies';

export interface AuthStore {
  access_token: string;
  refresh_token: string;
}

export const login = createEvent<AuthStore>();
export const logout = createEvent();

const loginFx = createEffect((data: AuthStore) => {
  setAuthCookie('access_token', data.access_token);
  setAuthCookie('refresh_token', data.refresh_token);
});

const logoutFx = createEffect(async () => {
  removeAuthCookie(['access_token', 'refresh_token']);

  queryClient.clear();
});

export const $auth = createStore<Partial<AuthStore>>({})
  .on(login, (_, payload) => payload)
  .reset(logout);

sample({
  clock: [logout],
  target: [logoutFx],
});

sample({
  clock: [login],
  target: [loginFx],
});
