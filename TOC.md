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

- [x] `quickstart/index.mdx` — Agentic Execution Cloud category claim; pick-your-path cards; ICP / value summary
- [x] `quickstart/install-sdk.mdx` — `pip install kovaserve`; verification; adapter extras
- [x] `quickstart/install-cli.mdx` — same package; `kova auth login`; no-op verification
- [x] `quickstart/environment.mdx` — `KOVASERVE_API_KEY`, base URL, SDK vs CLI config separation, profiles
- [x] `quickstart/first-run.mdx` — 10-line end-to-end with `@kova.budget` + `@kova.run`; CLI inspection
- [x] `quickstart/managed-vs-private.mdx` — same semantic model; differences are operations only; one-env-var migration path

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

- [x] `guides/migration/migrating-from-openai.mdx` — Change two lines; anonymous-mode preservation; opt-in patterns
- [x] `guides/migration/migrating-from-openrouter.mdx` — Same OpenAI shape; capabilities gained; private-deployment portability
- [x] `guides/migration/migrating-from-langsmith.mdx` — Trace surface vs execution control plane; hybrid setup; full-migration path

### Authoring runs

- [x] `guides/authoring-runs/multi-step-runs.mdx` — Tool / think / observe / compact step decorators; nesting; parallel siblings
- [x] `guides/authoring-runs/branching-from-checkpoint.mdx` — `client.runs.branch`; `task_override`; what branches inherit
- [x] `guides/authoring-runs/resuming-after-failure.mdx` — `@kova.checkpoint` boundaries; three restore modes; compatibility validation

### Context

- [x] `guides/context/authoring-context-manifests.mdx` — `ContextBuilder` patterns; four-tier order; dynamic-content refusal; pre-call admission
- [x] `guides/context/managing-artifacts.mdx` — Four upload paths; auto-mime; data-residency bucket selection; retention
- [x] `guides/context/compaction-strategies.mdx` — Reactive vs proactive; `reduce_and_retry`; what to compact

### Budgets & Policy

- [x] `guides/policy/per-run-budgets.mdx` — Decorator, inline, control-client, CLI patterns; five dimensions; state machine
- [x] `guides/policy/context-budgets.mdx` — Per-request admission; six decisions; distinct from `RunBudgetDecision`; on-exceed modes
- [x] `guides/policy/policy-scopes.mdx` — `context_share_scope`, `data_boundary`, `tool_policy_ref`; hierarchy; auditing

### Observability

- [x] `guides/observability/reading-run-timelines.mdx` — Four views; CLI + SDK + portal; joining to traces
- [x] `guides/observability/opentelemetry-export.mdx` — Auto-instrumentation via httpx; W3C `traceparent`; opt-in GenAI conventions
- [x] `guides/observability/consuming-events.mdx` — Live tail + historical query; common consumer patterns; envelope reference

### Tenancy

- [x] `guides/tenancy/provisioning-keys.mdx` — Four roles, rate limits, expiry, rotation, revocation, audit
- [x] `guides/tenancy/managing-environments.mdx` — prod / staging / dev separation; scoped config; retirement

### Deployment

- [x] `guides/deployment/self-hosting-kubernetes.mdx` — k3s + Helm; values.yaml; bootstrap; observability; upgrade path
- [x] `guides/deployment/sovereign-deployment.mdx` — Offline license; telemetry disable; regional buckets; compliance
- [x] `guides/deployment/byo-runtime-integration.mdx` — Three integration shapes; each adapter snippet; what KovaServe records under each

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

- [x] `api/cluster/nodes.mdx` — `/v1/ks/nodes`
- [x] `api/cluster/cache-lookup.mdx` — `/v1/ks/cache/lookup`
- [x] `api/cluster/routing-plan.mdx` — `/v1/ks/routing/plan`

### Health & Metrics

- [x] `api/health/health.mdx` — `/health`
- [x] `api/health/metrics.mdx` — `/metrics`

## 6. SDK Reference (Python `kovaserve`)

### Getting started

- [x] `sdk/index.mdx` — package overview; the three surfaces (re-export, control plane, decorators); hooks, primitives, adapters; sync/async; package map
- [x] `sdk/install.mdx` — `pip install kovaserve` plus extras (`langgraph`, `pydantic-ai`, `openai-agents`, `temporal`); CLI ships in the same package; Python 3.11+; verify the install
- [x] `sdk/configuration.mdx` — env vars, per-client kwargs, custom `httpx` clients, no module globals, CLI profile separation, precedence
- [x] `sdk/sync-vs-async.mdx` — parallel classes (vs `.aio` / `_async` suffix), `nest_asyncio` policy, side-by-side recipes, construction cost, close semantics

