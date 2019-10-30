import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'

import {
  EXTREME_IP_LOOKUP_URL,
  SITE_VERSION,
  SITE_VERSION_URL,
} from 'common/constants'
import getAppVersion from 'utils/version-toggle'

const { OFFLINE } = SITE_VERSION

function useAppInfo() {
  const [version, setVersion] = useState()
  const [userData, setUserData] = useState()

  useEffect(() => {
    axios.get(SITE_VERSION_URL).then(({ data: appConfig }) => {
      const appVersion = getAppVersion(appConfig, userData)
      setVersion(appVersion)
    })
  }, [userData])

  useEffect(() => {
    axios
      .get(EXTREME_IP_LOOKUP_URL)
      .then(({ data: userInfo }) => {
        setUserData(userInfo)
      })
      // eslint-disable-next-line no-console
      .catch(error => console.log(error))
  }, [])

  const isOffline = useMemo(() => version === OFFLINE, [version])

  const isAppReady = useMemo(() => Boolean(version && userData), [
    userData,
    version,
  ])

  return {
    isAppReady,
    version,
    userData,
    isOffline,
  }
}

export default useAppInfo
