FROM nginx:latest

MAINTAINER zihzhong

ENV NODE_ENV=production

COPY ./build/ /usr/share/nginx/html/

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080 80

CMD ["nginx", "-g", "daemon off;"]