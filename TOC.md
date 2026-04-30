# KovaServe Docs — Table of Contents (working)

Living roadmap for `docs.kovaserve.com`. Source of structure for `content/docs/` and the Fumadocs sidebar (`meta.json`). Mirrors the IA in `D:\Dev\kova\SURFACE-OUTLINE.md` §3, with one entry per planned MDX page.

**Status legend:** `[x]` published · `[~]` drafted, in review · `[ ]` not started · `[—]` deferred past v1.

**Voice rule (binding):** customer-facing pages use positioning-brief vocabulary ("managed agents", "completed agent runs", "Agentic Execution Cloud"); reference/concept pages use blueprint vocabulary ("control plane", "Run/Step/ModelCall", "ContextManifest", "PolicyScope", "StateHandle"). Never mixed inside a single page.

---

## 1. Top of tree

- [x] `index.mdx` — Introduction (positioning voice; the three layers)

## 2. Quickstart

- [ ] `quickstart/index.mdx` — <10 lines to first response; curl + Python tabs
- [ ] `quickstart/install.mdx` — install `kovaserve` SDK + `kova` CLI; env vars
- [ ] `quickstart/first-run.mdx` — first managed run end-to-end (Run → Steps → completion)

## 3. Concepts (reference voice — blueprint vocabulary)

- [ ] `concepts/index.mdx` — Concepts overview + canonical entity map
- [ ] `concepts/runs-steps-model-calls.mdx` — Run / Step / ModelCall hierarchy + state machines
- [ ] `concepts/sessions.mdx` — Sessions and continuity; current_manifest_id; session lifecycle
- [ ] `concepts/checkpoints.mdx` — Checkpoints, StateHandles, logical-context-first resume
- [ ] `concepts/budgets-and-policy.mdx` — Budget vs ContextBudget; PolicyScope; admission decisions
- [ ] `concepts/cost-model.mdx` — Gross / net / cache savings; cost headers; cached_tokens
- [ ] `concepts/tenancy.mdx` — Organization → Project → Environment → Key
- [ ] `concepts/context-engineering.mdx` — ContextManifest, segments, artifacts, compaction lineage (boundary contract)

## 4. Guides (positioning voice for migration pages; reference voice for ops pages)

- [ ] `guides/migrating-from-openai.mdx` — "Change two lines"
- [ ] `guides/migrating-from-openrouter.mdx` — Private deployment + run hierarchy
- [ ] `guides/migrating-from-langsmith.mdx` — Replacing trace UX
- [ ] `guides/multi-step-runs.mdx` — Authoring multi-step agent runs
- [ ] `guides/per-run-budgets.mdx` — Setting per-run budgets and reading hard-stop signals
- [ ] `guides/reading-run-timelines.mdx` — Inspecting timelines (waterfall / tree / events / JSON)
- [ ] `guides/provisioning-keys.mdx` — Provisioning scoped keys for end users
- [ ] `guides/self-hosting-kubernetes.mdx` — k3s + Helm install (ADR-016 path)
- [ ] `guides/opentelemetry-export.mdx` — Exporting OTel traces and metrics

## 5. API Reference (hand-authored MDX; curl + Python tabs)

- [ ] `api/index.mdx` — Overview, base URL, auth, errors, IDs, idempotency
- [ ] `api/authentication.mdx` — Bearer keys; scope hierarchy
- [ ] `api/errors.mdx` — OpenAI-shape error envelope (ADR-002)
- [ ] `api/pagination.mdx` — Cursor pagination (`before` / `after` / `limit`)
- [ ] `api/cost-headers.mdx` — `X-KS-Cost-Cents`, cache savings, streaming cost
- [ ] `api/inference/chat-completions.mdx` — `POST /v1/chat/completions` + `kovaserve` extension envelope
- [ ] `api/inference/models.mdx` — `GET /v1/models`
- [ ] `api/runs/create.mdx` — `POST /v1/ks/runs`
- [ ] `api/runs/get.mdx` — `GET /v1/ks/runs/{id}` (embedded steps + model_calls)
- [ ] `api/runs/steps.mdx` — `GET /v1/ks/runs/{id}/steps`
- [ ] `api/runs/timeline.mdx` — `GET /v1/ks/runs/{id}/timeline`
- [ ] `api/runs/update.mdx` — `PATCH /v1/ks/runs/{id}`
- [ ] `api/sessions/create.mdx` — `POST /v1/ks/sessions`
- [ ] `api/sessions/get.mdx` — `GET /v1/ks/sessions/{id}`
- [ ] `api/budgets/create.mdx` — `POST /v1/ks/budgets`
- [ ] `api/budgets/get.mdx` — `GET /v1/ks/budgets/{id}`
- [ ] `api/metering/usage.mdx` — `GET /v1/ks/metering/usage`
- [ ] `api/metering/export.mdx` — `GET /v1/ks/metering/export`
- [ ] `api/keys/index.mdx` — Key CRUD (gap-blocked; placeholder until shipped)
- [ ] `api/cluster/nodes.mdx` — Operator: `/v1/ks/nodes`
- [ ] `api/cluster/cache-lookup.mdx` — Operator: `/v1/ks/cache/lookup`
- [ ] `api/cluster/routing-plan.mdx` — Operator: `/v1/ks/routing/plan`
- [ ] `api/health.mdx` — `/health`, `/metrics`

