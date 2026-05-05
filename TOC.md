# KovaServe Docs — Table of Contents (working)

Living roadmap for `docs.kovaserve.com`. Source of structure for `content/docs/` and the Fumadocs sidebar (`meta.json`). One entry per planned MDX page. Coverage target: every canonical entity, state machine, event stream, product mode, and SKU defined in `D:\Dev\kova\kova-v1\docs\architecture\KovaServe_Blueprint.md` and `D:\Dev\kova\kova_serve_product_positioning_brief.md`.

**Status legend:** `[x]` published · `[~]` drafted, in review · `[ ]` not started · `[—]` out of scope.

**Voice rule (binding):** customer-facing pages use positioning-brief vocabulary ("managed agents", "completed agent runs", "Agentic Execution Cloud"); reference/concept pages use blueprint vocabulary ("control plane", "Run/Step/ModelCall", "ContextManifest", "PolicyScope", "StateHandle"). Never mixed inside a single page.

**One-topic-per-page rule (binding):** each page covers exactly one entity, endpoint, command, decorator, recipe, or state machine. Bundle only when the bundle *is* the topic — overviews, hierarchy maps, taxonomies. If a page would need more than one H1-level concept to make sense, split it.

**Folder-grouping rule (binding):** every page lives inside a topic folder, never as a flat file at a section root. The only exception is a section's own `index.mdx`. If a topic only has one or two pages today, still place them in a folder so future siblings have a home.

**Finished-product rule (binding):** these docs describe KovaServe as a complete, polished product. The blueprint is the source of truth for what the product is; pages reflect the blueprint as built. No hedging, no "not yet shipped", no shipped-vs-deferred breakdowns, no implementation-status disclosures anywhere in `content/docs/`. Implementation status lives in `kova-v1/docs/vertical-slices/SLICE-STATUS.md` and (later) a separate roadmap surface — never in the docs site. The docs are the development target.

**No-internal-language rule (binding):** user-facing pages never leak internal program language. Banned anywhere in `content/docs/`: the words "slice", "pass", "ADR", "blueprint", "positioning brief", "vertical slice"; document filename citations (`SLICE-STATUS.md`, `KovaServe_Blueprint.md`, `kova_serve_product_positioning_brief.md`, `VERTICAL-SLICES-V2.md`, `CLAUDE.md`); identifier citations (`ADR-NNN`, `Slice X.Y`, `Pass N`, `§N.M`, `KI-NNN`, `VS-N`); engineering-process phrasing ("in this slice", "this pass", "per ADR-NNN", "see the blueprint"). Concept and API pages may still cite the canonical entity vocabulary (Run, Step, ContextManifest, etc.) and external standards (RFCs, OpenAI-compatibility callouts) — those are product, not program. The docs describe the product, not the program building it.

**Doc-writing protocol (binding — applies to every page, every time):**

1. **The product blueprint (`D:\Dev\kova\kova-v1\docs\architecture\KovaServe_Blueprint.md`) is the source of truth.** Scope, behavior, entities, state machines, event taxonomy — all of it comes from the blueprint. Code informs concrete shapes (field names, JSON, enums); positioning sets framing on customer-facing pages. The blueprint wins over the code wherever they disagree.
2. **Nothing is ever written as pending, unimplemented, deferred, partial, or yet-to-be-done.** If it is in the blueprint, it exists in the docs as a finished, shipping feature. Present tense, confident voice, no hedging, no "coming soon", no "v1 deviation", no implementation-status disclosure of any kind. The docs are the target the implementation converges to.
3. **Customer-facing language matches the positioning brief (`D:\Dev\kova\kova_serve_product_positioning_brief.md`) exactly.** "Agentic Execution Cloud", "managed agents", "completed agent runs", "cost per completed run", "CodeRuns / OpsRuns / DocRuns", the ICP framing, the category claim — these are decided. Do not paraphrase them or substitute synonyms on customer-facing surfaces.
4. **Read both documents in full before writing any new page.** Open the product blueprint and the positioning brief end-to-end every time, even when the page is narrow. Partial reads produce drift in vocabulary, scope, and framing. No exceptions.

