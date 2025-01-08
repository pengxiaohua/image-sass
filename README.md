This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

- clone

```bash
git clone https://github.com/pengxiaohua/image-sass

cd image-sass
```

- install

```bash
pnpm install
```

- Start

创建 `.env` 或者 `.env.local`，在 [Github Developer Setting](https://github.com/settings/developers) 中，新建一个 OAuth app，然后复制 GITHUB_ID 和 GITHUB_SECRET 到 `.env` 或 `.env.local` 中：

```bash
GITHUB_ID=xxxxx
GITHUB_SECRET=xxxxxx
```

- run

```bash
pnpm dev
```

## Technology

- 编程语言：TypeScript 5.x + JavaScript
- 前端框架：Nextjs 15.x
- 状态管理：Zustand
- Tailwind CSS：Tailwindcss
- HTTP 工具：Axios
- 数据库：PostgreSQL
- Git Hook 工具：husky + lint-staged
- 代码规范：EditorConfig + Prettier + ESLint + Airbnb JavaScript Style Guide
- 提交规范：Commitizen + Commitlint

## Tools

- Docker Desktop
- BeeKeeper Studio

## Drizzle

```bash
npx drizzle-kit push

npx drizzle-kit studio
```
