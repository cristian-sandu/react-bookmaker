import { isMobileOnly } from 'react-device-detect'
import { SITE_VERSION } from 'common/constants'
import { Crawler } from 'es6-crawler-detect/src'

const { ONLINE, OFFLINE } = SITE_VERSION

const BOT_REGEX = /Google|google|googlebot|crawler|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google/i

const checkIsBot = () => {
  const CrawlerDetector = new Crawler()
  const { userAgent } = window.navigator || {} // eslint-disable-line
  const isBotNavigator = BOT_REGEX.test(userAgent)
  return Boolean(isBotNavigator || CrawlerDetector.isCrawler(userAgent))
}

const getAppVersion = ({ siteVersion, mobileOnlineMode } = {}) => {
  switch (true) {
    case checkIsBot():
      return OFFLINE

    case Boolean(mobileOnlineMode):
      return isMobileOnly ? ONLINE : OFFLINE

    default:
      return siteVersion
  }
}

export default getAppVersion