---

## 1. Top of tree

- [x] `index.mdx` — Introduction (positioning voice; the Agentic Execution Cloud category claim)

## 2. Quickstart   (positioning voice)

- [ ] `quickstart/index.mdx` — <10 lines to a completed managed run
- [ ] `quickstart/install-sdk.mdx` — install the `kovaserve` Python SDK
- [ ] `quickstart/install-cli.mdx` — install the `kova` CLI
- [ ] `quickstart/environment.mdx` — `KOVASERVE_API_KEY`, base URL, env vars
- [ ] `quickstart/first-run.mdx` — first managed run end-to-end (Run → Steps → completion)
- [ ] `quickstart/managed-vs-private.mdx` — managed cloud vs private deployment

## 3. Concepts   (reference voice — blueprint vocabulary)

- [x] `concepts/index.mdx` — Concepts overview + canonical entity map

### Where KovaServe fits   (purpose: orient the reader in their AI stack — nothing more)

- [x] `concepts/layers/index.mdx` — How KovaServe sits between open inference substrate and your agent runtime
- [x] `concepts/layers/execution-substrate.mdx` — Layer 1: the open inference substrate KovaServe runs on (vLLM)
- [x] `concepts/layers/control-plane.mdx` — Layer 2: the KovaServe control plane — runs, sessions, checkpoints, budgets, policy
- [x] `concepts/layers/runtime-wedge.mdx` — Layer 3: the optional KovaServe runtime for coding / terminal / tool-heavy agents

### Run hierarchy

- [x] `concepts/run-hierarchy/runs.mdx` — Run entity
- [x] `concepts/run-hierarchy/steps.mdx` — Step entity
- [x] `concepts/run-hierarchy/step-types.mdx` — canonical step type taxonomy (`MODEL_CALL`, `TOOL_PLAN`, `TOOL_EXECUTE`, `FILE_READ`, `FILE_WRITE`, `PROCESS_START`, `OBSERVE`, `THINK`, `CHECKPOINT`, `PAUSE`, `RESUME`, `BRANCH`, `COMPLETE`, `FAIL`, `COMPACT`)
- [x] `concepts/run-hierarchy/model-calls.mdx` — ModelCall entity
- [x] `concepts/run-hierarchy/run-state-machine.mdx` — 12-state Run FSM (CREATED → … → BRANCHING → COMPLETED/FAILED/CANCELED)
- [x] `concepts/run-hierarchy/step-state-machine.mdx` — Step FSM
- [x] `concepts/run-hierarchy/identity-and-ids.mdx` — ULIDs, Session ID shape, idempotency keys

### Continuity

- [x] `concepts/continuity/sessions.mdx` — Session entity
- [x] `concepts/continuity/session-state-machine.mdx` — `OPEN → IDLE → RESUMABLE → ARCHIVED | EXPIRED`
- [x] `concepts/continuity/current-manifest.mdx` — `current_manifest_id` semantics

### Checkpoints, recovery, branches

- [x] `concepts/recovery/checkpoints.mdx` — Checkpoint entity
- [x] `concepts/recovery/checkpoint-state-machine.mdx` — `REQUESTED → CAPTURING → STORED → VALIDATED → RESTORING → RESTORED`
- [x] `concepts/recovery/state-handles.mdx` — StateHandle (`kv_prefix | context_manifest | checkpoint | artifact_bundle | runtime_state`)
- [x] `concepts/recovery/resume-flow.mdx` — `RECOVERING → RESUMING → RUNNING` (logical-context-first)
- [x] `concepts/recovery/retries.mdx` — runtime retry semantics
- [x] `concepts/recovery/branches.mdx` — Branch concept (`BRANCHING` state)
- [x] `concepts/recovery/branch-flow.mdx` — branching from a checkpoint into a child run

### Context engineering

