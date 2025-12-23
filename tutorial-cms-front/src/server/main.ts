import { createHonoApp } from './common/app'

const app = createHonoApp().basePath('/api')

app.get('/', (c) => c.text('hello /'))

const routes = app.route('posts', app)
type AppType = typeof routes

export { app, type AppType }
