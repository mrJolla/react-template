import dayjs from 'dayjs';

export interface TokenGeneric {
  exp: number;
  type: 'access' | 'refresh';
}

export const parseJwt = (token: string): TokenGeneric | null => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
};

export const isJwtTokenValid = (token?: string): boolean => {
  if (!token) return false;

  const decodedToken = parseJwt(token);

  if (decodedToken === null) return false;

  return decodedToken.exp > dayjs().unix();
};
