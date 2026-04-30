# KovaServe Docs — Table of Contents (working)

Living roadmap for `docs.kovaserve.com`. Source of structure for `content/docs/` and the Fumadocs sidebar (`meta.json`). One entry per planned MDX page. Coverage target: every canonical entity, state machine, event stream, product mode, and SKU defined in `D:\Dev\kova\kova-v1\docs\architecture\KovaServe_Blueprint.md` and `D:\Dev\kova\kova_serve_product_positioning_brief.md`.

**Status legend:** `[x]` published · `[~]` drafted, in review · `[ ]` not started · `[—]` out of scope.

**Voice rule (binding):** customer-facing pages use positioning-brief vocabulary ("managed agents", "completed agent runs", "Agentic Execution Cloud"); reference/concept pages use blueprint vocabulary ("control plane", "Run/Step/ModelCall", "ContextManifest", "PolicyScope", "StateHandle"). Never mixed inside a single page.

**One-topic-per-page rule (binding):** each page covers exactly one entity, endpoint, command, decorator, recipe, or state machine. Bundle only when the bundle *is* the topic — overviews, hierarchy maps, taxonomies. If a page would need more than one H1-level concept to make sense, split it.

**Finished-product rule (binding):** these docs describe KovaServe as a complete, polished product. The blueprint is the source of truth for what the product is; pages reflect the blueprint as built. No hedging, no "not yet shipped", no shipped-vs-deferred breakdowns, no implementation-status disclosures anywhere in `content/docs/`. Implementation status lives in `kova-v1/docs/vertical-slices/SLICE-STATUS.md` and (later) a separate roadmap surface — never in the docs site. The docs are the development target.

**Doc-writing protocol (binding — applies to every page, every time):**

1. **The product blueprint (`D:\Dev\kova\kova-v1\docs\architecture\KovaServe_Blueprint.md`) is the source of truth.** Scope, behavior, entities, state machines, event taxonomy — all of it comes from the blueprint. Code informs concrete shapes (field names, JSON, enums); positioning sets framing on customer-facing pages. The blueprint wins over the code wherever they disagree.
2. **Nothing is ever written as pending, unimplemented, deferred, partial, or yet-to-be-done.** If it is in the blueprint, it exists in the docs as a finished, shipping feature. Present tense, confident voice, no hedging, no "coming soon", no "v1 deviation", no implementation-status disclosure of any kind. The docs are the target the implementation converges to.
3. **Customer-facing language matches the positioning brief (`D:\Dev\kova\kova_serve_product_positioning_brief.md`) exactly.** "Agentic Execution Cloud", "managed agents", "completed agent runs", "cost per completed run", "CodeRuns / OpsRuns / DocRuns", the ICP framing, the category claim — these are decided. Do not paraphrase them or substitute synonyms on customer-facing surfaces.
4. **Read both documents in full before writing any new page.** Open the product blueprint and the positioning brief end-to-end every time, even when the page is narrow. Partial reads produce drift in vocabulary, scope, and framing. No exceptions.

---

## 1. Top of tree

- [x] `index.mdx` — Introduction (positioning voice; Agentic Execution Cloud; the three layers)

## 2. Quickstart   (positioning voice)

- [ ] `quickstart/index.mdx` — <10 lines to a completed managed run
- [ ] `quickstart/install-sdk.mdx` — install the `kovaserve` Python SDK
- [ ] `quickstart/install-cli.mdx` — install the `kova` CLI
- [ ] `quickstart/environment.mdx` — `KOVASERVE_API_KEY`, base URL, env vars
- [ ] `quickstart/first-run.mdx` — first managed run end-to-end (Run → Steps → completion)
- [ ] `quickstart/managed-vs-private.mdx` — managed cloud vs private deployment

## 3. Concepts   (reference voice — blueprint vocabulary)

- [x] `concepts/index.mdx` — Concepts overview + canonical entity map

### Layered model — Blueprint Part 2

- [ ] `concepts/layered-model.mdx` — Layer 1 / 2 / 3 boundaries
- [ ] `concepts/execution-substrate.mdx` — Layer 1: vLLM alignment, what the substrate exposes
- [ ] `concepts/control-plane.mdx` — Layer 2: KovaServe control plane responsibilities
- [ ] `concepts/runtime-wedge.mdx` — Layer 3: runtime wedge (CodeRuns)

