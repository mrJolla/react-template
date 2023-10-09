export type ApiResponse<Data> = Promise<{
  data: Data;
  error_code: number;
  message: string;
  success: boolean;
}>;

export type ApiPaginationResponse<Results, ThumbData = unknown> = ApiResponse<{
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
