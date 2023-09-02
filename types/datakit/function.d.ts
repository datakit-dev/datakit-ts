import { Context } from "./context.js"
import { Event } from "./event.js"

export type FunctionArgValue = string | number | boolean | null
export type FunctionArgs = { [key: string]: FunctionArgValue | Array<FunctionArgValue> }

export type FunctionProps = {
    ctx: Context,
    event?: Event,
    args?: FunctionArgs,
}
