import { APP_URL } from 'common/constants'

export const LOGO_NAMES = {
  BUTCHERS: 'BUTCHERS',
  COUNTRY_CHEERS: 'COUNTRY_CHEERS',
  FC_MAGNET_BAR: 'FC_MAGNET_BAR',
  SPORT_BAR_BERLIN: 'SPORT_BAR_BERLIN',
  SPORTS_BAR_TOR_133: 'SPORTS_BAR_TOR_133',
  TREFFPUNKT: 'TREFFPUNKT',
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
}

export default null
