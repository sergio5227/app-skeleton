import { AxiosAdapter } from "./axios";

export const postsFetcher = new AxiosAdapter({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  params: { }
});