### Inference path (OpenAI re-export)

- [x] `sdk/inference/openai-compat.mdx` — drop-in `openai.OpenAI`; the re-export contract; what you inherit; anonymous mode; how the defaults resolve; opting into the control plane
- [x] `sdk/inference/extension-envelope.mdx` — `extra_body={"kovaserve": {...}}`; typed `KovaServeExtension`; full field reference; response surface; mutual exclusivity rules; the builder
- [x] `sdk/inference/cost-and-streaming.mdx` — cost headers (non-streaming); final SSE chunk (streaming); `accumulate_stream_cost`; sync/async parallels; cost dimensions; status interpretation

### Control plane client

- [x] `sdk/control/index.mdx` — `KovaControlClient` overview; resource namespaces table; construction; sync/async; `expand=`; cross-cutting behaviour; coexisting with the inference client
- [x] `sdk/control/runs.mdx` — methods (create / get / list / update / cancel / steps / timeline / branch / stream); typed `Run` shape; legal user-driven transitions; idempotency via `external_run_id`
- [x] `sdk/control/sessions.mdx` — methods (create / get / list / archive); `ses_<24hex>` exception; binding Runs; turn history; state machine
- [x] `sdk/control/budgets.mdx` — methods (create / get / list / update); 5 dimensions; cost decimal-string precision; inline budgeting through extension envelope
- [x] `sdk/control/checkpoints.mdx` — methods (create / get / list / restore); logical-context-first; split-phase capture; `restore_mode` (cold / warm-logical / warm-kv); resume order
- [x] `sdk/control/handles.mdx` — methods (create / get / list / delete / share); five handle types; scope and expiry; share scopes; activation through inference
- [x] `sdk/control/context-manifests.mdx` — methods (get / list); ContextManifest shape; identity-of-record; admission decisions; `expand=["segments"]`
- [x] `sdk/control/context-segments.mdx` — `get` only; six `context_type` values; five `memory_class` values; inline vs offloaded; querying by manifest
- [x] `sdk/control/context-artifacts.mdx` — methods (upload / get / list / delete); ADK shape; `upload_path` / `upload_content`; data-boundary bucket selection
- [x] `sdk/control/context-budgets.mdx` — methods (create / get / update / admit); six dimensions; six decisions; distinct from `RunBudgetDecision`; preflight admission
- [x] `sdk/control/compaction.mdx` — methods (compact / records); lineage contract; runtime-produced summaries; ContextBudget trigger flow
- [x] `sdk/control/cache.mdx` — `prewarm` (max_tokens=0); `salt` override; tenant-wide-salt default; narrower-than-tenant anti-pattern; per-request salt
- [x] `sdk/control/metering.mdx` — `usage` (scoped to run / project / tenant — scope-dependent errors); `export` (JSONL); cost identity
- [x] `sdk/control/events.mdx` — `list` / `tail`; eight streams; WHATWG reconnection; multi-mode tailing
- [x] `sdk/control/cluster.mdx` — operator namespace; `nodes`, `cache_lookup`, `routing_plan`; rationale payload
- [x] `sdk/control/tenancy.mdx` — sub-namespaces (`tenants` / `projects` / `environments` / `keys`); four roles; credential file separation

### Decorators

- [x] `sdk/decorators/index.mdx` — five decorators; lifecycle contract; implicit metadata propagation; what decorators are not; stacking order rule
- [x] `sdk/decorators/run.mdx` — signature, on entry / return / exception / streaming, async, composing with `@kova.session`, reading active Run, `run_id=` reuse
- [x] `sdk/decorators/session.mdx` — signature, `complete=True/False` semantics, exception behaviour, implicit propagation, cache affinity
- [x] `sdk/decorators/budget.mdx` — signature, decimal-string `cost_cents`, entry-time admission, degrade mode, stacking outermost
- [x] `sdk/decorators/step.mdx` — `@kova.step` + four named aliases; contextvar step-stack and `parent_step_id`; required explicit `type=`
- [x] `sdk/decorators/checkpoint.mdx` — six canonical triggers; split-phase vs full mode; capture-on-entry vs capture-on-exit; cost discipline
- [x] `sdk/decorators/composition.mdx` — stacking rule; `mypy`-enforced ordering; step/checkpoint nesting choices; control-client mixing; framework-adapter coexistence

