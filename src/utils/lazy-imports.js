import { lazy } from 'react'

export const Home = lazy(() => import('pages/home/Home'))
export const AboutUs = lazy(() => import('pages/about_us/AboutUs'))
export const ContactUs = lazy(() => import('pages/contact_us/ContactUs'))
export const Privacy = lazy(() => import('pages/privacy/Privacy'))
export const Football = lazy(() => import('pages/football/Football'))
export const HorseRacing = lazy(() => import('pages/horse-racing/HorseRacing'))
export const NotFound = lazy(() =>
  import('common/components/not-found/NotFound'),
)
