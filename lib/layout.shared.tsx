import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/kf.png"
            alt="KovaServe"
            width={28}
            height={28}
            className="rounded-sm"
            priority
          />
          <span>{appName}</span>
        </>
      ),
      url: 'https://kovaserve.com',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