- [x] `concepts/context/context-manifests.mdx` — ContextManifest (audit anchor)
- [x] `concepts/context/context-segments.mdx` — ContextSegment, `context_type`, `memory_class` (5-value retention-intent label), `parts` wire format
- [x] `concepts/context/context-artifacts.mdx` — ContextArtifact (object-storage)
- [x] `concepts/context/compaction-records.mdx` — CompactionRecord entity
- [x] `concepts/context/compaction-lineage.mdx` — source/output relationships
- [x] `concepts/context/segment-types.mdx` — canonical `context_type` values
- [x] `concepts/context/renderer-versions.mdx` — renderer + tokenizer fingerprinting

### Budgets & Policy

- [x] `concepts/policy/budgets.mdx` — Budget entity
- [x] `concepts/policy/budget-state-machine.mdx` — `ACTIVE → WARNING → DEGRADED_ALLOWED | HARD_STOP → CLOSED`
- [x] `concepts/policy/context-budgets.mdx` — ContextBudget entity, dimensions
- [x] `concepts/policy/context-budget-state-machine.mdx` — ACTIVE / WARN / OFFLOAD_REQUIRED / COMPACT_REQUIRED / DEGRADE / HARD_STOP
- [x] `concepts/policy/policy-scopes.mdx` — PolicyScope hierarchy + enrichment fields
- [x] `concepts/policy/admission.mdx` — admission decision flow

### Routing & cache

- [x] `concepts/routing/kv-cache.mdx` — KV cache fundamentals
- [x] `concepts/routing/manifest-aware-routing.mdx` — Cache-Aware Router behaviour
- [x] `concepts/routing/kv-index.mdx` — KV Index Service surface
- [x] `concepts/routing/placement-hints.mdx` — PlacementHint
- [x] `concepts/routing/cached-tokens.mdx` — `cached_tokens` accounting

### Cost

- [x] `concepts/cost/cost-model.mdx` — gross / net / cache savings
- [x] `concepts/cost/pricing-snapshots.mdx` — `*_price_snapshot` columns
- [x] `concepts/cost/cost-per-completed-run.mdx` — the unit of value (positioning voice)

### Tenancy

- [x] `concepts/tenancy/index.mdx` — Tenant → Project → Environment → Deployment hierarchy overview
- [x] `concepts/tenancy/tenants.mdx` — Tenant (billing root)
- [x] `concepts/tenancy/projects.mdx` — Project (logical app boundary)
- [x] `concepts/tenancy/environments.mdx` — Environment (prod / staging / dev)
- [x] `concepts/tenancy/keys.mdx` — Bearer Keys (credential surface, orthogonal to the hierarchy)

### Events

- [x] `concepts/events/index.mdx` — overview, envelope, taxonomy (8 streams)
- [x] `concepts/events/event-envelope.mdx` — minimum envelope
- [x] `concepts/events/execution.mdx`
- [x] `concepts/events/state.mdx` — `kv_events` stream
- [x] `concepts/events/routing.mdx`
- [x] `concepts/events/policy.mdx`
- [x] `concepts/events/budget.mdx`
- [x] `concepts/events/checkpoint.mdx`
- [x] `concepts/events/runtime.mdx`
- [x] `concepts/events/context-engineering.mdx`

### Product modes

- [x] `concepts/deployment/byo-runtime.mdx` — BYO runtime mode
- [x] `concepts/deployment/managed-runtime.mdx` — KovaServe runtime mode
- [x] `concepts/deployment/managed-cloud.mdx` — managed cloud
- [x] `concepts/deployment/private-deployment.mdx` — self-hosted / private / sovereign

### Runtime

- [x] `concepts/runtime/runtime-architecture.mdx`
- [x] `concepts/runtime/runtime-execution-semantics.mdx`
- [x] `concepts/runtime/workers.mdx`
- [x] `concepts/runtime/sandboxes.mdx`
- [x] `concepts/runtime/tool-invocations.mdx`
- [x] `concepts/runtime/workspaces.mdx`
- [x] `concepts/runtime/workspace-artifacts.mdx`
- [x] `concepts/runtime/runtime-local-state.mdx`
- [x] `concepts/runtime/runtime-observability.mdx`

