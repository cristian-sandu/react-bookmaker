import React, { useContext, useMemo } from 'react'
import { Container } from '@material-ui/core'

import SiteVersionContext from 'common/context/siteVersionContext'
import { SITE_VERSION } from 'common/constants'

import { FooterNavigation, FooterRights, FooterSocials } from './components'
import BeResponsible from './icons/beResponsible.png'
import './styles.css'

const { ONLINE } = SITE_VERSION

const Footer = () => {
  const version = useContext(SiteVersionContext)
  const isOnline = useMemo(() => version === ONLINE, [version])

  return (
    <footer className="bookmaker__footer">
      <Container>
        <div className="row">
          <div className="column" style={{ justifyContent: 'center' }}>
            <FooterRights />
          </div>
          <div
            className="column"
            style={{ paddingTop: '1%', justifyContent: 'center' }}
          >
            <div className="column">
              <FooterSocials isOnline={isOnline} />
              {isOnline && (
                <span className="be-responsible-container">
                  <span style={{ fontSize: '17px' }}>
                    <strong> RESPONSIBLE </strong>
                  </span>
                  <span className="be-responsible-icon">
                    <img
                      alt="Be Responsible"
                      width={35}
                      height={35}
                      src={BeResponsible}
                    />
                  </span>
                </span>
              )}
            </div>
          </div>
          <div className="column" style={{ justifyContent: 'center' }}>
            <FooterNavigation />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
