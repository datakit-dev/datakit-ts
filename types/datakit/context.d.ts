import { Workspace } from "./graphql";

export type FunctionArgs = { [key: string]: any }

export interface Context {
    workspace: Workspace;
    args?: FunctionArgs;
}
