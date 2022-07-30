const Koa = require('koa');
const path = require('path');
const KoaMount = require('koa-mount');
const KoaStatic = require('koa-static');
const KoaProxies = require('koa-proxies');

const app = new Koa();

// 加载静态服务
app.use(KoaStatic(path.join(__dirname, '../static')));

// 静态数据中接口请求转发
app.use(
  KoaMount(
    '/v2',
    KoaProxies('/', {
      target: 'https://api.coincap.io/v2',
      secure: true,
      changeOrigin: true,
    }),
  ),
);

app.listen(5555, () => {
  console.info('Static Server is listening on: http://localhost:5555');
});