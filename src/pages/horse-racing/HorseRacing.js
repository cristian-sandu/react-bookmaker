import React from 'react'
import { Container } from '@material-ui/core'
import { PageTitle, SubHeader } from 'common/components'

import './styles.css'

const HorseRacing = () => (
  <div className="content bookmaker__horse-racing">
    <Container>
      <SubHeader />
      <PageTitle
        style={{
          backgroundColor: 'rgba(86, 54, 15, 0.8)',
          color: 'white',
          borderRadius: '5px',
          padding: '5px',
        }}
        title="Galopprennsport"
      />
      <div className="bookmaker__horse-racing-text">
        <p>
          Das Finden der besten Websites für Rennwetten ist nicht immer eine leichte Aufgabe.
        </p>
        <br />
        <p>
          Nicht, wenn Wetten auf Rennen die zweithäufigsten Wetten in vielen Ländern sind. Pferderennen macht eine Geschichte mit hohen Raten bei der Generierung von viel Geld für die Wirtschaft einiger Länder
        </p>
        <br />
        <p>
          In unserer Top-Liste der Wett-Websites finden Sie die neuesten Angebote und Aktionen der besten Buchmacher für Rennen.
        </p>
      </div>
    </Container>
  </div>
)

export default HorseRacing
