import { Context } from "./context.js"

export type FunctionValidation = {
    valid: boolean,
    message?: string,
    fn?: string,
}

export type FunctionExecution = {
    id: string,
}

export type FunctionResults = {
    id: string,
    results: Array<any>,
}

export type IFunction = (ctx: Context) => void;
