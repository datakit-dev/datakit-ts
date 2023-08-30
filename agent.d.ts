import { Context } from "./context"
import { QueryAgent } from "./agents/queryAgent"

export type AgentName = "query"
export type AgentType = QueryAgent
export interface Agent {
    id: string
    name: AgentName
    ctx: Context
}