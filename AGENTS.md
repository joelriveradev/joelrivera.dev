# AGENTS

This guide is for agentic coding assistants working in this repo.
Keep changes aligned with existing conventions and Next.js app router patterns.

## Repo Overview

- Project: Joel Rivera's personal developer site built with Next.js app router.
- UI: Tailwind CSS v4 + shadcn/ui components.
- Runtime: React 19, TypeScript strict mode.
- Theme: dark-first setup with `next-themes` and CSS variables.

## Commands (Bun preferred)

```bash
# Install
bun install

# Dev server
bun dev

# Production build
bun run build

# Production start
bun start

# Lint
bun run lint
```

### Tests

- No test runner is configured in `package.json`.
- There is no supported single-test command yet.
- If tests are added later, document the single-test command here.

## Linting

- ESLint uses `eslint-config-next` (core web vitals + TypeScript).
- Ignore paths are defined in `eslint.config.mjs`.
- Run `bun run lint` before finishing changes.

## TypeScript

- Strict mode is enabled (`tsconfig.json`).
- `noEmit` is true; rely on Next build for output.
- Use `@/*` path alias for local imports.
- Prefer explicit types for public props and exported APIs.

## Code Style (match file-local patterns)

- Use the existing file’s quote style.
- Semicolons are typically omitted.
- Indentation is 2 spaces.
- Keep lines readable; wrap long JSX props and objects.
- Prefer `const` for values and functions.

## Imports

- Order: external modules, blank line, internal modules.
- Use `@/` alias for project paths.
- Keep React imports only when needed (not required in TSX with Next).

## Components and React

- App router structure under `app/`.
- Use Server Components by default.
- Add `'use client'` only when required (state, effects, browser APIs).
- Use named exports for reusable UI pieces when practical.
- Use `cn` helper for class merging (`lib/utils.ts`).

## Tailwind / Styling

- Prefer Tailwind utility classes for layout and typography.
- Theme tokens are defined in `app/globals.css` via CSS variables.
- Use `text-muted-foreground`, `bg-card`, etc. for semantic colors.
- Avoid inline styles unless necessary.

## File Structure Notes

- Routes, metadata, and static assets live in `app/`.
- Shared components live in `components/`.
- shadcn/ui components live in `components/ui/`.
- Shared utilities live in `lib/`.

## Naming Conventions

- Components: PascalCase.
- Hooks: `useX`.
- Variables: camelCase.
- CSS classes: Tailwind utilities only.

## Error Handling

- Prefer early returns and small render branches.
- Validate external data before rendering.
- Use `rel="noopener noreferrer"` with `target="_blank"` links.

## Accessibility

- Provide `aria-label` for icon-only buttons/links.
- Ensure interactive elements are keyboard accessible.
- Use semantic HTML (header/main/footer/section).

## Performance

- Keep the main page lightweight (minimal JS).
- Avoid adding heavy dependencies for small features.
- Prefer static content unless dynamic behavior is required.

## Assets and Metadata

- Metadata is defined in `app/layout.tsx`.
- Icons and OpenGraph assets live in `app/`.

## Next.js Config Notes

- Next config is in `next.config.ts`.
- `experimental.esmExternals` is enabled.

## Formatting and Tooling

- Use the .prettierrc file for formatting.
- Keep consistent formatting within the file you are editing.

## Cursor / Copilot Rules

- No `.cursor/rules`, `.cursorrules`, or `.github/copilot-instructions.md` files exist.
- If such rules are added later, mirror them here.