### Managed-agent SKUs   (positioning voice)

- [x] `concepts/managed-agents/index.mdx` — SKU model overview
- [x] `concepts/managed-agents/coderuns.mdx`
- [x] `concepts/managed-agents/opsruns.mdx`
- [x] `concepts/managed-agents/docruns.mdx`

## 4. Guides

### Migration   (positioning voice)

- [ ] `guides/migration/migrating-from-openai.mdx` — "Change two lines"
- [ ] `guides/migration/migrating-from-openrouter.mdx` — Private deployment + run hierarchy
- [ ] `guides/migration/migrating-from-langsmith.mdx` — Replacing trace UX

### Authoring runs

- [ ] `guides/authoring-runs/multi-step-runs.mdx`
- [ ] `guides/authoring-runs/branching-from-checkpoint.mdx`
- [ ] `guides/authoring-runs/resuming-after-failure.mdx`

### Context

- [ ] `guides/context/authoring-context-manifests.mdx`
- [ ] `guides/context/managing-artifacts.mdx`
- [ ] `guides/context/compaction-strategies.mdx`

### Budgets & Policy

- [ ] `guides/policy/per-run-budgets.mdx`
- [ ] `guides/policy/context-budgets.mdx`
- [ ] `guides/policy/policy-scopes.mdx`

### Observability

- [ ] `guides/observability/reading-run-timelines.mdx`
- [ ] `guides/observability/opentelemetry-export.mdx`
- [ ] `guides/observability/consuming-events.mdx`

### Tenancy

- [ ] `guides/tenancy/provisioning-keys.mdx`
- [ ] `guides/tenancy/managing-environments.mdx`

### Deployment

- [ ] `guides/deployment/self-hosting-kubernetes.mdx` — k3s + Helm install
- [ ] `guides/deployment/sovereign-deployment.mdx`
- [ ] `guides/deployment/byo-runtime-integration.mdx`

## 5. API Reference (hand-authored MDX; curl + Python tabs)

### Using the API

- [x] `api/index.mdx` — API Reference root with sub-section cards
- [x] `api/using-the-api/index.mdx` — overview, base URL, two API families
- [x] `api/using-the-api/authentication.mdx` — Bearer keys; scope hierarchy
- [x] `api/using-the-api/errors.mdx` — OpenAI-style envelope on `/v1/*`; native `error_code` envelope on `/v1/ks/*`
- [x] `api/using-the-api/pagination.mdx` — cursor pagination (`before` / `after` / `limit`)
- [x] `api/using-the-api/idempotency.mdx` — idempotency keys
- [x] `api/using-the-api/ids.mdx` — ULID + Session ID conventions
- [x] `api/using-the-api/cost-headers.mdx` — `X-KS-Cost-Cents`, cache savings
- [x] `api/using-the-api/streaming.mdx` — SSE conventions; final-chunk cost delivery

### Inference

- [x] `api/inference/chat-completions.mdx` — `POST /v1/chat/completions`
- [x] `api/inference/models.mdx` — `GET /v1/models`
- [x] `api/inference/extension-envelope.mdx` — `kovaserve` extension field surface

### Runs

- [x] `api/runs/create.mdx` — `POST /v1/ks/runs`
- [x] `api/runs/get.mdx` — `GET /v1/ks/runs/{id}`
- [x] `api/runs/list.mdx`
- [x] `api/runs/update.mdx` — `PATCH /v1/ks/runs/{id}`
- [x] `api/runs/cancel.mdx`
- [x] `api/runs/steps.mdx` — `GET /v1/ks/runs/{id}/steps`
- [x] `api/runs/timeline.mdx` — `GET /v1/ks/runs/{id}/timeline`
- [x] `api/runs/branch.mdx`

### Sessions

