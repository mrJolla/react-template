import axios, { AxiosRequestHeaders } from 'axios';

import { API } from '../constants/api';

export type ApiRequest = {
  url: string;
  postData?: Record<string, unknown>;
  headerList?: AxiosRequestHeaders;
  type?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
};

export const Api = axios.create({
  baseURL: API.url,
  timeout: API.timeout,
});

export const apiRequest = async ({
  type = 'GET',
  url,
  postData,
  headerList,
}: ApiRequest) => {
  switch (type) {
    case 'GET':
      return await Api.get(url, { headers: headerList }).then((r) => r.data);

    case 'POST':
      return await Api.post(url, postData, { headers: headerList }).then(
        (r) => r.data
      );

    case 'PATCH':
      return await Api.patch(url, postData, { headers: headerList }).then(
        (r) => r.data
      );

    case 'DELETE':
      return await Api.delete(url, { headers: headerList }).then((r) => r.data);

    default:
      throw new Error(
        'Unknown request type. Must match to: "GET", "POST", "PATCH" or "DELETE"'
      );
  }
};
