import React, { useContext, useMemo } from 'react'

import { Container } from '@material-ui/core'

import { SubFooter, SubHeader } from 'common/components'
import SiteVersionContext from 'common/context/siteVersionContext'
import { SITE_VERSION } from 'common/constants'

import { Feed } from './components'
import '../../styles/index.css'

const { ONLINE } = SITE_VERSION

const Home = () => {
  const version = useContext(SiteVersionContext)
  const isOnline = useMemo(() => version === ONLINE, [version])

  return (
    <div
      className="content bookmaker__contact-us bookmaker__background-online"
      style={{ minHeight: '96vh' }}
    >
      <Container className="content">
        <SubHeader />
        <Feed isOnline={isOnline} />
        <SubFooter isOnline={isOnline} />
      </Container>
    </div>
  )
}

export default Home
