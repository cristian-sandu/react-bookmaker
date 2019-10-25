import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import classNames from 'classnames'

import { Footer, Header, Loading, ScrollToTop } from 'common/components'
import { APP_ROUTES } from 'common/constants'
import { useAppInfo } from 'common/hooks'

import * as components from 'utils/lazy-imports'
import './styles/index.css'

const { HOME, ABOUT_US, CONTACTS, PRIVACY, HORSE_RACING, FOOTBALL } = APP_ROUTES

function App() {
  const { isOffline } = useAppInfo()

  return (
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
              <Route exact path={HOME} component={components.Home} />
              <Route path={ABOUT_US} component={components.AboutUs} />
              <Route path={CONTACTS} component={components.ContactUs} />
              <Route path={PRIVACY} component={components.Privacy} />
              <Route path={HORSE_RACING} component={components.HorseRacing} />
              <Route path={FOOTBALL} component={components.Football} />
              <Route path="*" component={components.NotFound} />
            </Switch>
          </div>
          <Footer />
        </ScrollToTop>
      </Router>
    </Suspense>
  )
}

export default App
