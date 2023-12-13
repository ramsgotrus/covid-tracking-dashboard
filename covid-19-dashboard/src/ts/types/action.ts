import { AxiosError } from 'axios';
export type Action<T> =
  | { type: "loading"; error: undefined }
  | { type: "success"; data: T }
  | { type: "error"; error: AxiosError };