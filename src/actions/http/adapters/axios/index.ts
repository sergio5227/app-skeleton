import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../http.adapters';
import { store } from '../../../../store';

interface Options {
    baseUrl: string;
    params: Record<string, string>;
}

export class AxiosAdapter implements HttpAdapter {

    private readonly axiosInstance: AxiosInstance;

    constructor(options: Options) {

        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params,
        });

        this.axiosInstance.interceptors.request.use(
            (config) => {
                const state = store.getState();
                const token = state?.app?.user?.token || '';
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                config.headers.agentFrom = 'mobile';
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
    }

    async get<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            const { data } = await this.axiosInstance.get<T>(url, options);
            return data;
        } catch (error) {
            console.log(error, url)
            throw new Error(`Error fetching get: ${url} `);
        }
    }

    async post<T>(url: string, body: object, options?: Record<string, unknown>): Promise<T> {
        try {
            const { data } = await this.axiosInstance.post(url, body, options);
            return data;
        } catch (error) {
            console.log(error, url)
            throw new Error(`Error fetching post: ${url} `);
        }
    }

    async put<T>(url: string, body: object, options?: Record<string, unknown>): Promise<T> {
        try {
            const { data } = await this.axiosInstance.put(url, body, options);
            return data;
        } catch (error) {
            console.log(error, url)
            throw new Error(`Error fetching put: ${url} `);
        }
    }

    async delete<T>(url: string, options?: Record<string, unknown> | undefined): Promise<T> {
        try {
            const { data } = await this.axiosInstance.delete<T>(url, options);
            return data;
        } catch (error) {
            console.log(error, url)
            throw new Error(`Error fetching delete: ${url} `);
        }
    }

}