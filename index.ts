import express from 'express';
import { blogRoutes } from './controllers/blog/blog.routes';
import { weatherRoute } from './controllers/weather/weather.routes';
import { logging } from './middlewares/logging';
import { noPoweredBy } from './middlewares/noPoweredBy';

const app = express();

app.use(logging);
app.use(noPoweredBy);
app.use('/weather', weatherRoute());
app.use('/blog', blogRoutes());
app.use('/', (req, res) => res.send(`<ul><li><a href="/weather">Weather</a></li><li><a href="/blog">Blog</a></li></ul>`));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));