### Run hierarchy — Blueprint §7.2 entities, §7.4 FSMs

- [x] `concepts/runs.mdx` — Run entity
- [x] `concepts/sub-runs.mdx` — `parent_run_id`, `summary_artifact_id`, sub-run lineage
- [x] `concepts/steps.mdx` — Step entity
- [x] `concepts/step-types.mdx` — canonical Pass 7 set + `COMPACT`, `MEMORY_READ`, `MEMORY_WRITE`, `SUB_RUN_DISPATCH`, `SUB_RUN_JOIN`
- [x] `concepts/model-calls.mdx` — ModelCall entity
- [x] `concepts/run-state-machine.mdx` — 12-state Run FSM (CREATED → … → BRANCHING → COMPLETED/FAILED/CANCELED)
- [x] `concepts/step-state-machine.mdx` — Step FSM
- [x] `concepts/identity-and-ids.mdx` — ULIDs, Session ID shape, idempotency keys

### Continuity — Blueprint §5.9, §7.2

- [x] `concepts/sessions.mdx` — Session entity
- [x] `concepts/session-state-machine.mdx` — `OPEN → IDLE → RESUMABLE → ARCHIVED | EXPIRED`
- [x] `concepts/current-manifest.mdx` — `current_manifest_id` semantics

### Checkpoints, recovery, branches — Blueprint §5.10, §6.10, §7.4

- [x] `concepts/checkpoints.mdx` — Checkpoint entity
- [x] `concepts/checkpoint-state-machine.mdx` — `REQUESTED → CAPTURING → STORED → VALIDATED → RESTORING → RESTORED`
- [x] `concepts/state-handles.mdx` — StateHandle (`kv_prefix | context_manifest | checkpoint | artifact_bundle | memory_entry | runtime_state`)
- [x] `concepts/resume-flow.mdx` — `RECOVERING → RESUMING → RUNNING` (logical-context-first)
- [x] `concepts/retries.mdx` — runtime retry semantics
- [x] `concepts/branches.mdx` — Branch concept (`BRANCHING` state)
- [x] `concepts/branch-flow.mdx` — branching from a checkpoint into a child run

### Context engineering — Blueprint §5.17, §7.2, §8.1 context APIs

- [x] `concepts/context-manifests.mdx` — ContextManifest (audit anchor)
- [x] `concepts/context-segments.mdx` — ContextSegment, `context_type`, `parts` wire format
- [x] `concepts/context-artifacts.mdx` — ContextArtifact (object-storage)
- [x] `concepts/compaction-records.mdx` — CompactionRecord entity
- [x] `concepts/compaction-lineage.mdx` — source/output relationships
- [x] `concepts/segment-types.mdx` — canonical `context_type` values (ADR-003)
- [x] `concepts/renderer-versions.mdx` — renderer + tokenizer fingerprinting

### Memory — Blueprint §7.2 MemoryScope/MemoryEntry, §8.3 memory events

- [x] `concepts/memory.mdx` — overview of the memory model
- [x] `concepts/memory-scopes.mdx` — `ephemeral | session | user | tenant | global`
- [x] `concepts/memory-entries.mdx` — MemoryEntry row shape, namespacing
- [x] `concepts/memory-store.mdx` — Memory Store Service surface

### Tools — Blueprint §7.2

- [x] `concepts/tool-catalogs.mdx` — ToolCatalog (hashed, immutable, versioned)
- [x] `concepts/tool-context-disposition.mdx` — `inline_full | inline_preview | summary_required | artifact_ref | drop | blocked`
- [x] `concepts/tool-governance.mdx` — tool policy enforcement model

### Budgets & policy — Blueprint §5.12, §5.13, §7.2, §7.4

