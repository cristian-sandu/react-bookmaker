import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Loading, ScrollToTop } from 'common/components'
import { VersionProvider } from 'common/context'
import { useAppInfo } from 'common/hooks'

import App from '../../App'

function AppProvider() {
  const { isAppReady, version, isOffline } = useAppInfo()

  return isAppReady ? (
    <Router>
      <ScrollToTop>
        <VersionProvider value={version}>
          <App isOffline={isOffline} />
        </VersionProvider>
      </ScrollToTop>
    </Router>
  ) : (
    <Loading />
  )
}

export default AppProvider
