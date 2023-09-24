import { axiosInstance } from './config';

import { ApiResponseGeneric } from '~/types/api';
import { AuthResponse } from '~/types/auth';

export const AuthApi = {
  // login: (data: LoginFormFields): ApiResponse<AuthResponse> =>
  //   axiosInstance.post('/auth/login', data),
  // logout: () => axiosInstance.delete('/auth/logout'),
  refresh: (refreshToken: string) =>
    axiosInstance.post<ApiResponseGeneric<AuthResponse>>(
      '/auth/refresh',
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    ),
  // registration: (data: RegistrationFormFields): ApiResponse<AuthResponse> =>
  //   axiosInstance.post('/auth/register', data),
};
