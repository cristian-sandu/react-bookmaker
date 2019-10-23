import { APP_URL } from 'common/constants'

export const LOGO_NAMES = {
  // Offline
  BUTCHERS: 'BUTCHERS',
  COUNTRY_CHEERS: 'COUNTRY_CHEERS',
  FC_MAGNET_BAR: 'FC_MAGNET_BAR',
  SPORT_BAR_BERLIN: 'SPORT_BAR_BERLIN',
  SPORTS_BAR_TOR_133: 'SPORTS_BAR_TOR_133',
  TREFFPUNKT: 'TREFFPUNKT',
  // Online
  SPIN_SPORTS: 'Spin Sports',
  _10BET: '10BET',
  LEO_VEGAS: 'Leo Vegas',
  _888SPORT: '888Sport',
}

export const FEED_LINKS = {
  [LOGO_NAMES.BUTCHERS]: {
    LINK: 'http://butchers-sportsbar.de',
    MASKED_LINK: `${APP_URL}/go/butchers-sportsbar/655092`,
  },
  [LOGO_NAMES.COUNTRY_CHEERS]: {
    LINK: 'http://countrycheers.de',
    MASKED_LINK: `${APP_URL}/go/countrycheers/442891`,
  },
  [LOGO_NAMES.FC_MAGNET_BAR]: {
    LINK: 'http://fcmagnetbar.de',
    MASKED_LINK: `${APP_URL}/go/fcmagnetbar/909211`,
  },
  [LOGO_NAMES.SPORT_BAR_BERLIN]: {
    LINK: 'http://sport-bar-berlin.de',
    MASKED_LINK: `${APP_URL}/go/sport-bar-berlin/332671`,
  },
  [LOGO_NAMES.SPORTS_BAR_TOR_133]: {
    LINK: 'http://sportsbartor133.business.site',
    MASKED_LINK: `${APP_URL}/go/sportsbartor-business/880433`,
  },
  [LOGO_NAMES.TREFFPUNKT]: {
    LINK: 'http://treffpunkt-sportsbar.de',
    MASKED_LINK: `${APP_URL}/go/treffpunkt-sportsbar/222981`,
  },
  // Online
  [LOGO_NAMES.SPIN_SPORTS]: {
    LINK: 'https://www.spinsports.com/de/?s=bfp18821&a=bfpadid112425',
    MASKED_LINK: `${APP_URL}/go/spinsports/999032`,
  },
  // eslint-disable-next-line no-underscore-dangle
  [LOGO_NAMES._10BET]: {
    LINK:
      'https://sports.10bet.com/welcome-bonus-sports-med/en/index.html?btag=a_53407b_5161c_&siteid=53407',
    MASKED_LINK: `${APP_URL}/go/sports-10-bet/521099`,
  },
  [LOGO_NAMES.LEO_VEGAS]: {
    LINK: 'https://ads.leovegas.com/redirect.aspx?pid=3651141&bid=13309',
    MASKED_LINK: `${APP_URL}/go/leo-vegas/999444`,
  },
  // eslint-disable-next-line no-underscore-dangle
  [LOGO_NAMES._888SPORT]: {
    LINK: 'https://www.888sport.com/de/#/home',
    MASKED_LINK: `${APP_URL}/go/888-sport/888092`,
  },
}

export default null
