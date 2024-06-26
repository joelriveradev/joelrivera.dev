import type { CodegenConfig } from '@graphql-codegen/cli'
import { config } from 'dotenv'

config()

const codegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_CMS_URL,
  generates: {
    'src/lib/types/generated/': {
      preset: 'client',
      plugins: []
    },
    'src/lib/types/generated/graphql.schema.json': {
      plugins: ['introspection']
    }
  }
} satisfies CodegenConfig

export default codegenConfig
