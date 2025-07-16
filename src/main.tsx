import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

import { ParallaxProvider } from 'react-scroll-parallax';

const memoryHistory = createMemoryHistory({
  initialEntries: ['/'],
})

// Create a new router instance
const router = createRouter({ routeTree, history: memoryHistory });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </StrictMode>
  )
}