### Hooks

- [x] `sdk/hooks/index.mdx` — `RunHooks` class; full on_x surface; composition order (all layers fire); `inheritable` flag; `strict=True`; `RunHooks.compose(...)`; metrics / checkpoint / adapter patterns

### Context primitives

- [x] `sdk/primitives/context-builder.mdx` — 4-tier order; dynamic-content refusal; deterministic serialisation; full method surface; `declare_stable_context_id` composition rule; Trap-4 boundary
- [x] `sdk/primitives/artifact-client.mdx` — three upload paths (`upload_path` / `upload_content` / `upload`); three download paths; streaming uploads; data-boundary bucket selection
- [x] `sdk/primitives/context-budget-client.mdx` — `admit` preflight; `AdmissionDecision` typed shape; `reduce_and_retry` orchestrator; composing with `count_tokens`
- [x] `sdk/primitives/compaction-client.mdx` — `report` (ergonomic single-summary); `compact` (multi-output); `records` audit; `reduce_and_retry` helper; Trap-4 boundary inside one primitive

### Framework adapters

- [x] `sdk/adapters/index.mdx` — which adapter, what every adapter does, what they do not do, composition with decorators
- [x] `sdk/adapters/langgraph.mdx` — `KovaCheckpointer` (wraps LangGraph snapshots as ContextArtifacts) + `KovaStore` + `KovaMiddleware` (LangChain 1.0); thread → Session mapping
- [x] `sdk/adapters/pydantic-ai.mdx` — `KovaDeps` typed injection via `RunContext[KovaDeps]`; `kova_agent` factory; `KovaDeps.create` vs `KovaDeps.bind`
- [x] `sdk/adapters/openai-agents.mdx` — `KovaSession` + `KovaRunHooks` + `KovaTracingExporter`; framework lifecycle hooks; streaming + parallel tool dispatch
- [x] `sdk/adapters/temporal.mdx` — `@kova_activity` Activity wrapper; `KovaInterceptor` header propagation; deterministic Workflow rule; Activity retry mapping

### Cross-cutting

- [x] `sdk/streaming.mdx` — naive iterator + `accumulate_stream_cost`; WHATWG reconnection (`Last-Event-ID`); multi-mode `stream_mode`
- [x] `sdk/errors.mdx` — hierarchy table; status class vs feature subclass; OpenAI exceptions on re-export; what is/isn't retried
- [x] `sdk/retries-and-idempotency.mdx` — retry matrix; jittered backoff; `Retry-After`; auto-`Idempotency-Key`; `X-Kova-Retry-Count`
- [x] `sdk/pagination.mdx` — auto-iteration; manual paging; `before`/`after`/`limit`; sort order; server-side filter composition
- [x] `sdk/expand-parameter.mdx` — dotted paths; 4-level cap; allow-list; cycle detection; combining with pagination; when not to expand
- [x] `sdk/logging-and-tracing.mdx` — logger tree, levels, API-key redaction; OTel via `httpx` instrumentation; W3C `traceparent`; opt-in GenAI conventions
- [x] `sdk/type-model.mdx` — Pydantic v2 responses, `TypedDict` requests, `py.typed`, forward-compat via `model_extra`, enum values, decimal precision, CI-guarded mirror
- [x] `sdk/escape-hatches.mdx` — `with_raw_response`, `with_streaming_response`, `extra_body`/`extra_headers`/`extra_query`, per-client defaults
- [x] `sdk/previews.mdx` — per-request opt-in; per-client default; env var; `client.previews.*`; versioned identifiers; graduation lifecycle
- [x] `sdk/lifecycle.mdx` — SemVer applied to Python surface; one-minor `DeprecationWarning` window; previews follow same rule

### Reference

- [x] `sdk/reference/errors.mdx` — full exception class table; status + feature subclasses; validation error shape; helper methods
- [x] `sdk/reference/auto-generated.mdx` — `pdoc` output (build-time); inclusion/exclusion rules; navigation pointers

## 7. CLI Reference (`kova`)

### Getting started