- [x] `concepts/budgets.mdx` — Budget entity
- [x] `concepts/budget-state-machine.mdx` — `ACTIVE → WARNING → DEGRADED_ALLOWED | HARD_STOP → CLOSED`
- [x] `concepts/context-budgets.mdx` — ContextBudget entity, dimensions
- [x] `concepts/context-budget-state-machine.mdx` — ACTIVE / WARN / OFFLOAD_REQUIRED / COMPACT_REQUIRED / DEGRADE / HARD_STOP
- [x] `concepts/policy-scopes.mdx` — PolicyScope hierarchy + enrichment fields
- [x] `concepts/admission.mdx` — admission decision flow

### Routing & cache — Blueprint §5.6–5.8

- [x] `concepts/kv-cache.mdx` — KV cache fundamentals
- [x] `concepts/manifest-aware-routing.mdx` — Cache-Aware Router behaviour
- [x] `concepts/kv-index.mdx` — KV Index Service surface
- [x] `concepts/placement-hints.mdx` — PlacementHint
- [x] `concepts/cached-tokens.mdx` — `cached_tokens` accounting

### Cost — Blueprint §5.13; positioning §12 Cost Per Completed Run

- [x] `concepts/cost-model.mdx` — gross / net / cache savings (ADR-019/020/021)
- [x] `concepts/pricing-snapshots.mdx` — `*_price_snapshot` columns (ADR-022)
- [x] `concepts/cost-per-completed-run.mdx` — the unit of value (positioning voice)

### Tenancy — Blueprint §5.14

- [x] `concepts/tenancy.mdx` — overview of the hierarchy
- [x] `concepts/organizations.mdx`
- [x] `concepts/projects.mdx`
- [x] `concepts/environments.mdx`
- [x] `concepts/keys.mdx` — keys and key scopes

### Events — Blueprint §8.3 (10 streams) + §8.4 envelope

- [ ] `concepts/events.mdx` — overview, envelope, taxonomy
- [ ] `concepts/event-envelope.mdx` — minimum envelope
- [ ] `concepts/events/execution.mdx`
- [ ] `concepts/events/state.mdx` — `kv_events` stream
- [ ] `concepts/events/routing.mdx`
- [ ] `concepts/events/policy.mdx`
- [ ] `concepts/events/budget.mdx`
- [ ] `concepts/events/checkpoint.mdx`
- [ ] `concepts/events/runtime.mdx`
- [ ] `concepts/events/context-engineering.mdx`
- [ ] `concepts/events/memory.mdx`
- [ ] `concepts/events/sub-run.mdx`

### Product modes — Blueprint Part 9

- [ ] `concepts/byo-runtime.mdx` — BYO runtime mode (§9.2)
- [ ] `concepts/managed-runtime.mdx` — KovaServe runtime mode (§9.3)
- [ ] `concepts/managed-cloud.mdx` — managed cloud (§9.4)
- [ ] `concepts/private-deployment.mdx` — self-hosted / private / sovereign (§9.5)

### Runtime / Layer 3 — Blueprint Part 6

- [ ] `concepts/runtime-architecture.mdx`
- [ ] `concepts/runtime-execution-semantics.mdx`
- [ ] `concepts/workers.mdx`
- [ ] `concepts/sandboxes.mdx`
- [ ] `concepts/tool-invocations.mdx`
- [ ] `concepts/workspaces.mdx`
- [ ] `concepts/workspace-artifacts.mdx`
- [ ] `concepts/runtime-local-state.mdx`
- [ ] `concepts/runtime-observability.mdx`

### Managed-agent SKUs — positioning §11 (positioning voice)

- [ ] `concepts/managed-agents.mdx` — SKU model overview
- [ ] `concepts/coderuns.mdx`
- [ ] `concepts/opsruns.mdx`
- [ ] `concepts/docruns.mdx`

## 4. Guides

### Migration   (positioning voice)

- [ ] `guides/migrating-from-openai.mdx` — "Change two lines"
- [ ] `guides/migrating-from-openrouter.mdx` — Private deployment + run hierarchy
- [ ] `guides/migrating-from-langsmith.mdx` — Replacing trace UX

### Authoring runs

- [ ] `guides/multi-step-runs.mdx`
- [ ] `guides/sub-run-fanout.mdx`
- [ ] `guides/branching-from-checkpoint.mdx`
- [ ] `guides/resuming-after-failure.mdx`

