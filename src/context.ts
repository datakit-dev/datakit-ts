import { AgentType, AgentName } from "@datakit-dev/types/agent";
import { AgentParam, ContextParams, Context as IContext } from "@datakit-dev/types/context";
import { Auth } from "@datakit-dev/types/auth";
import { Event } from "@datakit-dev/types/event";
import { QueryAgent } from "./agents/queryAgent";

export class Context implements IContext {
  apiUrl: string;
  workspaceId: string;
  auth: Auth;
  event: Event;
  agents: Array<AgentParam>;

  constructor(params: ContextParams) {
    this.apiUrl = params.apiUrl;
    this.workspaceId = params.workspaceId;
    this.auth = params.auth;
    this.event = params.event;
    this.agents = params.agents;
  }

  getAgent(name: AgentName): AgentType | undefined {
    for (const agent of this.agents) {
      if (agent.name !== name) {
        continue;
      }

      switch (agent.name) {
        case "query":
          return new QueryAgent(this, agent.id);
      }
    }
    return;
  };
}
