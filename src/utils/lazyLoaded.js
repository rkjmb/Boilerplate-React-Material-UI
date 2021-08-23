import { lazy } from 'react'

const Home = lazy(() => import('../pages/home/Home'))
const NotFound = lazy(() => import('../pages/notFound/NotFound'))

export { Home, NotFound }
