import { type AxiosResponse } from 'axios';

export type ApiResponse<Data> = Promise<
  Data extends void
    ? ApiResponseGeneric<Data>
    : AxiosResponse<ApiResponseGeneric<Data>>
>;

export type ApiPaginationResponse<Data> = Promise<
  Data extends void
    ? ApiPaginationResponseGeneric<Data>
    : AxiosResponse<ApiPaginationResponseGeneric<Data>>
>;

export interface ApiResponseGeneric<T> {
  data: T;
  error_code: number;
  message: string;
  success: boolean;
}

export type ApiPaginationResponseGeneric<
  Results,
  ThumbData = unknown,
> = ApiResponseGeneric<{
  pagination: {
    current_page: number;
    per_page: number;
    total_pages: number;
  };
  results: Results;
  thumb_data: ThumbData;
}>;

export interface ApiPaginationParams {
  limit: number;
  page: number;
}
