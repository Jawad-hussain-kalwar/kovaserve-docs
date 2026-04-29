import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center text-center flex-1 px-6">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">KovaServe Docs</h1>
      <p className="text-fd-muted-foreground max-w-xl mb-8">
        The Agentic Execution Cloud for neoclouds and private AI environments.
        Documentation, SDK references, and API specifications.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center justify-center rounded-md bg-fd-primary text-fd-primary-foreground px-5 py-2.5 font-medium hover:opacity-90"
      >
        Read the docs
      </Link>
    </div>
  );
}
