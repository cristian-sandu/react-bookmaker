import React, { useContext, useMemo } from 'react'
import { Container, Link } from '@material-ui/core'

import { Facebook, LinkedIn, Twitter } from 'assets/icons'
import { PageTitle, SubHeader } from 'common/components'
import { FOOTER_SOCIAL_LINKS } from 'common/components/footer/constants'
import SiteVersionContext from 'common/context/siteVersionContext'
import { SITE_VERSION } from 'common/constants'

import './styles.css'

const { ONLINE } = SITE_VERSION

const AboutUs = () => {
  const version = useContext(SiteVersionContext)
  const isOnline = useMemo(() => version === ONLINE, [version])

  return (
    <div className="content bookmaker__about_us">
      <Container>
        <SubHeader />
        <div
          className={
            isOnline
              ? 'bookmaker__about_us-text__online'
              : 'bookmaker__about_us-text'
          }
        >
          <PageTitle title="Über Uns" />
          {isOnline && (
            <>
              <p>
                {`Als eine nutzerfreundliche Firma bemühen wir uns Sie mit allem
                auszustatten, dass Sie über die online Wettbranche wissen
                müssen. Damit Sie nicht zahlreiche Wettseien durchlesen und
                darauf hoffen müssen eine vertrauenswürdige Seite zu finden,
                bieten wir hier alle Informationen die Sie benötigen, an einem
                Ort. Wir suchen immer nach Wegen um unsere Webseite zu
                verbessern und wenn Sie gerne zusätzliche online Wettwebseiten
                sehen möchten, dann ermutigen wir Sie, sich mit uns in
                Verbindung zu setzen, vor allem wenn Sie zusätzliche Artikel
                oder Anleitungen gerne auf unsere Webseite hinzufügen wollen.`}
              </p>
              <p>
                {`Diese Website ist für alle Wettspieler von Vorteil, egal wo Sie auf der Welt leben oder auf welche Sportsp`}
              </p>
            </>
          )}
          <span>
            <Link
              id="loading"
              target="_blank"
              component="a"
              href={FOOTER_SOCIAL_LINKS.FACEBOOK}
            >
              <Facebook size={50} />
            </Link>
            <Link
              target="_blank"
              component="a"
              href={FOOTER_SOCIAL_LINKS.TWITTER}
            >
              <Twitter size={50} />
            </Link>
            <Link
              target="_blank"
              component="a"
              href={FOOTER_SOCIAL_LINKS.LINKED_IN}
            >
              <LinkedIn size={50} />
            </Link>
          </span>
        </div>
      </Container>
    </div>
  )
}

export default AboutUs
