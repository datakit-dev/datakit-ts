import { bytes, JSONValue } from '.'

export type Protocol = 'HTTP/1.0' | 'HTTP/1.1' | 'HTTP/2.0';
export type CipherSuite =
    | 'TLS_RSA_WITH_RC4_128_SHA'
    | 'TLS_RSA_WITH_3DES_EDE_CBC_SHA'
    | 'TLS_RSA_WITH_AES_128_CBC_SHA'
    | 'TLS_RSA_WITH_AES_128_CBC_SHA256'
    | 'TLS_RSA_WITH_AES_256_CBC_SHA'
    | 'TLS_RSA_WITH_AES_128_GCM_SHA256'
    | 'TLS_RSA_WITH_AES_256_GCM_SHA384'
    | 'TLS_ECDHE_RSA_WITH_RC4_128_SHA'
    | 'TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA'
    | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA'
    | 'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256'
    | 'TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA'
    | 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256'
    | 'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384'
    | 'TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305'
    | 'TLS_ECDHE_ECDSA_WITH_RC4_128_SHA'
    | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA'
    | 'TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256'
    | 'TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA'
    | 'TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256'
    | 'TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384'
    | 'TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305'
    | 'TLS_AES_128_GCM_SHA256'
    | 'TLS_AES_256_GCM_SHA384'
    | 'TLS_CHACHA20_POLY1305_SHA256';

export type AuthMethod = 'basic' | 'digest' | 'ntlm';
export type ResponseType = 'binary' | 'none' | 'text';
export type ParamsCookieValue = string | { value?: string; replace?: boolean };
export type RequestBody = string | StructuredRequestBody | ArrayBuffer;
export interface StructuredRequestBody {
    [name: string]: string | FileData;
}
export type ResponseBody = string | bytes | null;
export type RefinedResponseBody<RT extends ResponseType | undefined> = RT extends 'binary'
    ? bytes
    : RT extends 'none'
    ? null
    : RT extends 'text'
    ? string
    : RT extends undefined
    ? string | null
    : never;

export interface Params {
    auth?: AuthMethod;
    compression?: string;
    cookies?: { [name: string]: ParamsCookieValue };
    headers?: { [name: string]: string };
    jar?: CookieJar;
    redirects?: number;
    responseType?: ResponseType;
    tags?: { [name: string]: string };
    timeout?: string | number;
    responseCallback?: ExpectedStatusesCallback;
}

export interface RefinedParams<RT extends ResponseType | undefined> extends Params {
    responseType?: RT;
}

export interface Response {
    body: ResponseBody;
    cookies: { [name: string]: ResponseCookie[] };
    error: string;
    error_code: number;
    headers: { [name: string]: string };
    ocsp: {
        produced_at: number;
        this_update: number;
        next_update: number;
        revocation_reason: string;
        revoked_at: number;
        status: string;
    };
    proto: Protocol;
    remote_ip: string;
    remote_port: number;
    request: {
        body: string;
        cookies: { [name: string]: RequestCookie[] };
        headers: { [name: string]: string[] };
        method: string;
        url: string;
    };
    status: number;
    status_text: string;
    timings: {
        blocked: number;
        connecting: number;
        tls_handshaking: number;
        sending: number;
        waiting: number;
        receiving: number;
        duration: number;
    };
    tls_cipher_suite: CipherSuite;
    tls_version: string;
    url: string;
    json(selector?: string): JSONValue;
    submitForm<RT extends ResponseType | undefined>(args?: {
        formSelector?: string;
        fields?: { [name: string]: string };
        submitSelector?: string;
        params?: RefinedParams<RT> | null;
    }): RefinedResponse<RT>;
}

export interface RefinedResponse<RT extends ResponseType | undefined> extends Response {
    body: RefinedResponseBody<RT>;
}

export interface RequestCookie {
    name: string;
    value: string;
    replace: boolean;
}

export interface ResponseCookie {
    name: string;
    value: string;
    domain: string;
    path: string;
    httpOnly: boolean;
    secure: boolean;
    maxAge: number;
    expires: number;
}
export abstract class FileData {
    protected __brand: never;
    data: string | bytes | ArrayBuffer;
    filename?: string;
    content_type?: string;
}

export class CookieJar {
    protected __brand: never;
    cookiesForURL(url: string): CookieJarCookies;
    set(url: string, name: string, value: string, options?: CookieOptions | null): void;
    clear(url: string): void;
    delete(url: string, name: string): void;
}

export interface CookieJarCookies {
    [name: string]: string[];
}

export interface CookieOptions {
    domain?: string;
    path?: string;
    expires?: string;
    max_age?: number;
    secure?: boolean;
    http_only?: boolean;
}

interface ExpectedStatusesCallback {
    [n: string]: never;
}

export interface ExpectedStatusesObject {
    min: number;
    max: number;
}

interface HttpURL {
    __brand: 'http-url';
}

declare namespace http {
    function del<RT extends ResponseType | undefined>(
        url: string | HttpURL,
        body?: RequestBody | null,
        params?: RefinedParams<RT> | null,
    ): RefinedResponse<RT>;
    function head<RT extends ResponseType | undefined>(
        url: string | HttpURL,
        params?: RefinedParams<RT> | null,
    ): RefinedResponse<RT>;
    function get<RT extends ResponseType | undefined>(
        url: string | HttpURL,
        params?: RefinedParams<RT> | null,
    ): RefinedResponse<RT>;
    function options<RT extends ResponseType | undefined>(
        url: string | HttpURL,
        body?: RequestBody | null,
        params?: RefinedParams<RT> | null,
    ): RefinedResponse<RT>;
    function patch<RT extends ResponseType | undefined>(
        url: string | HttpURL,
        body?: RequestBody | null,
        params?: RefinedParams<RT> | null,
    ): RefinedResponse<RT>;
    function post<RT extends ResponseType | undefined>(
        url: string | HttpURL,
        body?: RequestBody | null,
        params?: RefinedParams<RT> | null,
    ): RefinedResponse<RT>;
    function put<RT extends ResponseType | undefined>(
        url: string | HttpURL,
        body?: RequestBody | null,
        params?: RefinedParams<RT> | null,
    ): RefinedResponse<RT>;
    function request<RT extends ResponseType | undefined>(
        method: string,
        url: string | HttpURL,
        body?: RequestBody | null,
        params?: RefinedParams<RT> | null,
    ): RefinedResponse<RT>;
    function url(strings: TemplateStringsArray, ...args: Array<string | number | boolean>): HttpURL;
    function file(data: string | bytes | ArrayBuffer, filename?: string, contentType?: string): FileData;
    function cookieJar(): CookieJar;
    function expectedStatuses(...param: Array<number | ExpectedStatusesObject>): ExpectedStatusesCallback;
    function setResponseCallback(responseCallback: ExpectedStatusesCallback): void;
}
export default http;