### Context

- [ ] `guides/authoring-context-manifests.mdx`
- [ ] `guides/managing-artifacts.mdx`
- [ ] `guides/compaction-strategies.mdx`

### Memory

- [ ] `guides/using-session-memory.mdx`
- [ ] `guides/using-user-memory.mdx`
- [ ] `guides/using-tenant-memory.mdx`

### Tools

- [ ] `guides/registering-tool-catalogs.mdx`
- [ ] `guides/tool-output-disposition.mdx`

### Budgets & policy

- [ ] `guides/per-run-budgets.mdx`
- [ ] `guides/context-budgets.mdx`
- [ ] `guides/policy-scopes.mdx`

### Observability

- [ ] `guides/reading-run-timelines.mdx`
- [ ] `guides/opentelemetry-export.mdx`
- [ ] `guides/consuming-events.mdx`

### Tenancy

- [ ] `guides/provisioning-keys.mdx`
- [ ] `guides/managing-environments.mdx`

### Deployment

- [ ] `guides/self-hosting-kubernetes.mdx` — k3s + Helm install (ADR-016 path)
- [ ] `guides/sovereign-deployment.mdx`
- [ ] `guides/byo-runtime-integration.mdx`

## 5. API Reference (hand-authored MDX; curl + Python tabs)

- [ ] `api/index.mdx` — overview, base URL
- [ ] `api/authentication.mdx` — Bearer keys; scope hierarchy
- [ ] `api/errors.mdx` — OpenAI-shape error envelope (ADR-002)
- [ ] `api/pagination.mdx` — cursor pagination (`before` / `after` / `limit`)
- [ ] `api/idempotency.mdx`
- [ ] `api/ids.mdx` — ULID + Session ID conventions
- [ ] `api/cost-headers.mdx` — `X-KS-Cost-Cents`, cache savings
- [ ] `api/streaming.mdx` — SSE conventions, final-chunk cost (ADR-021)

### Inference   (Blueprint §8.1 OpenAI-compat)

- [ ] `api/inference/chat-completions.mdx` — `POST /v1/chat/completions`
- [ ] `api/inference/models.mdx` — `GET /v1/models`
- [ ] `api/inference/extension-envelope.mdx` — `kovaserve` extension field surface

### Runs

- [ ] `api/runs/create.mdx` — `POST /v1/ks/runs`
- [ ] `api/runs/get.mdx` — `GET /v1/ks/runs/{id}`
- [ ] `api/runs/list.mdx`
- [ ] `api/runs/update.mdx` — `PATCH /v1/ks/runs/{id}`
- [ ] `api/runs/cancel.mdx`
- [ ] `api/runs/steps.mdx` — `GET /v1/ks/runs/{id}/steps`
- [ ] `api/runs/model-calls.mdx`
- [ ] `api/runs/timeline.mdx` — `GET /v1/ks/runs/{id}/timeline`
- [ ] `api/runs/branch.mdx`
- [ ] `api/runs/sub-runs.mdx`

### Sessions

- [ ] `api/sessions/create.mdx`
- [ ] `api/sessions/get.mdx`
- [ ] `api/sessions/list.mdx`
- [ ] `api/sessions/archive.mdx`

### Checkpoints

- [ ] `api/checkpoints/create.mdx`
- [ ] `api/checkpoints/get.mdx`
- [ ] `api/checkpoints/list.mdx`
- [ ] `api/checkpoints/restore.mdx`

### Context engineering   (Blueprint §8.1 Context APIs)

- [ ] `api/context/manifests/get.mdx`
- [ ] `api/context/manifests/list.mdx`
- [ ] `api/context/segments/get.mdx`
- [ ] `api/context/artifacts/upload.mdx`
- [ ] `api/context/artifacts/get.mdx`
- [ ] `api/context/artifacts/list.mdx`
- [ ] `api/context/compaction-records/get.mdx`
- [ ] `api/context/compaction-records/list.mdx`

### Memory

- [ ] `api/memory/scopes.mdx`
- [ ] `api/memory/entries/create.mdx`
- [ ] `api/memory/entries/get.mdx`
- [ ] `api/memory/entries/update.mdx`
- [ ] `api/memory/entries/delete.mdx`
- [ ] `api/memory/entries/list.mdx`
- [ ] `api/memory/search.mdx`

