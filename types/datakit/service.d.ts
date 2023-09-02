import { QueryService } from "./services/queryService";

export type ServiceName = "query"; // | "sync" | "dataset" | "table" | "column" | "assistant";
export type ServiceType = QueryService;

export type Service = {
    name: ServiceName;
}