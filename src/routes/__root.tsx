/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import * as React from 'react'
import appCss from '~/styles/app.css?url'
import { seo } from '~/utils/seo';
import favicon32 from "./SEO-assets/32x32favicon.png";
import favicon16 from "./SEO-assets/16x16favicon.png";
import favicon180 from "./SEO-assets/180x180favicon.png";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title:
          'pokeredgeAI',
        description: `PokerEdge is an AI-powered intelligence layer that helps players understand decisions, patterns, and risk in real time, without telling them what to do.`,
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: favicon180,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: favicon32,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: favicon16,
      },
      { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
      { rel: 'icon', href: favicon16 },
    ],
    scripts: [
      {
        src: '/customScript.js',
        type: 'text/javascript',
      },
    ],
  }),
  
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <hr />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
