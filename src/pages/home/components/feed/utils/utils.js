import Butchers from '../images/butchers.png'
import CountryCheers from '../images/country_cheers.png'
import FCMagnetBar from '../images/fc_magnet_bar.png'
import SportBarBerlin from '../images/sport_bar_berlin.png'
import SportsBarTor133 from '../images/sports_bar_tor_133.png'
import Treffpunkt from '../images/treffpunkt.png'
import _22Bet from '../images/22bet.jpg'
import Karamba from '../images/karamba.jpg'
import SpinSports from '../images/spin_sports.jpg'
import LeoVegas from '../images/leovegas.png'
import _888Sport from '../images/888Sports.png'
import _10Bet from '../images/10bet.jpg'
import { LOGO_NAMES } from '../constants'

const {
  BUTCHERS,
  COUNTRY_CHEERS,
  FC_MAGNET_BAR,
  SPORT_BAR_BERLIN,
  SPORTS_BAR_TOR_133,
  TREFFPUNKT,
  _22BET,
  KARAMBA,
  SPIN_SPORTS,
  LEO_VEGAS,
  _888SPORT,
  _10BET,
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

    case _22BET:
      return _22Bet

    case KARAMBA:
      return Karamba

    case SPIN_SPORTS:
      return SpinSports

    case LEO_VEGAS:
      return LeoVegas

    case _888SPORT:
      return _888Sport

    case _10BET:
      return _10Bet

    default:
      return null
  }
}

export default null
