import axios, { AxiosError } from 'axios';

import { API } from '../constants/api';

import { login, logout } from '~/store/auth';
import { ApiResponseGeneric } from '~/types/api';
import { AuthResponse } from '~/types/auth';
import { getAuthCookie } from '~/utils/auth-cookies';
import { showAlert } from '~/utils/show-alert';

export const axiosInstance = axios.create({
  baseURL: API.url,
  timeout: API.timeout,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAuthCookie('access_token');

  if (!config.headers.Authorization && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosError['config'] & {
      _isRetry: boolean;
    };

    if (
      error.response?.status === 401 &&
      error.config &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.post<ApiResponseGeneric<AuthResponse>>(
          `${API.url}/auth/refresh`,
          null,
          {
            headers: {
              Authorization: `Bearer ${getAuthCookie('refresh_token')}`,
            },
          },
        );

        login(response.data.data);

        originalRequest.headers.Authorization = `Bearer ${response.data.data.access_token}`;

        return axiosInstance.request(originalRequest);
      } catch {
        logout();
      }
    } else {
      if (error.message !== 'canceled') {
        showAlert({
          message: error.message,
        });
      }
    }

    throw error;
  },
);
