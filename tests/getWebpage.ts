import http from 'datakit/http';

function getWebpage() {
    const url = 'https://www.google.com';
    const resp = http.get(url);
    console.log(JSON.stringify(resp, null, 2));
}

export default getWebpage;