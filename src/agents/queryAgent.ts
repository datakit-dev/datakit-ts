import { AgentName } from "@datakit-dev/types/agent";
import { QueryAgent as IQueryAgent, QueryBody, QueryResponse } from "@datakit-dev/types/agents/queryAgent";
import { Context } from "@datakit-dev/types/context";
import http from "@datakit-dev/types/http"

export class QueryAgent implements IQueryAgent {
    id: string
    name: AgentName = "query"
    ctx: Context
    constructor(ctx: Context, id: string) {
        this.ctx = ctx;
        this.id = id;
    }

    getResults(sql: string): QueryResponse {
        const body: QueryBody = {
            clientType: 'datakit:queryAgent',
            workspaceId: this.ctx.workspaceId,
            sql,
        };
        const payload = JSON.stringify(body);
        const params = {
            headers: {
                Authorization: `Bearer ${this.ctx.auth.token}`,
                'Auth-Provider': 'firebase',
                'Content-Type': 'application/json',
            },
        }
        const response = http.post<"text">(this.ctx.apiUrl, payload, params);
        if (response.status !== 200) {
            throw new Error(`QueryAgent: ${response.status} ${response.status_text}`);
        }
        return JSON.parse(response.body) as QueryResponse;
    }
}