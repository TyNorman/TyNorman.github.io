import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import "./Header.css";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="Header">
        <div className="Nav">
        <Link to="/" className="header_link">
          Home
        </Link>{' '}
        <Link to="/about" className="header_link">
          About Me
        </Link>
      </div>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})