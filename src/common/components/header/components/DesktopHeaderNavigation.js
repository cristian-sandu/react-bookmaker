import React from 'react'
import { instanceOf } from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import { Box } from '@material-ui/core'

import { APP_ROUTES } from 'common/constants'

import { HEADER_LINKS } from '../constants'

const linkStyle = ({ pathname }, target) => ({
  color: 'white',
  textDecoration: pathname === target ? 'underline' : 'none',
})

const DesktopHeaderNavigation = ({ location }) => (
  <Box className="bookmaker__header_navigation" style={{ display: 'flex' }}>
    <Box ml={5}>
      <Link style={linkStyle(location, APP_ROUTES.HOME)} to={APP_ROUTES.HOME}>
        {HEADER_LINKS.HOME}
      </Link>
    </Box>
    <Box ml={5}>
      <Link
        style={linkStyle(location, APP_ROUTES.FOOTBALL)}
        to={APP_ROUTES.FOOTBALL}
      >
        {HEADER_LINKS.FOOTBALL}
      </Link>
    </Box>
    <Box ml={5}>
      <Link
        style={linkStyle(location, APP_ROUTES.HORSE_RACING)}
        to={APP_ROUTES.HORSE_RACING}
      >
        {HEADER_LINKS.HORSE_RACING}
      </Link>
    </Box>
  </Box>
)

DesktopHeaderNavigation.propTypes = {
  location: instanceOf(Object).isRequired,
}

export default withRouter(DesktopHeaderNavigation)