- [x] `api/sessions/create.mdx`
- [x] `api/sessions/get.mdx`
- [x] `api/sessions/list.mdx`
- [x] `api/sessions/archive.mdx`

### Checkpoints

- [x] `api/checkpoints/create.mdx`
- [x] `api/checkpoints/get.mdx`
- [x] `api/checkpoints/list.mdx`
- [x] `api/checkpoints/restore.mdx`

### Handles

- [x] `api/handles/create.mdx` — `POST /v1/ks/handles`
- [x] `api/handles/get.mdx` — `GET /v1/ks/handles/{id}`
- [x] `api/handles/list.mdx`
- [x] `api/handles/delete.mdx` — `DELETE /v1/ks/handles/{id}`
- [x] `api/handles/share.mdx` — promote a private handle to a shareable scope

### Context

- [x] `api/context/manifests/get.mdx`
- [x] `api/context/manifests/list.mdx`
- [x] `api/context/segments/get.mdx`
- [x] `api/context/artifacts/upload.mdx`
- [x] `api/context/artifacts/get.mdx`
- [x] `api/context/artifacts/list.mdx`
- [x] `api/context/compaction-records/get.mdx`
- [x] `api/context/compaction-records/list.mdx`

### Policy & Budgets

- [x] `api/policy/budgets/create.mdx`
- [x] `api/policy/budgets/get.mdx`
- [x] `api/policy/budgets/list.mdx`
- [x] `api/policy/context-budgets/create.mdx`
- [x] `api/policy/context-budgets/get.mdx`
- [x] `api/policy/policy-scopes/create.mdx`
- [x] `api/policy/policy-scopes/get.mdx`
- [x] `api/policy/policy-scopes/list.mdx`

### Metering

- [x] `api/metering/usage.mdx` — `GET /v1/ks/metering/usage`
- [x] `api/metering/export.mdx` — `GET /v1/ks/metering/export`

### Tenancy

- [x] `api/tenancy/tenants/get.mdx`
- [x] `api/tenancy/projects/create.mdx`
- [x] `api/tenancy/projects/get.mdx`
- [x] `api/tenancy/projects/list.mdx`
- [x] `api/tenancy/environments/create.mdx`
- [x] `api/tenancy/environments/get.mdx`
- [x] `api/tenancy/environments/list.mdx`
- [x] `api/tenancy/keys/create.mdx`
- [x] `api/tenancy/keys/get.mdx`
- [x] `api/tenancy/keys/list.mdx`
- [x] `api/tenancy/keys/rotate.mdx`
- [x] `api/tenancy/keys/revoke.mdx`

### Runtime

- [x] `api/runtime/workers/list.mdx`
- [x] `api/runtime/sandboxes/create.mdx`
- [x] `api/runtime/sandboxes/get.mdx`
- [x] `api/runtime/workspaces/get.mdx`
- [x] `api/runtime/workspaces/snapshot.mdx`
- [x] `api/runtime/tool-invocations/list.mdx`

### Events

- [x] `api/events/index.mdx` — envelope + cursor
- [x] `api/events/execution.mdx`
- [x] `api/events/state.mdx`
- [x] `api/events/routing.mdx`
- [x] `api/events/policy.mdx`
- [x] `api/events/budget.mdx`
- [x] `api/events/checkpoint.mdx`
- [x] `api/events/runtime.mdx`
- [x] `api/events/context-engineering.mdx`

### Cluster

- [ ] `api/cluster/nodes.mdx` — `/v1/ks/nodes`
- [ ] `api/cluster/cache-lookup.mdx` — `/v1/ks/cache/lookup`
- [ ] `api/cluster/routing-plan.mdx` — `/v1/ks/routing/plan`

### Health & Metrics

- [ ] `api/health/health.mdx` — `/health`
- [ ] `api/health/metrics.mdx` — `/metrics`

## 6. SDK Reference (Python `kovaserve`)

### Getting started

- [ ] `sdk/index.mdx` — install, configure, `KOVASERVE_API_KEY`
- [ ] `sdk/openai-compat.mdx` — drop-in OpenAI replacement; `extra_body=`
- [ ] `sdk/extension-envelope.mdx`

