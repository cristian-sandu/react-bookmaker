import React from 'react'

import { Container, Grid, Toolbar } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import {
  DesktopHeaderNavigation,
  HeaderLogo,
  MobileHeaderNavigation,
} from './components'

import './styles.css'

function Header() {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  return (
    <Toolbar component="header">
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <HeaderLogo />
          </Grid>
          <Grid item xs={6}>
            {isMobile ? (
              <MobileHeaderNavigation />
            ) : (
              <DesktopHeaderNavigation />
            )}
          </Grid>
        </Grid>
      </Container>
    </Toolbar>
  )
}

export default Header
