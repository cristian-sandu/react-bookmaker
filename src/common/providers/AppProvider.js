import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Loading, ScrollToTop } from 'common/components'
import { VersionProvider } from 'common/context'
import { useAppInfo } from 'common/hooks'

import App from '../../App'

function AppProvider() {
  const { isAppReady, version } = useAppInfo()

  return isAppReady ? (
    <Router>
      <VersionProvider value={version}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </VersionProvider>
    </Router>
  ) : (
    <Loading />
  )
}

export default AppProvider