### Tools

- [ ] `api/tools/catalogs/create.mdx`
- [ ] `api/tools/catalogs/get.mdx`
- [ ] `api/tools/catalogs/list.mdx`

### Budgets & policy

- [ ] `api/budgets/create.mdx`
- [ ] `api/budgets/get.mdx`
- [ ] `api/budgets/list.mdx`
- [ ] `api/context-budgets/create.mdx`
- [ ] `api/context-budgets/get.mdx`
- [ ] `api/policy-scopes/create.mdx`
- [ ] `api/policy-scopes/get.mdx`
- [ ] `api/policy-scopes/list.mdx`

### Metering

- [ ] `api/metering/usage.mdx` — `GET /v1/ks/metering/usage`
- [ ] `api/metering/export.mdx` — `GET /v1/ks/metering/export`

### Tenancy

- [ ] `api/organizations/get.mdx`
- [ ] `api/projects/create.mdx`
- [ ] `api/projects/get.mdx`
- [ ] `api/projects/list.mdx`
- [ ] `api/environments/create.mdx`
- [ ] `api/environments/get.mdx`
- [ ] `api/environments/list.mdx`
- [ ] `api/keys/create.mdx`
- [ ] `api/keys/get.mdx`
- [ ] `api/keys/list.mdx`
- [ ] `api/keys/rotate.mdx`
- [ ] `api/keys/revoke.mdx`

### Runtime APIs   (Blueprint §8.1)

- [ ] `api/runtime/workers/list.mdx`
- [ ] `api/runtime/sandboxes/create.mdx`
- [ ] `api/runtime/sandboxes/get.mdx`
- [ ] `api/runtime/workspaces/get.mdx`
- [ ] `api/runtime/workspaces/snapshot.mdx`
- [ ] `api/runtime/tool-invocations/list.mdx`

### Events   (Blueprint §8.3, pulled-stream surface)

- [ ] `api/events/index.mdx` — envelope + cursor
- [ ] `api/events/execution.mdx`
- [ ] `api/events/state.mdx`
- [ ] `api/events/routing.mdx`
- [ ] `api/events/policy.mdx`
- [ ] `api/events/budget.mdx`
- [ ] `api/events/checkpoint.mdx`
- [ ] `api/events/runtime.mdx`
- [ ] `api/events/context-engineering.mdx`
- [ ] `api/events/memory.mdx`
- [ ] `api/events/sub-run.mdx`

### Operator / cluster

- [ ] `api/cluster/nodes.mdx` — `/v1/ks/nodes`
- [ ] `api/cluster/cache-lookup.mdx` — `/v1/ks/cache/lookup`
- [ ] `api/cluster/routing-plan.mdx` — `/v1/ks/routing/plan`
- [ ] `api/cluster/state-handles.mdx`

### Health

- [ ] `api/health/health.mdx` — `/health`
- [ ] `api/health/metrics.mdx` — `/metrics`

## 6. SDK Reference (Python `kovaserve`)

- [ ] `sdk/index.mdx` — install, configure, `KOVASERVE_API_KEY`
- [ ] `sdk/openai-compat.mdx` — drop-in OpenAI replacement; `extra_body=`
- [ ] `sdk/extension-envelope.mdx`

### Decorators

- [ ] `sdk/decorators/run.mdx` — `@kova.run`
- [ ] `sdk/decorators/session.mdx` — `@kova.session`
- [ ] `sdk/decorators/budget.mdx` — `@kova.budget`
- [ ] `sdk/decorators/step.mdx` — `@kova.step`

### Clients

- [ ] `sdk/clients/runs.mdx`
- [ ] `sdk/clients/sessions.mdx`
- [ ] `sdk/clients/checkpoints.mdx`
- [ ] `sdk/clients/budgets.mdx`
- [ ] `sdk/clients/context.mdx`
- [ ] `sdk/clients/memory.mdx`
- [ ] `sdk/clients/tools.mdx`
- [ ] `sdk/clients/events.mdx`

