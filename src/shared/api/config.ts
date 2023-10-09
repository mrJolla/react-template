import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { API_URL } from '~/shared/constants/config.ts';
import { login, logout } from '~/shared/models/auth.ts';
import { AuthResponse } from '~/shared/types/api/auth.ts';
import { ApiResponse } from '~/shared/types/api/config.ts';
import { getAuthCookie } from '~/shared/utils/auth-cookies.ts';
import { showToast } from '~/shared/utils/show-toast.tsx';

export const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const apiRequest = async (options: AxiosRequestConfig) => {
  try {
    const { data } = await axiosInstance.request(options);

    return data;
  } catch (error) {
    const e = error as AxiosError;

    showToast({
      message: e.message || 'Ошибка API запроса',
    });
  }
};

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
      error.response.config.url !== '/auth/refresh' &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.post<Awaited<ApiResponse<AuthResponse>>>(
          `${API_URL}/auth/refresh`,
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
        showToast({
          message: error.message,
        });
      }
    }

    throw error;
  },
);
