import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { SITE_VERSION } from 'common/constants'

import getAppVersion from 'utils/version-toggle'

const { OFFLINE } = SITE_VERSION

function useAppInfo() {
  const [version, setVersion] = useState()
  const [userData, setUserData] = useState()

  useEffect(() => {
    axios.get('mock/siteVersion.json').then(({ data }) => {
      const appVersion = getAppVersion(data)
      setVersion(appVersion)
    })
  }, [])

  useEffect(() => {
    axios.get('https://ipapi.co/json').then(({ data }) => {
      setUserData(data)
    })
  }, [])

  const isOffline = useMemo(() => version === OFFLINE, [version])

  const isAppReady = useMemo(() => Boolean(version && userData), [userData, version])

  return {
    isAppReady,
    version,
    userData,
    isOffline,
  }
}

export default useAppInfo
