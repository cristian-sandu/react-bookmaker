import React from 'react'
import { Link } from 'react-router-dom'

import { APP_ROUTES } from 'common/constants'
import Logo from '../../../../assets/logo'

const HeaderLogo = () => (
  <div className="bookmaker__logo">
    <Link to={APP_ROUTES.HOME}>
      <Logo />
    </Link>
  </div>
)

export default HeaderLogo
