import { AgentName, AgentType } from "./agent"
import { Auth } from "./auth"
import { Event } from "./event"

export type AgentParam = {
    id: string;
    name: AgentName;
}

export type ContextParams = {
    apiUrl: string;
    workspaceId: string;
    auth: Auth;
    event: Event;
    agents: Array<AgentParam>;
}

export interface Context {
    apiUrl: string;
    workspaceId: string;
    auth: Auth;
    event: Event;
    agents: Array<AgentParam>;
    getAgent(name: AgentName): AgentType | undefined;
}
