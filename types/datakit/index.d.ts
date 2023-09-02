import './http';
import './event';
import './agent';
import './service';
import './context';

export type bytes = number[];
export interface JSONArray extends Array<JSONValue> {}
export interface JSONObject {
    [key: string]: JSONValue;
}
export type JSONValue = null | boolean | number | string | JSONArray | JSONObject;