### Decorators

- [ ] `sdk/decorators/run.mdx` — `@kova.run`
- [ ] `sdk/decorators/session.mdx` — `@kova.session`
- [ ] `sdk/decorators/budget.mdx` — `@kova.budget`

### Clients

- [ ] `sdk/clients/runs.mdx`
- [ ] `sdk/clients/sessions.mdx`
- [ ] `sdk/clients/checkpoints.mdx`
- [ ] `sdk/clients/budgets.mdx`
- [ ] `sdk/clients/context.mdx`
- [ ] `sdk/clients/events.mdx`

### Reference

- [ ] `sdk/reference/errors.mdx` — exception hierarchy
- [ ] `sdk/reference/auto-generated.mdx` — `pdoc` output (build-time)

## 7. CLI Reference (`kova`)

- [ ] `cli/index.mdx` — install, auth, global flags

### runs

- [ ] `cli/runs/list.mdx`
- [ ] `cli/runs/get.mdx`
- [ ] `cli/runs/tail.mdx`
- [ ] `cli/runs/cancel.mdx`
- [ ] `cli/runs/branch.mdx`

### sessions

- [ ] `cli/sessions/list.mdx`
- [ ] `cli/sessions/get.mdx`

### checkpoints

- [ ] `cli/checkpoints/list.mdx`
- [ ] `cli/checkpoints/get.mdx`
- [ ] `cli/checkpoints/restore.mdx`

### budgets

- [ ] `cli/budgets/create.mdx`
- [ ] `cli/budgets/get.mdx`

### context

- [ ] `cli/context/manifests.mdx`
- [ ] `cli/context/artifacts.mdx`

### usage

- [ ] `cli/usage/query.mdx`
- [ ] `cli/usage/export.mdx`

### keys

- [ ] `cli/keys/create.mdx`
- [ ] `cli/keys/rotate.mdx`
- [ ] `cli/keys/revoke.mdx`

### events

- [ ] `cli/events/tail.mdx`

## 8. Cookbook   (positioning voice)

- [ ] `cookbook/coding-agent.mdx` — CodeRuns reference recipe
- [ ] `cookbook/document-review.mdx` — DocRuns reference recipe
- [ ] `cookbook/ops-automation.mdx` — OpsRuns reference recipe
- [ ] `cookbook/tool-loops-with-budget-kill.mdx`
- [ ] `cookbook/branching-from-checkpoint.mdx`
- [ ] `cookbook/private-deployment.mdx`

## 9. Models

- [ ] `models/index.mdx` — deployable models, capability matrix, context windows, tokenizers

## 10. Pricing   (positioning voice)

- [ ] `pricing/index.mdx` — rate cards + cost-per-completed-run examples

## 11. Changelog

- [ ] `changelog/index.mdx` — dated API changes, additive vs. breaking

## 12. Status

- [ ] `status/index.mdx` — public status page link / embedded health

---

## Out of scope (not in nav)

Tracked for context — outside the product surface.

- Webhooks management
- Batch API
- TypeScript SDK
- Hosted billing / invoices
- Real-time per-token streaming cost
- Multi-region replication
- Custom inference engines beyond vLLM
- Autoscaling

---

## Coverage matrix (for audit)

### Canonical entities → concept page

| Entity | Page |
|---|---|
| Run | `concepts/run-hierarchy/runs.mdx` |
| Session | `concepts/continuity/sessions.mdx` |
| Step | `concepts/run-hierarchy/steps.mdx` (+ `concepts/run-hierarchy/step-types.mdx`) |
| ModelCall | `concepts/run-hierarchy/model-calls.mdx` |
| ContextManifest | `concepts/context/context-manifests.mdx` |
| ContextSegment | `concepts/context/context-segments.mdx` |
| ContextArtifact | `concepts/context/context-artifacts.mdx` |
| CompactionRecord | `concepts/context/compaction-records.mdx` |
| Checkpoint | `concepts/recovery/checkpoints.mdx` |
| MemoryClass (label on ContextSegment) | `concepts/context/context-segments.mdx` |
| PolicyScope | `concepts/policy/policy-scopes.mdx` |
| Budget | `concepts/policy/budgets.mdx` |
| ContextBudget | `concepts/policy/context-budgets.mdx` |
| PlacementHint | `concepts/routing/placement-hints.mdx` |
| StateHandle | `concepts/recovery/state-handles.mdx` |

