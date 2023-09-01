import http from 'datakit/http';

function getWebpage() {
    const url = 'https://www.google.com';
    return http.get(url);
}

export default getWebpage;