## 6. SDK Reference (Python `kovaserve`)

- [ ] `sdk/index.mdx` — Install, configure, `KOVASERVE_API_KEY`
- [ ] `sdk/openai-compat.mdx` — Drop-in OpenAI replacement; `extra_body=`
- [ ] `sdk/decorators.mdx` — `@kova.run`, `@kova.session`, `@kova.budget`
- [ ] `sdk/extension-envelope.mdx` — `kovaserve` extension field surface
- [ ] `sdk/errors.mdx` — Exception hierarchy
- [ ] `sdk/auto-generated/` — `pdoc` output (build-time)

## 7. CLI Reference (`kova`)

- [ ] `cli/index.mdx` — Install, auth, global flags
- [ ] `cli/runs.mdx` — `kova runs list/get/tail/cancel`
- [ ] `cli/sessions.mdx` — `kova sessions list/get`
- [ ] `cli/budgets.mdx` — `kova budgets create/get`
- [ ] `cli/usage.mdx` — `kova usage query/export`
- [ ] `cli/keys.mdx` — `kova keys create/rotate/revoke`

## 8. Cookbook

- [ ] `cookbook/coding-agent.mdx` — CodeRuns reference recipe
- [ ] `cookbook/document-review.mdx` — DocRuns reference recipe
- [ ] `cookbook/tool-loops-with-budget-kill.mdx` — Tool-use loop with budget hard-stop
- [—] `cookbook/branching-from-checkpoint.mdx` — Deferred until branch ships

## 9. Models

- [ ] `models/index.mdx` — Deployable models, capability matrix, context windows

## 10. Pricing

- [ ] `pricing/index.mdx` — Rate cards + cost-per-completed-run examples (positioning voice)

## 11. Changelog

- [ ] `changelog/index.mdx` — Dated API changes, additive vs. breaking

## 12. Status

- [ ] `status/index.mdx` — Public status page link / embedded health

---

## Out of v1 scope (not in nav)

Tracked for context — do not author until upstream APIs ship.

- Layer 3 runtime (agent / tool / sandbox / workspace) docs beyond CodeRuns cookbook
- Webhooks management
- Batch API
- TypeScript SDK
- Hosted billing / invoices
- Real-time per-token streaming cost
- Multi-region replication
- Custom inference engines beyond vLLM
- Autoscaling

---

## Cross-cutting authoring rules

1. **Wire format is canon.** Every API page reflects shipped responses in `kova-v1/kovaserve/src/kovaserve/gateway/app.py`. No aspirational fields.
2. **IDs are bare 26-char Crockford ULIDs**, no prefixes.
3. **Tenant nouns** in user-facing copy: Organization → Project → Environment → Key. "Tenant" stays internal.
4. **"Run" wins** over thread / conversation / task / workflow / job in user-facing copy.
5. **Code examples**: tabbed by language (curl + Python minimum). CI-test against a real cluster.
6. **No vendor lock-in references** — no Stainless / Speakeasy / Fern / Mintlify / Algolia.
7. **Every concept page** ends with a "See also" block linking to the relevant API and SDK pages.
8. **Every API page** opens with a one-line plain-English description, then method + path, then auth scope, then full request/response schema.
