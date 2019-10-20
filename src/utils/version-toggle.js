import { isMobileOnly } from 'react-device-detect'
import { SITE_VERSION } from 'common/constants'

const { ONLINE, OFFLINE } = SITE_VERSION

const getAppVersion = ({ siteVersion, mobileOnlineMode } = {}) => {
  switch (true) {
    case Boolean(mobileOnlineMode):
      return isMobileOnly ? ONLINE : OFFLINE

    default:
      return siteVersion
  }
}

export default getAppVersion
