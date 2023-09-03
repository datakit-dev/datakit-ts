export type HttpMethod = 'HEAD' | 'GET' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface Params {
    headers: { [key: string]: string };
}

export interface URL {
    scheme: string;
    opaque?: string;
    user?: Userinfo;
    host: string;
    path: string;
    rawPath?: string;
    forceQuery?: boolean;
    rawQuery?: string;
    fragment?: string;
}

export interface Userinfo {
    username: string;
    password?: string;
}

export interface Request {
    method: HttpMethod;
    url: string;
    body: string;
    headers: { [key: string]: string };
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
    json(): any;
    html(): any;
}

declare namespace http {
    function head(url: string | URL, params?: Params): Response;
    function get(url: string | URL, params?: Params): Response;
    function options(url: string | URL, body: any, params?: Params): Response;
    function post(url: string | URL, body: any, params?: Params): Response;
    function put(url: string | URL, body: any, params?: Params): Response;
    function patch(url: string | URL, body: any, params?: Params): Response;
    function del(url: string | URL, body: any, params?: Params): Response;
    function request(method: HttpMethod, url: string | URL, body?: any, params?: Params): Response;
}

export default http;
