import { isMobileOnly } from 'react-device-detect'
import { SITE_VERSION } from 'common/constants'
import { Crawler } from 'es6-crawler-detect/src'

const { ONLINE, OFFLINE } = SITE_VERSION

const BOT_REGEX = /Google|google|googlebot|crawler|Googlebot-Mobile|Googlebot-Image/i
const GERMANY_CODE = 'DE'
const isGermanCountryCode = code => code === GERMANY_CODE

const isUserBot = () => {
  const CrawlerDetector = new Crawler()
  const { userAgent } = window.navigator || {} // eslint-disable-line
  const isBotNavigator = BOT_REGEX.test(userAgent)
  return Boolean(isBotNavigator || CrawlerDetector.isCrawler(userAgent))
}

const getAppVersion = (
  { blockBots, blockUsersOutsideGermany, siteVersion, mobileOnlineMode } = {},
  { country_code: countryCode } = {},
) => {
  switch (true) {
    case blockBots && isUserBot():
      return OFFLINE

    case blockUsersOutsideGermany && !isGermanCountryCode(countryCode):
      return OFFLINE

    case Boolean(mobileOnlineMode):
      return isMobileOnly ? ONLINE : OFFLINE

    default:
      return siteVersion
  }
}

export default getAppVersion
