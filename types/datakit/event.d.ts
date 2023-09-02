import { AgentType } from "./agent";
import { ServiceType } from "./service";

export type EventData = {
    [key: string]: any;
}

export type Event = {
    id: string;
    name: string;
    data: EventData;
    sourceType: AgentType | ServiceType;
    sourceId: string;
}