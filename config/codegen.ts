
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../theater/.redwood/schema.graphql",
  generates: {
    "./types/datakit/graphql.d.ts": {
      plugins: ["typescript"]
    },
    "./config/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
