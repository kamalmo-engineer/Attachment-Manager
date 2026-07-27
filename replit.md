# FIKR Journey

FIKR Journey is an interactive product story that teaches children smart money habits through a guided island adventure.

## Run & Operate

- `pnpm --filter @workspace/fikr-journey run dev` — run the main React/Vite web app
- `pnpm --filter @workspace/api-server run dev` — run the Express API server
- `pnpm --filter @workspace/mockup-sandbox run dev` — run the component preview server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- The Replit-managed `DATABASE_URL` is available for the API/database packages.
- The configured Replit workflows are the recommended way to run the web app, API, and component preview together.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/fikr-journey` — the user-facing FIKR Journey React/Vite app
- `artifacts/api-server` — the Express API and health endpoint at `/api/healthz`
- `artifacts/mockup-sandbox` — the isolated component preview server
- `lib/db` — PostgreSQL/Drizzle database client and schema
- `lib/api-spec` — OpenAPI source and generated API contracts
- `lib/api-client-react` — generated React Query API hooks
- `attached_assets` — imported visual references and source assets

## Architecture decisions

- Keep the imported pnpm workspace and package boundaries intact.
- Use the artifact-owned workflows so Replit supplies `PORT`, `BASE_PATH`, and proxy routing.
- Keep the FIKR Journey experience client-rendered and static; the API remains a separate service.

## Product

- A seven-scene guided journey follows Younis through saving, making a purchase decision, earning a reward, and viewing progress from a parent's perspective.
- Scene navigation supports the top jump bar, interactive hotspots, keyboard arrows, and reset behavior.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Use pnpm rather than npm or yarn; dependencies are defined by the workspace lockfile.
- Do not run a root-level `pnpm dev`; start the artifact-owned workflows instead.
- The API server expects its full `/api` base path and exposes `/api/healthz` for health checks.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
