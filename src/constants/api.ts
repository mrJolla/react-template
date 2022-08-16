const API_URL = process.env.NODE_ENV === 'production' ? 'https://api.kinofan.com' : 'http://fake.backend';

export const API = {
  timeout: 60_000,
  url: API_URL,
};
