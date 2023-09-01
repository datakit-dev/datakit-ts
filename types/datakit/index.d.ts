import './http';
import './context';
import './auth';
import './agent';

export type bytes = number[];
export interface JSONArray extends Array<JSONValue> {}
export interface JSONObject {
    [key: string]: JSONValue;
}
export type JSONValue = null | boolean | number | string | JSONArray | JSONObject;
