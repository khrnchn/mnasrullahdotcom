# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a monorepo using Bun workspaces built with the Better-T-Stack template. It follows a modern fullstack architecture with TanStack Start (SSR framework), React, PostgreSQL, and Better-Auth for authentication.

### Monorepo Structure
- `apps/web/` - Main fullstack application using TanStack Start with SSR
- `packages/auth/` - Authentication configuration using Better-Auth
- `packages/db/` - Database layer with Drizzle ORM and PostgreSQL

### Key Technologies
- **Framework**: TanStack Start (React SSR framework with TanStack Router)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Better-Auth
- **Styling**: TailwindCSS v4 with shadcn/ui components
- **Package Manager**: Bun
- **Build Tool**: Vite

## Development Commands

### General Development
```bash
# Install dependencies
bun install

# Start all applications in development mode
bun dev

# Start specific applications
bun dev:web    # Web app on port 3001
bun dev:native # Native app (if present)

# Build all applications
bun build

# Type checking across all packages
bun check-types
```

### Database Operations
```bash
# Start PostgreSQL container
bun db:start

# Push schema changes to database
bun db:push

# Open Drizzle Studio (database GUI)
bun db:studio

# Generate migration files
bun db:generate

# Run migrations
bun db:migrate

# Stop database
bun db:stop

# Stop and remove database container
bun db:down
```

### Package-Specific Commands
```bash
# From root, run commands for specific packages
bun run --filter web dev        # Web app development
bun run --filter @mnasrullahdotcom/db db:push  # Database operations
```

## Database Setup

1. Ensure `.env` file exists in `apps/web/` with `DATABASE_URL`
2. Start PostgreSQL: `bun db:start`
3. Push schema: `bun db:push`
4. Access database studio: `bun db:studio`

The database configuration reads environment variables from `apps/web/.env` (defined in `packages/db/drizzle.config.ts`).

## File Structure Notes

### Web Application (`apps/web/`)
- `src/routes/` - TanStack Router routes (file-based routing)
- `src/components/` - React components
- `src/functions/` - Server-side functions
- `src/middleware/` - Request middleware
- `src/router.tsx` - Router configuration
- `vite.config.ts` - Vite configuration with TanStack Start plugin

### Database Package (`packages/db/`)
- `src/schema/` - Drizzle schema definitions
- `src/index.ts` - Database exports and utilities
- `src/migrations/` - Generated migration files
- `drizzle.config.ts` - Drizzle Kit configuration

### Auth Package (`packages/auth/`)
- `src/index.ts` - Better-Auth configuration
- Uses database models from `@mnasrullahdotcom/db`

## Important Configuration

- **Workspaces**: Defined in root `package.json` with catalog dependencies
- **TypeScript**: Shared configuration in `tsconfig.base.json`
- **Environment**: Database reads from `apps/web/.env`
- **Git Hooks**: Husky configured with lint-staged
- **Port**: Web app runs on port 3001 by default

## Development Workflow

1. Make changes to schema in `packages/db/src/schema/`
2. Run `bun db:push` to update database
3. Development server auto-reloads with file changes
4. Use `bun db:studio` to inspect database
5. Build and type check before commits with `bun build` and `bun check-types`