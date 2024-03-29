import { isMobileOnly } from 'react-device-detect'
import { Crawler } from 'es6-crawler-detect/src'

import { SITE_VERSION } from 'common/constants'

const { ONLINE, OFFLINE } = SITE_VERSION
const GERMANY_CODE = 'DE'
const CRW_REGEX = /googlebot|Googlebot|crawler|Googlebot-Mobile|Google favicon|Mediapartners-Google|Googlebot-Image/i

const isNotGermany = (countryCode, hasError) => {
  if (hasError) return false
  return countryCode !== GERMANY_CODE
}

export const isUserBot = () => {
  const crwDetect = new Crawler()
  const { userAgent } = window.navigator || {} // eslint-disable-line
  const isBotNavigator = CRW_REGEX.test(userAgent)
  return Boolean(isBotNavigator || crwDetect.isCrawler(userAgent))
}

const getAppVersion = (
  { blocheazaBoti, blocheazaAfaraGermaniei, versiuneSite, mobilModOnline } = {},
  { countryCode } = {},
  hasError,
) => {
  switch (true) {
    case blocheazaBoti && isUserBot():
      return OFFLINE

    case blocheazaAfaraGermaniei && isNotGermany(countryCode, hasError):
      return OFFLINE

    case Boolean(mobilModOnline):
      return isMobileOnly ? ONLINE : OFFLINE

    default:
      return versiuneSite
  }
}

export default getAppVersion
