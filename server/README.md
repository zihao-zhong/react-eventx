## 初次启动

先去 client 目录打包，把 build 文件下的内容复制到 server/static 下

```shell
# client/
npm run build
mv ./build/* ../server/static/

# server/
cd ../server
pm2 start ./src/index.js --name react-eventX
```

## 后续启动

```shell
cd server/
npm run start-server
```