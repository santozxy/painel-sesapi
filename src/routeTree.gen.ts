/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PainelIndexImport } from './routes/painel/index'
import { Route as PainelLoginImport } from './routes/painel/login'

// Create/Update Routes

const PainelIndexRoute = PainelIndexImport.update({
  path: '/painel/',
  getParentRoute: () => rootRoute,
} as any)

const PainelLoginRoute = PainelLoginImport.update({
  path: '/painel/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/painel/login': {
      id: '/painel/login'
      path: '/painel/login'
      fullPath: '/painel/login'
      preLoaderRoute: typeof PainelLoginImport
      parentRoute: typeof rootRoute
    }
    '/painel/': {
      id: '/painel/'
      path: '/painel'
      fullPath: '/painel'
      preLoaderRoute: typeof PainelIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  PainelLoginRoute,
  PainelIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/painel/login",
        "/painel/"
      ]
    },
    "/painel/login": {
      "filePath": "painel/login.tsx"
    },
    "/painel/": {
      "filePath": "painel/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
