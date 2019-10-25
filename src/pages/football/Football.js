import React from 'react'
import { Container } from '@material-ui/core'
import { SubHeader, PageTitle } from 'common/components'

import './styles.css'

const Football = () => (
  <div className="content bookmaker__football">
    <Container>
      <SubHeader />
      <PageTitle
        style={{
          backgroundColor: 'rgba(5, 74, 51, 0.82)',
          color: 'white',
          borderRadius: '5px',
          padding: '5px',
        }}
        title="Fußball"
      />
      <div className="bookmaker__football-text">
        <p>
          Selbst wenn Sie nur “Fußball wetten” in Google eingeben, werden Sie von vielen Möglichkeiten überwältigt sein, die vorhanden sind.
        </p>
        <br />
        <p>
          Es gibt Hunderte von verschiedenen Sportwetten für die Spieler, jede mit ihren eigenen Bonusse, Märkten, Quoten und exklusiven Eigenschaften. Mit dieser großen Auswahl ist es schwierig das beste Ziel für Ihre Wetten zu finden. Zum Glück sind Sie hier genau richtig. Wir haben detaillierte Informationen zu den führenden Wett-Websites zusammengestellt, um Ihnen alle Antworten zu geben, die Sie brauchen.
        </p>
        <br />
        <p>
          Hier finden Sie Details zu ihren Willkommensangeboten, eine kurze Zusammenfassung der wichtigsten Funktionen der Buchmacher und einen Link zu ihrer Website, damit Sie Ihren Willkommensbonus erhalten können.
        </p>
      </div>
    </Container>
  </div>
)

export default Football
