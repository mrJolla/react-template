import axios from 'axios';
import type { AxiosRequestHeaders } from 'axios';

import { API } from '../constants/api';

export type ApiRequest = {
  url: string;
  headerList?: AxiosRequestHeaders;
  postData?: Record<string, unknown>;
  type?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
};

export const Api = axios.create({
  baseURL: API.url,
  timeout: API.timeout,
});

export const apiRequest = async ({ type = 'GET', url, postData, headerList }: ApiRequest) => {
  switch (type) {
    case 'GET': {
      return Api.get(url, { headers: headerList }).then((r) => r.data);
    }

    case 'POST': {
      return Api.post(url, postData, { headers: headerList }).then((r) => r.data);
    }

    case 'PATCH': {
      return Api.patch(url, postData, { headers: headerList }).then((r) => r.data);
    }

    case 'DELETE': {
      return Api.delete(url, { headers: headerList }).then((r) => r.data);
    }

    default: {
      throw new Error('Unknown request type. Must match to: "GET", "POST", "PATCH" or "DELETE"');
    }
  }
};
