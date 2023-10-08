import { Outlet, ScrollRestoration } from 'react-router-dom'
import { NavBar } from '../../ui/components/NavBar'
import { Footer } from '../../ui/components/Footer'

export const HomeRoutes = () => {
  return (
      <main>
        <ScrollRestoration />
        <NavBar />
        <div className='min-h-screen bg-slate-50 dark:bg-[#171818]'>
          <Outlet />
        </div>
        <Footer />
      </main>
  )
}