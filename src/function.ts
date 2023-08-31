import { Auth } from "@datakit-dev/types/auth";
import { FunctionExecution, FunctionResults, FunctionValidation, IFunction } from "@datakit-dev/types/function";

function validate(fn: IFunction): FunctionValidation {
    const fnStr = fn.toString();
    // var parts = fnStr.match(/^\s*function[^(]*\(([^)]*)\)\s*{(.*)}\s*$/);

    // if (parts == null) {
    //     return {
    //         valid: false,
    //         message: `Invalid function: ${fnStr}`,
    //     }
    // }

    return {
        valid: true,
        // fn: `${parts[1].trim().split(/\s*,\s*/)} ${parts[2]}`,
        fn: fnStr,
    }
}

async function execute(auth: Auth, fn: string): Promise<FunctionExecution> {
    console.log("Running function...");
    return {
        id: "123",
    }
}

async function results(auth: Auth, exec: FunctionExecution): Promise<FunctionResults> {
    return {
        id: exec.id,
        results: [
            {
                "id": "1",
                "name": "John Doe",
                "age": 32,
                "address": "123 Main St",
                "city": "New York",
                "state": "NY",
                "zip": "10001"
            },
        ],
    }
}

export async function run(auth: Auth, fn: IFunction): Promise<FunctionResults> {
    const v = validate(fn);
    if (!v.valid || !v.fn) throw new Error(v.message ? v.message : "Invalid function");
    return results(auth, await execute(auth, v.fn))
}
