import { useEffect, useMemo, useState } from 'react'
import { always } from 'ramda'
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
const noop = always(undefined)

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
    if (!isWebUri(EXTREME_IP_LOOKUP_URL)) return
    axios
      .get(EXTREME_IP_LOOKUP_URL, { timeout: 500 })
      .then(({ data: userInfo, status } = {}) => {
        if (status === SUCCESS_STATUS_CODE) {
          setUserData(userInfo)
        }
      })
      .catch(noop)
  }, [])

  const isOffline = useMemo(() => version === OFFLINE, [version])

  const isAppReady = useMemo(() => {
    switch (true) {
      case !version:
        return false

      case version && !userData:
        return true

      default:
        return Boolean(version && userData)
    }
  }, [userData, version])

  return {
    isAppReady,
    version,
    userData,
    isOffline,
  }
}

export default useAppInfo