- [ ] `sdk/errors.mdx` — exception hierarchy
- [ ] `sdk/auto-generated/` — `pdoc` output (build-time)

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

### memory

- [ ] `cli/memory/list.mdx`
- [ ] `cli/memory/get.mdx`
- [ ] `cli/memory/set.mdx`

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
- [ ] `cookbook/sub-run-fanout.mdx`
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

### Blueprint §7.2 canonical entities → concept page

| Entity | Page |
|---|---|
| Run | `concepts/runs.mdx` |
| Session | `concepts/sessions.mdx` |
| Step | `concepts/steps.mdx` (+ `concepts/step-types.mdx`) |
| ModelCall | `concepts/model-calls.mdx` |
| ContextManifest | `concepts/context-manifests.mdx` |
| ContextSegment | `concepts/context-segments.mdx` |
| ContextArtifact | `concepts/context-artifacts.mdx` |
| CompactionRecord | `concepts/compaction-records.mdx` |
| Checkpoint | `concepts/checkpoints.mdx` |
| MemoryScope | `concepts/memory-scopes.mdx` |
| MemoryEntry | `concepts/memory-entries.mdx` |
| ToolCatalog | `concepts/tool-catalogs.mdx` |
| ToolContextDisposition | `concepts/tool-context-disposition.mdx` |
| PolicyScope | `concepts/policy-scopes.mdx` |
| Budget | `concepts/budgets.mdx` |
| ContextBudget | `concepts/context-budgets.mdx` |
| PlacementHint | `concepts/placement-hints.mdx` |
| StateHandle | `concepts/state-handles.mdx` |

### Blueprint §7.4 state machines → concept page

| FSM | Page |
|---|---|
| Run | `concepts/run-state-machine.mdx` |
| Step | `concepts/step-state-machine.mdx` |
| Checkpoint | `concepts/checkpoint-state-machine.mdx` |
| Budget | `concepts/budget-state-machine.mdx` |
| ContextBudget | `concepts/context-budget-state-machine.mdx` |
| Session | `concepts/session-state-machine.mdx` |

### Blueprint §8.3 event streams → concept + API pages

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
| Memory | `concepts/events/memory.mdx` | `api/events/memory.mdx` |
| Sub-run | `concepts/events/sub-run.mdx` | `api/events/sub-run.mdx` |

### Blueprint Part 9 product modes → concept page

| Mode | Page |
|---|---|
| BYO runtime | `concepts/byo-runtime.mdx` |
| KovaServe runtime (managed) | `concepts/managed-runtime.mdx` |
| Managed cloud | `concepts/managed-cloud.mdx` |
| Self-hosted / private / sovereign | `concepts/private-deployment.mdx` |

### Positioning §11 SKUs → concept + cookbook

| SKU | Concept | Cookbook |
|---|---|---|
| CodeRuns | `concepts/coderuns.mdx` | `cookbook/coding-agent.mdx` |
| OpsRuns | `concepts/opsruns.mdx` | `cookbook/ops-automation.mdx` |
| DocRuns | `concepts/docruns.mdx` | `cookbook/document-review.mdx` |

---

## Cross-cutting authoring rules

1. **Wire format is canon.** Every API page reflects the canonical wire shape. Do not invent fields outside the blueprint.
2. **IDs are bare 26-char Crockford ULIDs**, no prefixes, **except** Session IDs which are `ses_<24hex>`.
3. **Tenant nouns** in user-facing copy: Organization → Project → Environment → Key. "Tenant" stays internal.
4. **"Run" wins** over thread / conversation / task / workflow / job in user-facing copy.
5. **Code examples**: tabbed by language (curl + Python minimum). CI-test against a real cluster.
6. **No vendor lock-in references** — no Stainless / Speakeasy / Fern / Mintlify / Algolia.
7. **Every concept page** ends with a `## See also` block linking to the relevant API and SDK pages.
8. **Every API page** opens with a one-line plain-English description, then method + path, then auth scope, then full request/response schema.
9. **One topic per page.** A concept page covers exactly one entity or state machine. An API page covers exactly one endpoint. A CLI page covers exactly one subcommand. A decorator page covers exactly one decorator.
