import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { isWebUri } from 'valid-url'

import {
  EXTREME_IP_LOOKUP_URL,
  SITE_VERSION,
  SITE_VERSION_URL,
  SUCCESS_STATUS_CODE,
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
    if (isWebUri(EXTREME_IP_LOOKUP_URL)) {
      axios
        .get(EXTREME_IP_LOOKUP_URL)
        .then(({ data: userInfo, status } = {}) => {
          if (status === SUCCESS_STATUS_CODE) {
            setUserData(userInfo)
          }
        })
        // eslint-disable-next-line no-console
        .catch(error => console.log(error))
    }
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
