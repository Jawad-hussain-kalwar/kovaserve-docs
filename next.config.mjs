import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const conceptRedirects = [
  // layers (layered-model.mdx -> layers/index.mdx)
  ['layered-model', 'layers'],
  ['execution-substrate', 'layers/execution-substrate'],
  ['control-plane', 'layers/control-plane'],
  ['runtime-wedge', 'layers/runtime-wedge'],
  // run-hierarchy
  ['runs', 'run-hierarchy/runs'],
  ['sub-runs', 'run-hierarchy/sub-runs'],
  ['steps', 'run-hierarchy/steps'],
  ['step-types', 'run-hierarchy/step-types'],
  ['model-calls', 'run-hierarchy/model-calls'],
  ['run-state-machine', 'run-hierarchy/run-state-machine'],
  ['step-state-machine', 'run-hierarchy/step-state-machine'],
  ['identity-and-ids', 'run-hierarchy/identity-and-ids'],
  // continuity
  ['sessions', 'continuity/sessions'],
  ['session-state-machine', 'continuity/session-state-machine'],
  ['current-manifest', 'continuity/current-manifest'],
  // recovery
  ['checkpoints', 'recovery/checkpoints'],
  ['checkpoint-state-machine', 'recovery/checkpoint-state-machine'],
  ['state-handles', 'recovery/state-handles'],
  ['resume-flow', 'recovery/resume-flow'],
  ['retries', 'recovery/retries'],
  ['branches', 'recovery/branches'],
  ['branch-flow', 'recovery/branch-flow'],
  // context
  ['context-manifests', 'context/context-manifests'],
  ['context-segments', 'context/context-segments'],
  ['context-artifacts', 'context/context-artifacts'],
  ['compaction-records', 'context/compaction-records'],
  ['compaction-lineage', 'context/compaction-lineage'],
  ['segment-types', 'context/segment-types'],
  ['renderer-versions', 'context/renderer-versions'],
  // memory (memory.mdx -> memory/index.mdx; URL unchanged, no redirect needed)
  ['memory-scopes', 'memory/memory-scopes'],
  ['memory-entries', 'memory/memory-entries'],
  ['memory-store', 'memory/memory-store'],
  // tools
  ['tool-catalogs', 'tools/tool-catalogs'],
  ['tool-context-disposition', 'tools/tool-context-disposition'],
  ['tool-governance', 'tools/tool-governance'],
  // policy
  ['budgets', 'policy/budgets'],
  ['budget-state-machine', 'policy/budget-state-machine'],
  ['context-budgets', 'policy/context-budgets'],
  ['context-budget-state-machine', 'policy/context-budget-state-machine'],
  ['policy-scopes', 'policy/policy-scopes'],
  ['admission', 'policy/admission'],
  // routing
  ['kv-cache', 'routing/kv-cache'],
  ['manifest-aware-routing', 'routing/manifest-aware-routing'],
  ['kv-index', 'routing/kv-index'],
  ['placement-hints', 'routing/placement-hints'],
  ['cached-tokens', 'routing/cached-tokens'],
  // cost
  ['cost-model', 'cost/cost-model'],
  ['pricing-snapshots', 'cost/pricing-snapshots'],
  ['cost-per-completed-run', 'cost/cost-per-completed-run'],
  // tenancy (tenancy.mdx -> tenancy/index.mdx; URL unchanged, no redirect needed)
  ['tenants', 'tenancy/tenants'],
  ['projects', 'tenancy/projects'],
  ['environments', 'tenancy/environments'],
  ['keys', 'tenancy/keys'],
  // events
  ['event-envelope', 'events/event-envelope'],
  // deployment
  ['byo-runtime', 'deployment/byo-runtime'],
  ['managed-runtime', 'deployment/managed-runtime'],
  ['managed-cloud', 'deployment/managed-cloud'],
  ['private-deployment', 'deployment/private-deployment'],
  // runtime
  ['runtime-architecture', 'runtime/runtime-architecture'],
  ['runtime-execution-semantics', 'runtime/runtime-execution-semantics'],
  ['workers', 'runtime/workers'],
  ['sandboxes', 'runtime/sandboxes'],
  ['tool-invocations', 'runtime/tool-invocations'],
  ['workspaces', 'runtime/workspaces'],
  ['workspace-artifacts', 'runtime/workspace-artifacts'],
  ['runtime-local-state', 'runtime/runtime-local-state'],
  ['runtime-observability', 'runtime/runtime-observability'],
  // managed-agents (managed-agents.mdx -> managed-agents/index.mdx; URL unchanged)
  ['coderuns', 'managed-agents/coderuns'],
  ['opsruns', 'managed-agents/opsruns'],
  ['docruns', 'managed-agents/docruns'],
];

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: true,
      },
      ...conceptRedirects.map(([from, to]) => ({
        source: `/docs/concepts/${from}`,
        destination: `/docs/concepts/${to}`,
        permanent: true,
      })),
    ];
  },
};

export default withMDX(config);
