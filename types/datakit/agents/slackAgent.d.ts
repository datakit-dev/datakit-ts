import { Agent } from '../agent'

export interface SlackAgent extends Agent {
    sendMessage(channel: string, message: string): void
}