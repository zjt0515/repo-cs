import { Hono } from 'hono';
import { prettyJSON } from 'hono/pretty-json';

const app = new Hono().basePath('/api');
app.use(prettyJSON());

app.get('/', (c) => c.text('CS-Lineup API'));
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404));
// const routes = app.route('/posts', postApi);
// type AppType = typeof routes;
// export { app, type AppType };