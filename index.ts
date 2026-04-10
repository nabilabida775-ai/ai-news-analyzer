import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.get('/', serveStatic({ path: './public/index.html' }));
app.use('/*', serveStatic({ root: './public' }));

app.get('/multi_analyze', (c) => {
  return c.json([
    { brain: '🧠 العقل الأول', result: 'تحليل إيجابي للأخبار', value: 85 },
    { brain: '🧠 العقل الثاني', result: 'توقع محايد', value: 65 },
    { brain: '🧠 العقل الثالث', result: 'تحليل حذر', value: 55 },
    { brain: '🧠 العقل الرابع', result: 'توقع متفائل', value: 75 },
    { brain: '🧠 العقل الخامس', result: 'تحليل متوازن', value: 70 }
  ]);
});

app.get('/map_data', (c) => {
  const points = [
    { lat: 51.5074, lon: -0.1278, title: 'أخبار لندن', severity: 'green', link: '#' },
    { lat: 48.8566, lon: 2.3522, title: 'أخبار باريس', severity: 'yellow', link: '#' },
    { lat: 40.7128, lon: -74.0060, title: 'أخبار نيويورك', severity: 'red', link: '#' },
    { lat: 35.6762, lon: 139.6503, title: 'أخبار طوكيو', severity: 'green', link: '#' },
    { lat: 24.4539, lon: 54.3773, title: 'أخبار الإمارات', severity: 'yellow', link: '#' }
  ];
  return c.json(points);
});

export default {
  port: Number(process.env.PORT) || 3000,
  fetch: app.fetch,
};