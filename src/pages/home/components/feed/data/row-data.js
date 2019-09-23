import { FEED_LINKS, LOGO_NAMES } from '../constants'

const {
  BUTCHERS,
  COUNTRY_CHEERS,
  FC_MAGNET_BAR,
  SPORT_BAR_BERLIN,
  SPORTS_BAR_TOR_133,
  TREFFPUNKT,
} = LOGO_NAMES

const rowData = [
  {
    name: SPORT_BAR_BERLIN,
    location: 'Knesebeckstraße 38-49, 10719 Berlin, Deutschland',
    openingHours: 'Täglich 24 Stunden, 365 Tage im Jahr',
    reviews: 5,
    ourItem: 9.7,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[SPORT_BAR_BERLIN].LINK,
    maskedLink: FEED_LINKS[SPORT_BAR_BERLIN].MASKED_LINK,
  },
  {
    name: SPORTS_BAR_TOR_133,
    location: 'Sportsbar Tor 133, Torstraße 133, 10119 Berlin',
    openingHours: '24 Stunden geöffnet',
    reviews: 5,
    ourItem: 9.6,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[SPORTS_BAR_TOR_133].LINK,
    maskedLink: FEED_LINKS[SPORTS_BAR_TOR_133].MASKED_LINK,
  },
  {
    name: FC_MAGNET_BAR,
    location: 'Veteranenstraße 26, 10119 Berlin',
    openingHours: '24 Stunden geöffnet',
    reviews: 4,
    ourItem: 9.4,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[FC_MAGNET_BAR].LINK,
    maskedLink: FEED_LINKS[FC_MAGNET_BAR].MASKED_LINK,
  },
  {
    name: COUNTRY_CHEERS,
    location: 'Karl-Marx-Allee 65, 10243 Berlin',
    openingHours: 'Täglich 24 Stunden, 365 Tage im Jahr',
    reviews: 5,
    ourItem: 9.0,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[COUNTRY_CHEERS].LINK,
    maskedLink: FEED_LINKS[COUNTRY_CHEERS].MASKED_LINK,
  },
  {
    name: TREFFPUNKT,
    location: 'Schleißheimer Str. 125,80797 München',
    openingHours: 'Täglich 24 Stunden',
    reviews: 5,
    ourItem: 9.0,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[TREFFPUNKT].LINK,
    maskedLink: FEED_LINKS[TREFFPUNKT].MASKED_LINK,
  },
  {
    name: BUTCHERS,
    location: 'Kaiserstraße 135, 53113 Bonn',
    openingHours: '365 Tage im Jahr',
    reviews: 4,
    ourItem: 8.9,
    betNow: 'BESUCHEN',
    link: FEED_LINKS[BUTCHERS].LINK,
    maskedLink: FEED_LINKS[BUTCHERS].MASKED_LINK,
  },
]

export default rowData
