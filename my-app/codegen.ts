
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://0.0.0.0:5000/graphql",
  documents: ["src/**/*.graphql","src/**/**/*.graphql"],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: []
    }
  }
};

export default config;
