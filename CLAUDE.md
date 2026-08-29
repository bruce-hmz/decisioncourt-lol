# Project guidance

Before making implementation changes, read these documents in order:

1. [PRD.md](./PRD.md)
2. [SAFETY.md](./SAFETY.md)
3. [DEVELOPMENT_PLAN.md](./DEVELOPMENT_PLAN.md)
4. [TECH_STACK.md](./TECH_STACK.md)
5. [DESIGN.md](./DESIGN.md)
6. [TASKS.md](./TASKS.md)

Gate A must pass before product code is started. If requirements conflict, follow the stricter safety or privacy boundary and record the decision.

## Design System

Always read DESIGN.md before making any visual or UI decisions. All font choices, colors, spacing, interaction states, and aesthetic direction are defined there. Do not deviate without explicit approval and a recorded reason. During UI QA, flag any implementation that does not match DESIGN.md.

## Sensitive content

Never persist, log, trace, analyze, or include in error reports any real user draft, context, generated result, prompt expansion, or message excerpt. Test fixtures must be synthetic or explicitly authorized and de-identified.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
