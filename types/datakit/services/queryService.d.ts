import { JSONArray } from ".."
import { Service } from "../service"

export type QueryRequest = {
    // clientType: string // Should be set by runtime
    // workspaceId: string  // Should be set by runtime
    // json?: string // Just support sql for now
    // userId?: string // Should be set by runtime
    // clientId? string // Should be set by runtime
    sql?: string
    jobId?: string
    pageToken?: string    
}

export type QueryMetaNextQuery = {
    jobId?: string
    pageToken?: string
}

export type QueryField = {
    name: string
    type: string
    mode: string
    ordinalPos: number
}

export type QueryResponseMeta = {
    selectFields?: QueryField[]
    totalRows?: number
    nextQuery?: QueryMetaNextQuery
}

export type QueryResponse = {
    error: boolean
    message?: string
    meta?: QueryResponseMeta
    rows?: JSONArray
}

export type SqlQuery = {
    id: string
    sql: string
    selectFields?: QueryField[]
    columns?: Column[]
}

export interface QueryService extends Service {
    getResults(query: QueryRequest): QueryResponse
}