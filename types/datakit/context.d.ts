import { Service, ServiceName, ServiceType } from "./agent"
import { Agent, AgentName, AgentType } from "./agent"

export interface Context {
    // workspaceId: string; // Do we need to expose this? Set by runtime
    services: Array<Service>;
    getService(name: ServiceName): ServiceType | undefined;
    agents: Array<Agent>;
    getAgent(name: AgentName): AgentType | undefined;
}
