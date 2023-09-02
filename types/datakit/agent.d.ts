import { Context } from "./context"
import { SlackAgent } from "./agents/slackAgent"

export type AgentName = "slack"
export type AgentType = SlackAgent

export interface Agent {
    id: string
    name: AgentName
}