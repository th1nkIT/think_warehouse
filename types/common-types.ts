export interface IAPIResponseInfo {
  error_message: string | null;
  status: number;
}

export interface IPaginationParams {
  total_page?: number;
  total_data?: number;
  message?: string;
  name?: string;
  limit?: string;
  current_page?: string;
}
