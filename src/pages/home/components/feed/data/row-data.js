import { FEED_LINKS, LOGO_NAMES } from '../constants'

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
  _10BET,
  LEO_VEGAS,
  _888SPORT,
} = LOGO_NAMES

const offlineData = [
  {
    name: SPORT_BAR_BERLIN,
    location: 'Knesebeckstraße 38-49, 10719 Berlin, Deutschland',
    openingHours: 'Täglich 24 Stunden, 365 Tage im Jahr',
    reviews: 5,
    ourItem: 9.9,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[SPORT_BAR_BERLIN].LINK,
    maskedLink: FEED_LINKS[SPORT_BAR_BERLIN].MASKED_LINK,
  },
  {
    name: SPORTS_BAR_TOR_133,
    location: 'Sportsbar Tor 133, Torstraße 133, 10119 Berlin',
    openingHours: '24 Stunden geöffnet',
    reviews: 4,
    ourItem: 9.7,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[SPORTS_BAR_TOR_133].LINK,
    maskedLink: FEED_LINKS[SPORTS_BAR_TOR_133].MASKED_LINK,
  },
  {
    name: FC_MAGNET_BAR,
    location: 'Veteranenstraße 26, 10119 Berlin',
    openingHours: '24 Stunden geöffnet',
    reviews: 4,
    ourItem: 9.7,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[FC_MAGNET_BAR].LINK,
    maskedLink: FEED_LINKS[FC_MAGNET_BAR].MASKED_LINK,
  },
  {
    name: COUNTRY_CHEERS,
    location: 'Karl-Marx-Allee 65, 10243 Berlin',
    openingHours: 'Täglich 24 Stunden, 365 Tage im Jahr',
    reviews: 4,
    ourItem: 9.5,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[COUNTRY_CHEERS].LINK,
    maskedLink: FEED_LINKS[COUNTRY_CHEERS].MASKED_LINK,
  },
  {
    name: TREFFPUNKT,
    location: 'Schleißheimer Str. 125,80797 München',
    openingHours: 'Täglich 24 Stunden',
    reviews: 3,
    ourItem: 9,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[TREFFPUNKT].LINK,
    maskedLink: FEED_LINKS[TREFFPUNKT].MASKED_LINK,
  },
  {
    name: BUTCHERS,
    location: 'Kaiserstraße 135, 53113 Bonn',
    openingHours: '365 Tage im Jahr',
    reviews: 3,
    ourItem: 8.7,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[BUTCHERS].LINK,
    maskedLink: FEED_LINKS[BUTCHERS].MASKED_LINK,
  },
]

const onlineData = [
  {
    name: _22BET,
    location: '122% +22 Wettpunkte',
    openingHours: 'Live-Wetten',
    reviews: 5,
    ourItem: 9.9,
    betNow: 'WETTE JETZT',
    // eslint-disable-next-line no-underscore-dangle
    link: FEED_LINKS[_22BET].LINK,
    // eslint-disable-next-line no-underscore-dangle
    maskedLink: FEED_LINKS[_22BET].MASKED_LINK,
  },
  {
    name: KARAMBA,
    location: 'Erhalten sie eine €10-gratiswette, wenn sie €10 wetten',
    openingHours: 'Live-Wetten',
    reviews: 5,
    ourItem: 9.9,
    betNow: 'WETTE JETZT',
    link: FEED_LINKS[KARAMBA].LINK,
    maskedLink: FEED_LINKS[KARAMBA].MASKED_LINK,
  },
  {
    name: SPIN_SPORTS,
    location: 'Freiwette 200€ nach registrierung',
    openingHours: 'Live-Wetten',
    reviews: 5,
    ourItem: 9.8,
    betNow: 'WETTE JETZT',
    link: FEED_LINKS[SPIN_SPORTS].LINK,
    maskedLink: FEED_LINKS[SPIN_SPORTS].MASKED_LINK,
  },
  {
    name: _10BET,
    location: '100% Bonus bis zu 100€',
    openingHours: 'Live-Wetten',
    reviews: 4,
    ourItem: 9.7,
    betNow: 'WETTE JETZT',
    // eslint-disable-next-line no-underscore-dangle,no-underscore-dangle
    link: FEED_LINKS[_10BET].LINK,
    // eslint-disable-next-line no-underscore-dangle
    maskedLink: FEED_LINKS[_10BET].MASKED_LINK,
  },
  {
    name: LEO_VEGAS,
    location: '100€ in GratisWetten Als Neukunde Abraumen',
    openingHours: 'Live-Wetten',
    reviews: 4,
    ourItem: 9.7,
    betNow: 'WETTE JETZT',
    link: FEED_LINKS[LEO_VEGAS].LINK,
    maskedLink: FEED_LINKS[LEO_VEGAS].MASKED_LINK,
  },
  {
    name: _888SPORT,
    location: 'Willkommenbonus von bis zu 100€',
    openingHours: 'Live-Wetten',
    reviews: 3,
    ourItem: 9.5,
    betNow: 'WETTE JETZT',
    // eslint-disable-next-line no-underscore-dangle
    link: FEED_LINKS[_888SPORT].LINK,
    // eslint-disable-next-line no-underscore-dangle
    maskedLink: FEED_LINKS[_888SPORT].MASKED_LINK,
  },
]

export { offlineData, onlineData }
