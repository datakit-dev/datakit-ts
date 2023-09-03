import { SqlQuery, SqlQueryResult, SqlQueryResultMetaNextQuery } from "./graphql";

declare function sql(literals: TemplateStringsArray, ...params: string[]): SqlQuery & {
    execute(nextPage?: SqlQueryResultMetaNextQuery): SqlQueryResult;
    toString(): string;
};

export default sql;