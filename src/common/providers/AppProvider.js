import React from 'react'

import { Loading } from 'common/components'
import { VersionProvider } from 'common/context'
import { useAppInfo } from 'common/hooks'

import App from '../../App'

function AppProvider() {
  const { isAppReady, version } = useAppInfo()

  return isAppReady ? (
    <VersionProvider value={version}>
      <App />
    </VersionProvider>
  ) : (
    <Loading />
  )
}

export default AppProvider
