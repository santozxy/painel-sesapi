/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PainelIndexImport } from './routes/painel/index'

// Create/Update Routes

const PainelIndexRoute = PainelIndexImport.update({
  path: '/painel/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/painel/': {
      preLoaderRoute: typeof PainelIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([PainelIndexRoute])

/* prettier-ignore-end */
