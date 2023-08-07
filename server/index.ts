import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static'

const port : number = 8081;

const app = new Elysia().use(staticPlugin());


app.listen(port);