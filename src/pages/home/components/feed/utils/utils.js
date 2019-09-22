import Butchers from '../images/butchers.png'
import CountryCheers from '../images/country_cheers.png'
import FCMagnetBar from '../images/fc_magnet_bar.png'
import SportBarBerlin from '../images/sport_bar_berlin.png'
import SportsBarTor133 from '../images/sports_bar_tor_133.png'
import Treffpunkt from '../images/treffpunkt.png'

import { LOGO_NAMES } from '../constants'

const {
  BUTCHERS,
  COUNTRY_CHEERS,
  FC_MAGNET_BAR,
  SPORT_BAR_BERLIN,
  SPORTS_BAR_TOR_133,
  TREFFPUNKT,
} = LOGO_NAMES

export const getImageByName = name => {
  switch (name) {
    case BUTCHERS:
      return Butchers

    case COUNTRY_CHEERS:
      return CountryCheers

    case FC_MAGNET_BAR:
      return FCMagnetBar

    case SPORT_BAR_BERLIN:
      return SportBarBerlin

    case SPORTS_BAR_TOR_133:
      return SportsBarTor133

    case TREFFPUNKT:
      return Treffpunkt

    default:
      return null
  }
}

export default null
