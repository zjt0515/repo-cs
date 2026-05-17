/* eslint-disable unused-imports/no-unused-vars */
import { swaggerUI } from '@hono/swagger-ui'
import { openAPIRouteHandler } from 'hono-openapi'
import { prettyJSON } from 'hono/pretty-json'

import { createHonoApp } from './common/app'
import { postApi } from './post/routes'

const app = createHonoApp().basePath('/api')

app.use(prettyJSON())
app.get('/', (c) => c.text('3R Blog API'))
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

// routes
const routes = app.route('/posts', postApi)

// openapi
app.get(
  '/openapi',
  openAPIRouteHandler(app, {
    documentation: {
      info: {
        version: 'v1',
        title: 'Hono API',
        description: 'Greeting API',
      },
      servers: [{ url: 'https://localhost:3000', description: 'Local Server' }],
    },
  }),
)

// swagger
app.get('/docs', swaggerUI({ url: '/api/openapi' }))

type AppType = typeof routes
export { app, type AppType }
