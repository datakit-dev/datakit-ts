export interface Params {
    headers: { [key: string]: string };
}

export interface Request {
    method: string;
    url: string;
    body: string;
    headers: { [key: string]: string[] };
}

export interface Response {
    url: string;
    status: number;
    statusText: string;
    proto: string;
    headers: { [key: string]: string };
    body: string;
    error: string;
    errorCode: number;
    request: Request | null;
}

export type HttpMethod = 'HEAD' | 'GET' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

declare namespace http {
    function head(url: string, params?: Params): Response;
    function get(url: string, params?: Params): Response;
    function options(url: string, body: any, params?: Params): Response;
    function post(url: string, body: any, params?: Params): Response;
    function put(url: string, body: any, params?: Params): Response;
    function patch(url: string, body: any, params?: Params): Response;
    function del(url: string, body: any, params?: Params): Response;
    function request(method: HttpMethod, url: string, body?: any, params?: Params): Response;
}

export default http;
