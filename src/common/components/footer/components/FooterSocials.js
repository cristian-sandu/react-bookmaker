import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@material-ui/core'

import { Facebook, LinkedIn, Twitter } from 'assets/icons'

import { FOOTER_SOCIAL_LINKS } from '../constants'

const FooterSocials = ({ isOnline }) => (
  <span style={isOnline ? { paddingTop: 10 } : {}}>
    <Link target="_blank" component="a" href={FOOTER_SOCIAL_LINKS.FACEBOOK}>
      <Facebook />
    </Link>
    <Link target="_blank" component="a" href={FOOTER_SOCIAL_LINKS.TWITTER}>
      <Twitter />
    </Link>
    <Link target="_blank" component="a" href={FOOTER_SOCIAL_LINKS.LINKED_IN}>
      <LinkedIn />
    </Link>
  </span>
)

FooterSocials.propTypes = {
  isOnline: PropTypes.bool.isRequired,
}

export default FooterSocials
