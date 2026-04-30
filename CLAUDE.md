# CLAUDE.md — kovaserve-docs

Binding instructions for any Claude session working in this directory. Read this fully before doing any docs work.

## What this directory is

`kovaserve-docs` is the canonical documentation site for KovaServe — `docs.kovaserve.com`. Stack: Next.js 16 + Fumadocs + Tailwind 4. Content lives in `content/docs/` as MDX. Sidebar order is set by `meta.json` files. The site auto-deploys from `main` to Vercel.

This is the *third* surface in the workspace, distinct from `kovaserve-web` (marketing site) and `kova-v1` (implementation). Do not put marketing copy or implementation here.

## The three sources of truth

Every docs page must reconcile three perspectives. Treat them as a triangle, not a hierarchy.

| Source | Lives at | Represents |
|---|---|---|
| **Blueprint** | `D:\Dev\kova\kova-v1\docs\architecture\KovaServe_Blueprint.md` | **Intent.** What we want to build. The canonical layered model, entity vocabulary, state machines, event taxonomy, API families. |
| **Codebase** | `D:\Dev\kova\kova-v1\` (esp. `kovaserve/src/kovaserve/schemas/`, `gateway/app.py`, `alembic/versions/`, `docs/adr/`, `docs/vertical-slices/SLICE-STATUS.md`) | **Reality.** What has actually been built and shipped. The wire format, real field names, real state values, real ID formats, real defaults. |
| **Positioning** | `D:\Dev\kova\kova_serve_product_positioning_brief.md` | **Framing.** How the product is marketed — category, ICP, value props, customer-facing vocabulary, what we deliberately are *not*. |

**The relationship rule:** when blueprint and codebase disagree, **codebase wins for what to document as shipped**, blueprint becomes "future / not yet shipped" and is flagged honestly. Positioning never overrides either — it dictates voice on customer-facing pages, not facts.

## How to write a new doc page (the workflow)

When the user says *"write the next concept"* / *"write a guide for X"* / *"document endpoint Y"*, do this in order:

### 1. Pick the target

Open `D:\Dev\kova\kovaserve-docs\TOC.md`. It is the living roadmap. Find the next `[ ]` page in the section the user named (or the next unstarted page in the natural sequence). If the user is ambiguous, propose the next one and confirm before writing.

### 2. Research at full depth

For every concept, API, or guide page, gather grounded material from **all three sources** before writing a word:

- **Blueprint:** read every paragraph that mentions the entity / endpoint / behavior. Pull state machines, event names, responsibility lists, cross-references. Quote it.
- **Codebase:** spawn an `Explore` subagent (or do it yourself if scope is narrow) and search `kova-v1/` exhaustively:
  - Pydantic schema (`kovaserve/src/kovaserve/schemas/*.py`) — every field, default, validator, enum value
  - Service / store layer — operations, invariants, error types
  - Gateway routes (`kovaserve/src/kovaserve/gateway/app.py`) — exact path, method, request shape, response shape, status codes
  - Alembic migrations — DDL, indexes, FK behavior
  - ADRs (`kova-v1/docs/adr/system/` and `modules/`) — load-bearing decisions
  - Slice docs (`kova-v1/docs/vertical-slices/VERTICAL-SLICES-V2.md`, `SLICE-STATUS.md`) — what shipped in which slice, documented branches, performance numbers
  - User stories (`kova-v1/docs/user-stories/`) — story-level acceptance criteria
  - Tests / eval scenarios — concrete examples of expected behavior
- **Positioning:** read the relevant section of the brief; capture the customer-facing framing for headline/intro paragraphs on customer-facing pages.

The Explore-agent prompt template that worked for Sessions: ask for **five sections** — implementation, blueprint quotes, positioning quotes, cross-references (PRD / slices / stories), and an explicit "open questions / gaps" section listing every place the three sources disagree. Demand `file:line` citations for every implementation claim.

### 3. Identify the gaps honestly

Before writing, build a short mental list of:

- Fields / states / endpoints that the blueprint promises but the code does not yet implement.
- ID formats or defaults where the code deviates from the spec (e.g., Sessions use `ses_<24hex>` not ULID — intentional v1 carry-over per `SLICE-STATUS.md`).
- Behaviors documented as "implementation choice" branches in slice close-outs.

These must be **disclosed in the page**, not silently elided. The convention: a "What X is not" section, or inline "not yet shipped — see [forward link]" notes, or a explicit "v1 deviation" call-out.

### 4. Pick the voice

Set on the SURFACE-OUTLINE.md voice rule (binding):

- **Reference / concept / API / SDK / CLI pages** → blueprint vocabulary. Say `Run`, `Step`, `ModelCall`, `ContextManifest`, `PolicyScope`, `StateHandle`, `Organization → Project → Environment → Key`.
- **Customer-facing pages** (Quickstart, migration guides, Pricing, homepage) → positioning vocabulary. Say "managed agents", "completed agent runs", "Agentic Execution Cloud", "durable runs", "cost per completed run".
- **Never mix the two on a single page.**

The TOC notes voice on each guide where it matters.

### 5. Write the page

Conventions baked into the existing pages — match them:

- Frontmatter: `title` and `description`. Description should be a single sentence that lands the page in the sidebar / search results.
- Open with a one-paragraph definition that names the entity / endpoint and what it is for.
- Use Mermaid-free ASCII diagrams for hierarchies and state machines (the existing pages do this). Fumadocs renders them in a code block.
- Tables for enum/field listings. Don't bullet-list a 10-row enum.
- For API endpoints: method + path, then `Authorization: Bearer ks_...`, then a JSON request example, then a JSON response example, then status-code semantics.
- IDs in examples: bare 26-char Crockford ULIDs (e.g., `01J8X9Y2Z3K4M5N6P7Q8R9S0T1`) — **except** Session IDs, which are `ses_<24hex>` (e.g., `ses_a7f3c2b8d4e1f0925a1b6c3d`).
- Cost values: decimal strings with 4 fractional digits (`"0.0420"`), per ADR-025.
- Status enums: upper-case (`OPEN`, `RUNNING`, `SUCCEEDED`).
- End every concept page with a `## See also` block linking to related concept pages and the relevant API/SDK pages.
- Internal links: `/docs/concepts/...`, `/docs/api/...`, `/docs/sdk/...`, `/docs/cli/...`. Trailing `.mdx` is implicit — do not write it.

### 6. Update the TOC

Open `TOC.md` and flip the page's status marker:
- `[ ]` → `[~]` if drafted but you want a review pass
- `[ ]` → `[x]` if shipped
- Add new pages to the TOC if research surfaced an entity that needs its own page.

### 7. Commit and push

This repo is a thin docs site. Commit each meaningful page (or tightly related set) atomically and push immediately. Do not batch many unrelated pages into one commit.

```bash
cd D:/Dev/kova/kovaserve-docs
git add content/docs/<path> TOC.md
git commit -m "$(cat <<'EOF'
add <Concept> concept page

<one-paragraph why-not-what; cite slice numbers / ADRs that
ground the page; list any honest disclosures of blueprint-vs-code
deviations the page makes>

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
EOF
)" && git push
```

Always push. Local-only commits are not the convention here. The site auto-deploys from `main`.

### 8. Report back briefly

End-of-turn note: which page shipped, which honest-disclosure flags it carries, and an offer to do the next page in the section. The user has a strong preference against long summaries — keep it under five lines.

## Hard rules (don't break these)

1. **Do not document features that are not in the codebase as if they exist.** Blueprint claims are aspirational unless the code agrees. When in doubt, search the code.
2. **Do not invent field names, paths, or status codes.** Read the gateway and schemas. Cite `file:line` in your research dump even if the citation never appears in the page.
3. **Do not mix voices on a single page.** Reference pages stay in blueprint vocabulary; customer-facing pages stay in positioning vocabulary.
4. **Do not auto-create root-level CLAUDE-style planning docs.** The TOC is the planning surface. Use it.
5. **Do not skip the push step.** The site is auto-deployed; an unpushed page is invisible.
6. **Do not use vendor-tied language.** No mentions of Stainless / Speakeasy / Fern / Mintlify / Algolia / Tremor — see SURFACE-OUTLINE Constraint 2.
7. **Do not introduce new dependencies into `package.json`** without explicit user approval. Fumadocs + Tailwind covers the surface.

## Build verification (when you are uncertain)

```bash
cd D:/Dev/kova/kovaserve-docs
npm run types:check   # fumadocs-mdx + next typegen + tsc --noEmit
npm run build         # only when significant structural changes
```

For pure MDX additions (text, links, tables, code blocks), the typecheck is rarely necessary. Run it only after touching `lib/`, `app/`, `components/`, frontmatter schemas, or `meta.json`.

## Companion documents you must know

- `D:\Dev\kova\SURFACE-OUTLINE.md` — IA, voice rules, cross-cutting decisions, what is in/out of v1
- `D:\Dev\kova\kovaserve-docs\TOC.md` — living roadmap; flip statuses as you go
- `D:\Dev\kova\kova-v1\CLAUDE.md` — binding rules for the implementation; read before citing code
- `D:\Dev\kova\kova-v1\docs\vertical-slices\SLICE-STATUS.md` — live slice progress; the truth about what is shipped vs. in flight

If the user says *"write the next concept"* and gives no other detail, your default is: open TOC.md, pick the next `[ ]` under Concepts, run the workflow above, ship it.
