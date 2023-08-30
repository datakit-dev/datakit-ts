import { JSONArray } from "datakit"
import { Agent } from "datakit/agent"

export type QueryBody = {
    clientType: string
    workspaceId: string
    sql?: string
    jobId?: string
    pageToken?: string    
}

export type QueryResponse = {
    rows: JSONArray
}

export interface QueryAgent extends Agent {
    getResults(sql: string): QueryResponse
}