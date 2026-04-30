# Handoff — kovaserve-docs concepts authoring

Updated: 2026-04-30

## Where the work stands

Concept pages — all `[x]` in `TOC.md` § 3 except the four still-to-come blocks listed below.

**Just shipped (commits e9abfaa, 4a8abcf, d393428 on `main`, pushed):**

- *Cost* — `cost-model`, `pricing-snapshots`, `cost-per-completed-run` (last is positioning voice).
- *Tenancy* — `tenancy`, `organizations`, `projects`, `environments`, `keys`.
- *Events* — `events/index` (overview), `event-envelope`, and ten per-stream pages under `events/` (`execution`, `state`, `routing`, `policy`, `budget`, `checkpoint`, `runtime`, `context-engineering`, `memory`, `sub-run`).

`npm run types:check` was green at handoff. Site auto-deploys from `main`.

## What the next session should pick up

In TOC order under § 3 Concepts:

1. **Layered model** (4 pages, very top of § 3) — `layered-model`, `execution-substrate`, `control-plane`, `runtime-wedge`. Reference voice. Source: Blueprint Part 2 + Part 4 + §5.1 + Part 6.
2. **Product modes** (4 pages) — `byo-runtime`, `managed-runtime`, `managed-cloud`, `private-deployment`. Reference voice. Source: Blueprint Part 9.
3. **Runtime / Layer 3** (9 pages) — `runtime-architecture`, `runtime-execution-semantics`, `workers`, `sandboxes`, `tool-invocations`, `workspaces`, `workspace-artifacts`, `runtime-local-state`, `runtime-observability`. Reference voice. Source: Blueprint Part 6.
4. **Managed-agent SKUs** (4 pages) — `managed-agents`, `coderuns`, `opsruns`, `docruns`. **Positioning voice** (matches `cost-per-completed-run.mdx`). Source: positioning brief §10–§11.

After all four blocks ship, § 3 Concepts is closed and the next surface is § 2 Quickstart (positioning voice — six pages).

## Conventions you must keep matching

These are decided by the existing pages — do not redebate them.

- Frontmatter: `title` + one-sentence `description`.
- IDs in JSON examples: bare 26-char Crockford ULIDs (`01J8X9Y2Z3K4M5N6P7Q8R9S0T1`). Sessions only: `ses_<24hex>`. Cost values: 4-decimal-digit strings (`"0.0420"`).
- Tenancy IDs in new pages: `organization_id`, `project_id`, `environment_id`, `key_id`. Some pre-existing pages still use `tenant_id` — leave those; in new pages prefer `organization_id`. (`identity-and-ids.mdx` is the established reference.)
- ASCII diagrams in code fences — Fumadocs renders them. No Mermaid.
- Tables for enums and field listings, not bullet lists.
- Status enums upper-case (`OPEN`, `RUNNING`, `SUCCEEDED`).
- Every concept page ends with `## See also` linking to related concept pages and the relevant API path.
- Internal links: `/docs/concepts/...`, `/docs/api/...` — no trailing `.mdx`.

## Voice rule (binding)

- Reference / concept / API / SDK / CLI pages → blueprint vocabulary.
- Customer-facing pages (Quickstart, Pricing, migration guides, the SKU concept pages, `cost-per-completed-run`) → positioning brief vocabulary.
- Never mix on a single page. The TOC marks "(positioning voice)" on the customer-facing entries.

## The non-negotiables

1. **Read both source documents in full before writing any new page.** Every session, every time.
   - `D:\Dev\kova\kova-v1\docs\architecture\KovaServe_Blueprint.md`
   - `D:\Dev\kova\kova_serve_product_positioning_brief.md`
2. **Finished-product voice.** No "not yet shipped", "deferred", "v1 deviation", "coming soon", "scaffolding". The full banned-phrase list is in `kovaserve-docs/CLAUDE.md`. The blueprint is the development target; code converges to docs, not the other way.
3. **One topic per page.** A concept page covers exactly one entity, one state machine, or one taxonomy. The exception is overview pages explicitly named as overviews (`tenancy`, `memory`, `events/index`).
4. **Write only the pages explicitly requested.** Don't pre-create stubs for referenced-but-unwritten targets. Broken internal links are acceptable until the linked page is asked for.
5. **Atomic commits, push immediately.** One commit per coherent block (cost / tenancy / events were three commits, not twenty). The site auto-deploys from `main`.

## Process per page

1. Read blueprint + positioning end-to-end.
2. Open `TOC.md`, find the next `[ ]` under Concepts in order. If ambiguous, ask before writing.
3. Read 1–2 adjacent shipped pages to match conventions exactly. Good references: `policy-scopes.mdx`, `admission.mdx`, `cached-tokens.mdx` for reference voice; `cost-per-completed-run.mdx` for positioning voice.
4. For concrete shapes (field names, enums, JSON wire format) consult `kova-v1/kovaserve/src/kovaserve/schemas/*.py` and the relevant ADR under `kova-v1/docs/adr/`. Where the blueprint is abstract and the code is silent, pick a clean shape consistent with adjacent shipped pages and commit to it as canon.
5. Write the page.
6. Update `content/docs/concepts/meta.json` (or the relevant subdirectory `meta.json`) so the page appears in the sidebar in the right position.
7. Flip `TOC.md` `[ ]` → `[x]`.
8. `npm run types:check` if you touched `lib/`, `app/`, frontmatter shape, or any `meta.json`. (Pure MDX additions usually don't need it.)
9. Commit + push. Reply to the user under five lines.

## Known broken internal links (intentional — do NOT pre-create)

These are referenced from already-shipped pages and remain dangling until explicitly requested:

- API surface: many `[ ] api/*` pages in TOC § 5 are referenced from concept `## See also` blocks. Leave them broken.
- `/docs/concepts/managed-agents` — referenced from `cost-per-completed-run.mdx`. It's in the SKU block above; ship when that block is requested.
- `/docs/concepts/managed-cloud`, `/docs/concepts/private-deployment` — Product Modes block.
- `/docs/concepts/runtime-architecture` etc. — Runtime / Layer 3 block.

## Files to know

| File | Why |
|---|---|
| `kovaserve-docs/CLAUDE.md` | Binding workflow + banned phrases. Read first. |
| `kovaserve-docs/TOC.md` | Living roadmap — the only planning surface. |
| `kovaserve-docs/content/docs/concepts/meta.json` | Sidebar order for top-level concepts. |
| `kovaserve-docs/content/docs/concepts/events/meta.json` | Sidebar order for the `events/` subtree. |
| `kova-v1/docs/architecture/KovaServe_Blueprint.md` | Source of truth for what the product is. |
| `kova_serve_product_positioning_brief.md` | Customer-facing language. |

## What not to do

- Don't author API, SDK, CLI, Quickstart, Cookbook, Pricing, or Models pages until § 3 Concepts is closed.
- Don't introduce new dependencies in `package.json` without explicit approval.
- Don't open long summaries to the user — the project owner strongly dislikes them. Five lines max at end of turn.
- Don't fix the lingering `tenant_id` vs `organization_id` inconsistency on already-shipped pages without being asked. New pages use `organization_id`; existing pages stay as-is.
