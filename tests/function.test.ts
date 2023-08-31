import { Context } from "@datakit-dev/types/context";
import {run} from "../src/function";

test('results', async () => {
    const {results} = await run({ token: "123" }, function(ctx: Context) {
        const query = ctx.getAgent("query");
        if (!query) throw new Error("No agent");
        const results = query.getResults("select * from users");
        console.log(results);
    });
    expect(results.length).toBe(1);
})