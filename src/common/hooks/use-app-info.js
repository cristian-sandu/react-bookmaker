import { useEffect, useMemo, useState } from 'react'
import { isWebUri } from 'valid-url'
import axios from 'axios'

import {
  EXTREME_IP_LOOKUP_URL,
  SITE_VERSION,
  SITE_VERSION_URL,
  SUCCESS_STATUS_CODE,
} from 'common/constants'
import getAppVersion from 'utils/version-toggle'

const { OFFLINE } = SITE_VERSION

function useAppInfo() {
  const [config, setConfig] = useState()
  const [userData, setUserData] = useState()
  const [hasError, setError] = useState(false)

  useEffect(() => {
    axios.get(SITE_VERSION_URL).then(({ data: appConfig }) => {
      setConfig(appConfig)
    })
  }, [])

  useEffect(() => {
    if (isWebUri(EXTREME_IP_LOOKUP_URL)) {
      axios
        .get(EXTREME_IP_LOOKUP_URL, { timeout: 3000 })
        .then(({ data: userInfo, status } = {}) => {
          if (status === SUCCESS_STATUS_CODE) {
            setUserData(userInfo)
            setError(false)
          } else {
            setError(true)
          }
        })
        .catch(() => setError(true))
    } else {
      setError(true)
    }
  }, [])

  const version = useMemo(() => getAppVersion(config, userData, hasError), [
    config,
    userData,
    hasError,
  ])

  const isOffline = useMemo(() => version === OFFLINE, [version])

  const isAppReady = useMemo(() => {
    switch (true) {
      case !version:
        return false

      case version && hasError:
        return true

      default:
        return Boolean(version && userData)
    }
  }, [userData, version, hasError])

  return {
    isAppReady,
    version,
    userData,
    isOffline,
    config,
  }
}

export default useAppInfo
