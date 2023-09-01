export function get(url: string, params?: any): any;

declare namespace http {
    function get(
        url: string,
        params?: any,
    ): any;        
}

export default http;