### State machines → concept page

| FSM | Page |
|---|---|
| Run | `concepts/run-hierarchy/run-state-machine.mdx` |
| Step | `concepts/run-hierarchy/step-state-machine.mdx` |
| Checkpoint | `concepts/recovery/checkpoint-state-machine.mdx` |
| Budget | `concepts/policy/budget-state-machine.mdx` |
| ContextBudget | `concepts/policy/context-budget-state-machine.mdx` |
| Session | `concepts/continuity/session-state-machine.mdx` |

### Event streams → concept + API pages

| Stream | Concept | API |
|---|---|---|
| Execution | `concepts/events/execution.mdx` | `api/events/execution.mdx` |
| State (`kv_events`) | `concepts/events/state.mdx` | `api/events/state.mdx` |
| Routing | `concepts/events/routing.mdx` | `api/events/routing.mdx` |
| Policy | `concepts/events/policy.mdx` | `api/events/policy.mdx` |
| Budget | `concepts/events/budget.mdx` | `api/events/budget.mdx` |
| Checkpoint | `concepts/events/checkpoint.mdx` | `api/events/checkpoint.mdx` |
| Runtime | `concepts/events/runtime.mdx` | `api/events/runtime.mdx` |
| Context engineering | `concepts/events/context-engineering.mdx` | `api/events/context-engineering.mdx` |

### Product modes → concept page

| Mode | Page |
|---|---|
| BYO runtime | `concepts/deployment/byo-runtime.mdx` |
| KovaServe runtime (managed) | `concepts/deployment/managed-runtime.mdx` |
| Managed cloud | `concepts/deployment/managed-cloud.mdx` |
| Self-hosted / private / sovereign | `concepts/deployment/private-deployment.mdx` |

### Managed-agent SKUs → concept + cookbook

| SKU | Concept | Cookbook |
|---|---|---|
| CodeRuns | `concepts/managed-agents/coderuns.mdx` | `cookbook/coding-agent.mdx` |
| OpsRuns | `concepts/managed-agents/opsruns.mdx` | `cookbook/ops-automation.mdx` |
| DocRuns | `concepts/managed-agents/docruns.mdx` | `cookbook/document-review.mdx` |

---

## Cross-cutting authoring rules

1. **Wire format is canon.** Every API page reflects the canonical wire shape. Do not invent fields outside the blueprint.
2. **IDs are bare 26-char Crockford ULIDs**, no prefixes, **except** Session IDs which are `ses_<24hex>`.
3. **Tenant nouns** in reference/concept copy: Tenant → Project → Environment → Deployment. Keys are the orthogonal credential surface, bound to a `(tenant, project, environment)` triple — never a hierarchy level.
4. **"Run" wins** over thread / conversation / task / workflow / job in user-facing copy.
5. **Code examples**: tabbed by language (curl + Python minimum). CI-test against a real cluster.
6. **No vendor lock-in references** — no Stainless / Speakeasy / Fern / Mintlify / Algolia.
7. **Every concept page** ends with a `## See also` block linking to the relevant API and SDK pages.
8. **Every API page** opens with a one-line plain-English description, then method + path, then auth scope, then full request/response schema.
9. **One topic per page.** A concept page covers exactly one entity or state machine. An API page covers exactly one endpoint. A CLI page covers exactly one subcommand. A decorator page covers exactly one decorator.
10. **Folder grouping is mandatory.** Every page lives inside a topic folder. The only flat files are section `index.mdx` files.
