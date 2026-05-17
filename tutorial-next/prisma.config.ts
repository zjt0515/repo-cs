import { defineConfig, env } from 'prisma/config'
import 'dotenv/config'

export default defineConfig({
  schema: 'src/db/schema',
  datasource: {
    url: env('DATABASE_URL'),
  },
})
