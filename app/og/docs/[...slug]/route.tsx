import { getPageImage, source } from '@/lib/source';
import { notFound } from 'next/navigation';
import { ImageResponse } from 'next/og';
import { appName } from '@/lib/shared';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export const revalidate = false;

const logoDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), 'public', 'kf.png'),
).toString('base64')}`;

export async function GET(_req: Request, { params }: RouteContext<'/og/docs/[...slug]'>) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: '#0a0a0a',
          color: '#ffffff',
          padding: '80px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoDataUrl} width={88} height={88} alt="" style={{ borderRadius: '16px' }} />
          <div style={{ display: 'flex', fontSize: '32px', color: '#a1a1aa', fontWeight: 500 }}>
            {appName}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 'auto',
            gap: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {page.data.title}
          </div>
          {page.data.description ? (
            <div
              style={{
                display: 'flex',
                fontSize: '32px',
                color: '#a1a1aa',
                lineHeight: 1.4,
              }}
            >
              {page.data.description}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    lang: page.locale,
    slug: getPageImage(page).segments,
  }));
}