- [x] `cli/index.mdx` — `kova` overview; resource namespace table; global flags; same-code-path-as-SDK; output and config precedence
- [x] `cli/install.mdx` — `pip install kovaserve` ships SDK + CLI; Python 3.11+; framework extras; editable installs
- [x] `cli/auth.mdx` — `kova auth login / logout / status`; profile file format; OAuth flow; file permissions
- [x] `cli/configuration.mdx` — resolution order; profiles; env vars; global flags
- [x] `cli/output.mdx` — table default; `--json` (single doc vs JSON Lines); tree rendering; ANSI colour; quiet/verbose; exit codes

### runs

- [x] `cli/runs/list.mdx` — filters, pagination, JSON
- [x] `cli/runs/get.mdx` — single Run, `--expand`, `--flat`, `--max-depth`
- [x] `cli/runs/tail.mdx` — live tail; reconnection; polling fallback
- [x] `cli/runs/cancel.mdx` — cancel from any non-terminal state; in-flight ModelCalls
- [x] `cli/runs/branch.mdx` — branch from a Checkpoint; lineage queryable

### sessions

- [x] `cli/sessions/list.mdx` — filters, `--state` accept-multiple, JSON
- [x] `cli/sessions/get.mdx` — single Session, `--expand turns / current_run`
- [x] `cli/sessions/archive.mdx` — explicit archival; `ARCHIVED` vs `EXPIRED`

### checkpoints

- [x] `cli/checkpoints/list.mdx` — filter by run / status / trigger
- [x] `cli/checkpoints/get.mdx` — full bound refs + compatibility vector
- [x] `cli/checkpoints/restore.mdx` — three modes (cold / warm-logical / warm-kv); failure modes

### budgets

- [x] `cli/budgets/create.mdx` — five dimensions, decimal-string `--cost-cents`, on-exceed
- [x] `cli/budgets/get.mdx` — live consumption; strictest dimension; state interpretation

### context

- [x] `cli/context/manifests.mdx` — `list` (filters) and `get` (`--expand segments`); admission decisions
- [x] `cli/context/segments.mdx` — `get` only; six `context_type` values; offloaded vs inline
- [x] `cli/context/artifacts.mdx` — `upload` / `list` / `get` (with `--signed`) / `delete`
- [x] `cli/context/budgets.mdx` — `create` / `get` / `update` / `admit`; distinct from run-level

### usage

- [x] `cli/usage/query.mdx` — three scopes with distinct error semantics; per-Run / Project / Tenant aggregates
- [x] `cli/usage/export.mdx` — JSONL streaming export with pricing snapshots

### keys

- [x] `cli/keys/create.mdx` — issue Bearer Keys; raw value once; four roles
- [x] `cli/keys/rotate.mdx` — atomic issue-and-revoke; grace period
- [x] `cli/keys/revoke.mdx` — revoke without replacement; revoke vs rotate

### events

- [x] `cli/events/tail.mdx` — live tail one or more streams; filters; WHATWG reconnection; useful filter recipes

### cluster   (operator)

- [x] `cli/cluster/nodes.mdx` — `kova nodes list`; live health and load
- [x] `cli/cluster/cache-lookup.mdx` — `kova cluster cache-lookup`; find which nodes hold a prefix or context identity

## 8. Cookbook   (positioning voice)

- [x] `cookbook/coding-agent.mdx` — Full CodeRuns recipe; budget + checkpoints + hooks; SKU summary; resume from failure
- [x] `cookbook/document-review.mdx` — Full DocRuns recipe; document offload; structured outputs; common workflows
- [x] `cookbook/ops-automation.mdx` — Full OpsRuns recipe; policy-controlled remediation; log offload; common workflows
- [x] `cookbook/tool-loops-with-budget-kill.mdx` — Five-dimensional ceilings; hard-stop vs degrade; per-call vs per-run vs per-loop budget
- [x] `cookbook/branching-from-checkpoint.mdx` — What-if analysis; comparing branches; multi-level lineage tree
- [x] `cookbook/private-deployment.mdx` — Full end-to-end neocloud / sovereign install + first run

## 9. Models

- [x] `models/index.mdx` — Capability matrix; recommendations by workload; tokenizer fingerprints; layering reminder

## 10. Pricing   (positioning voice)

- [x] `pricing/index.mdx` — Three billing dimensions; worked CodeRuns / OpsRuns / DocRuns examples; pricing-snapshot guarantees

## 11. Changelog

- [x] `changelog/index.mdx` — Dated entries grouped Added / Changed / Deprecated / Removed / Fixed; cross-link to lifecycle

## 12. Status

- [x] `status/index.mdx` — status.kovaserve.com + `/health` API; severity definitions; private-deployment status

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
