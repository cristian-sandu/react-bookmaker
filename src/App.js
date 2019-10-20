import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'
import classNames from 'classnames'

import { SiteVersionContext } from 'common/context'
import { APP_ROUTES, SITE_VERSION } from 'common/constants'
import {
  Footer,
  Header,
  Loading,
  NotFound,
  ScrollToTop,
} from 'common/components'
import getAppVersion from 'utils/version-toggle'

import './styles/index.css'

const Home = lazy(() => import('pages/home/Home'))
const AboutUs = lazy(() => import('pages/about_us/AboutUs'))
const ContactUs = lazy(() => import('pages/contact_us/ContactUs'))
const Privacy = lazy(() => import('pages/privacy/Privacy'))
const Football = lazy(() => import('pages/football/Football'))
const HorseRacing = lazy(() => import('pages/horse-racing/HorseRacing'))

const { HOME, ABOUT_US, CONTACTS, PRIVACY, HORSE_RACING, FOOTBALL } = APP_ROUTES
const { OFFLINE } = SITE_VERSION

const App = () => {
  const [version, setVersion] = useState()
  const isOffline = version === OFFLINE

  useEffect(() => {
    axios.get('mock/siteVersion.json').then(({ data }) => {
      const appVersion = getAppVersion(data)
      setVersion(appVersion)
    })
  })

  return version ? (
    <SiteVersionContext.Provider value={version}>
      <Suspense fallback={<Loading />}>
        <Router>
          <ScrollToTop>
            <Header />
            <div
              className={classNames('bookmaker__body', {
                'bookmaker__body-offline': isOffline,
              })}
            >
              <Switch>
                <Route exact path={HOME} component={Home} />
                <Route path={ABOUT_US} component={AboutUs} />
                <Route path={CONTACTS} component={ContactUs} />
                <Route path={PRIVACY} component={Privacy} />
                <Route path={HORSE_RACING} component={HorseRacing} />
                <Route path={FOOTBALL} component={Football} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </ScrollToTop>
        </Router>
      </Suspense>
    </SiteVersionContext.Provider>
  ) : null
}

export default App
