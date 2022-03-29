FROM node:16-alpine as builder

WORKDIR /workspace
COPY . .

RUN npm install -g pnpm && pnpm install && pnpm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /workspace/apps/client/dist .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
