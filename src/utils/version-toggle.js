import { isMobileOnly } from 'react-device-detect'
import { SITE_VERSION } from 'common/constants'
import { Crawler } from 'es6-crawler-detect/src'

const { ONLINE, OFFLINE } = SITE_VERSION

const CRW_REGEX = /googlebot|Googlebot|crawler|Googlebot-Mobile|Google favicon|Mediapartners-Google|Googlebot-Image/i
const GERMANY_CODE = 'DE'

const isGermanyCode = code => {
  if (code === undefined) return true
  return code === GERMANY_CODE
}

const isUserBot = () => {
  const crwDetect = new Crawler()
  const { userAgent } = window.navigator || {} // eslint-disable-line
  const isBotNavigator = CRW_REGEX.test(userAgent)
  return Boolean(isBotNavigator || crwDetect.isCrawler(userAgent))
}

const getAppVersion = (
  { blocheazaBoti, blocheazaAfaraGermaniei, versiuneSite, mobilModOnline } = {},
  { countryCode } = {},
) => {
  switch (true) {
    case blocheazaBoti && isUserBot():
      return OFFLINE

    case blocheazaAfaraGermaniei && !isGermanyCode(countryCode):
      return OFFLINE

    case Boolean(mobilModOnline):
      return isMobileOnly ? ONLINE : OFFLINE

    default:
      return versiuneSite
  }
}

export default getAppVersion
