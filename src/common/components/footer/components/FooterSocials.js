import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@material-ui/core'

import { Facebook, LinkedIn, Twitter } from 'assets/social-icons'

import { FOOTER_SOCIAL_LINKS } from '../constants'

const SOCIAL_ICONS_SIZE = 40
const sizeConfig = {
  width: SOCIAL_ICONS_SIZE,
  height: SOCIAL_ICONS_SIZE,
}

const FooterSocials = ({ isOnline }) => (
  <span style={isOnline ? { paddingTop: 10 } : {}}>
    <Link target="_blank" component="a" href={FOOTER_SOCIAL_LINKS.FACEBOOK}>
      <img src={Facebook} alt="Fb" {...sizeConfig} />
    </Link>
    <Link target="_blank" component="a" href={FOOTER_SOCIAL_LINKS.TWITTER}>
      <img src={Twitter} alt="Twitter" {...sizeConfig} />
    </Link>
    <Link target="_blank" component="a" href={FOOTER_SOCIAL_LINKS.LINKED_IN}>
      <img src={LinkedIn} alt="LinkedIn" {...sizeConfig} />
    </Link>
  </span>
)

FooterSocials.propTypes = {
  isOnline: PropTypes.bool.isRequired,
}

export default FooterSocials
