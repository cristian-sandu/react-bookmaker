import React from 'react'
import { Link } from 'react-router-dom'

import { APP_ROUTES } from 'common/constants'
import { FOOTER_LINKS as LINKS } from '../constants'

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: 10,
}

const FooterNavigation = () => (
  <div className="row">
    <Link
      className="column info__column"
      style={linkStyle}
      to={APP_ROUTES.ABOUT_US}
    >
      {LINKS.ABOUT_US}
    </Link>
    <Link
      className="column info__column"
      style={linkStyle}
      to={APP_ROUTES.CONTACTS}
    >
      {LINKS.CONTACTS}
    </Link>
    <Link
      className="column info__column"
      style={linkStyle}
      to={APP_ROUTES.PRIVACY}
    >
      {LINKS.PRIVACY}
    </Link>
  </div>
)

export default FooterNavigation
