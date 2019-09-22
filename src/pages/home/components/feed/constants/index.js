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
  [LOGO_NAMES.BUTCHERS]: `${APP_URL}/go/http://butchers-sportsbar.de`,
  [LOGO_NAMES.COUNTRY_CHEERS]: `${APP_URL}/go/http://countrycheers.de`,
  [LOGO_NAMES.FC_MAGNET_BAR]: `${APP_URL}/go/http://fcmagnetbar.de`,
  [LOGO_NAMES.SPORT_BAR_BERLIN]: `${APP_URL}/go/http://sport-bar-berlin.de`,
  [LOGO_NAMES.SPORTS_BAR_TOR_133]: `${APP_URL}/go/http://sportsbartor133.business.site`,
  [LOGO_NAMES.TREFFPUNKT]: `${APP_URL}/go/http://treffpunkt-sportsbar.de`,
}

export default null
