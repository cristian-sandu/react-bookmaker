import React from 'react'
import { Typography } from '@material-ui/core'
import { bool } from 'prop-types'

import './subfooter.css'

const style = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  borderRadius: 9,
  padding: 15,
  marginTop: 10,
  color: 'white',
}

const SubFooter = ({ isOnline }) => (
  <Typography component="div" style={style}>
    {isOnline ? (
      <span>
        <p style={{ textAlign: 'center' }}>
          <strong style={{ fontSize: 23, paddingLeft: 15 }}>
            Haben Sie Ihre Sport Leidenschaft mit online Wetten auf ein neues
            Level gesetzt? Haben Sie sich in der dichten Wettwelt verlaufen?
            Dann sind sie am richtigen Ort für volle Aufregung und nützliche
            Anleitungen zum Beginnen!
          </strong>
        </p>
        <p>
          Egal, welche Art von Sport Ihnen gefällt – ob es Fußball, Basketball,
          Pferderennen oder Tennis ist, es ist wichtig das geeignete online
          Wettbüro zu finden, sowie auch das Team, das Sie unterstützen wollen.
          Die Partner, die an unserer Top Liste teilnehmen, bieten reichhaltige
          Sportwetten & Märkte, hohe Bonusse und Werbeaktionen, die Sie nicht
          verpassen sollten! Das Berichte und Bewertungssystem auf unserer
          Webseite wird regelmäßig von unseren Experten gepflegt und
          aktualisiert, damit es so verlässlich wie möglich ist. Wählen Sie Ihr
          Team, lehnen Sie sich zurück und lassen Sie sich von uns durch
          Deutschlands bekannteste online Wettplattformen führen – die Seiten,
          welche die besten Wetterlebnisse, großzügige Bonusse und häufige
          Werbeaktionen bieten.
        </p>
        <span>
          <h2 style={{ textAlign: 'center' }}>
            Wie begutachten wir die Top deutschen online Wettseiten?
          </h2>
          <p>
            Deutsche online Glücksspiele werden immer beliebter und wachsen
            schnell. Deswegen haben viele bekannte online Wettseiten Interesse
            am deutschen Markt bekommen. Das hingegen hat zu einem Zustrom der
            online Wettplattformen geführt. Eine große Anzahl von Online-Wetten
            kann Verwirrung bei Online-Spielern verursachen und hat bereits
            viele Fragen aufgeworfen. Wie finden Sie die beste Plattform, die zu
            Ihnen passt? Welche Seite hat die vielfältigsten Sportwetten? Was
            sind die Möglichkeiten bei bestimmten Webseiten? Welche Arten von
            Bonusse und Werbungen bietet die Webseite?
          </p>
        </span>
        <p>
          In unserer Einrichtung haben wir all diese Faktoren berücksichtigt und
          eine umfangreiche Liste von Funktionen von Top-Webseiten in einer
          detaillierten, aber dennoch verständlichen Tabelle zusammengestellt.
          Online Wettseiten die es auf unsere Top 10 Liste geschafft haben,
          müssen hohem Standard und Kriterien entsprechen, die von unseren
          Experten gesetzt wurden.
        </p>
        <h4>
          <em>
            Wir haben die besten deutschen online Wettseiten überprüft und da
            wir gerne einfach und direkt sind, für eine nutzerfreundliche
            Webseite, werden Sie hier eine kurze Liste der besten Wettseiten
            finden, basierend auf sehr einfachen Kriterien, wie z. B.:
          </em>
        </h4>
        <span>
          <p className="withBullet">Sportwetten von großer Vielfalt</p>
          <p className="withBullet">Diverse Möglichkeitsbereiche </p>
          <p className="withBullet">Kostenlose Wetten für Anfänger</p>
          <p className="withBullet">Ihr bevorzugter Bonustyp </p>
          <p className="withBullet">
            Unterstützung der deutschen Zahlungsmethoden
          </p>
          <p className="withBullet">Hochqualitativer</p>
          <p className="withBullet">Kundenservice für Webseiten Nutzer</p>
        </span>
        <span>
          Die Webseiten auf unserer Liste dienen allen deutschen Spielern, die
          nach der besten online Seite zum Wetten suchen. Unsere Bewertung wurde
          von einer Gruppe von Experten durchgeführt, die erwähnenswerte
          Erfahrung in dieser Branche haben. Daher können Sie sicher sein, dass
          alle Berichte verlässlich und unvoreingenommen sind.
        </span>
        <p className="withBullet">
          {`Unsere Webseite beantwortet die häufig gestellte Frage - WIE die
          RICHTIGE Seite finden, die für Sie funktioniert ? `}
        </p>
        <p>
          {`Wir sind sicher, dass sobald Sie auf einer unserer unterstützten und
          vollständig genehmigten deutschen online Wettwebseiten zu spielen
          beginnen, werden Sie extra Freude bei ihrer Sportunterhaltung haben.`}
        </p>
      </span>
    ) : (
      <span>
        <p style={{ textAlign: 'center' }}>
          <strong style={{ fontSize: 23, paddingLeft: 15 }}>
            <em>
              Wettanbieter Vergleich – Das müssen Sie bei Ihrer Wahl beachten
            </em>
          </strong>
        </p>
        <p>
          {`Einen Vergleich der besten Online Wettanbieter aufzustellen ist
            nicht gerade ein Kinderspiel. Man kann sich zwar mit bestimmten
            Merkmalen der Unternehmen behelfen, doch aufgrund der Vielzahl an
            Möglichkeiten ist man mit einer Menge an Arbeit konfrontiert. Doch
            vernünftige Spieler gehen am liebsten selbst auf die Suche und
            versuchen einen Wettanbieter Vergleich anzustellen, der genau auf
            die eigenen Bedürfnisse angepasst ist. Worauf hierbei zu achten ist,
            wird im Folgenden dargestellt.`}
        </p>
        <p style={{ textAlign: 'center' }}>
          <strong style={{ fontSize: 23, paddingLeft: 15 }}>
            <em>Hohe Wettquoten sorgen für viel Nervenkitzel</em>
          </strong>
        </p>
        <p>
          {`Haben Sie schon von dem Auszahlungsschlüssel gehört? Es handelt sich hierbei um ein
          vortreffliches Tool im Wettanbieter Test, um Buchmacher auf ihre
          Quoten hin zu untersuchen. Er besagt nämlich welcher Anteil der
          Einnahmen aus den Spielerverlusten ihrer Wetten wieder in den „Pott“
          geworfen wird. Bei theoretischen 100 Prozent würde das Unternehmen
          komplett auf Gewinne verzichten. Dies ist in der Realität natürlich
          nicht der Fall, jedoch gibt es schon Buchmacher die sich den hunder
          Prozent mehr nähern als andere. Das ist zum Beispiel beim Anbieter
          Spin Palace Sports der Fall.`}
        </p>
        <p>
          {`Aus Kundensicht kann man sich in einem solchen Fall freuen, denn das
          Unternehmen verzichtet so auf größere Gewinnmargen, um den Kunden
          Möglichkeiten zu höheren Gewinnen zu ermöglichen. Es ist ein harter
          Markt und hoch lebe der Wettbewerb. Immer wieder ist Quotenjägern zu
          raten, sich von den Mainstream Sportevents und den hochklassigen Ligen
          ein wenig abzuspalten.`}
        </p>
        <p>
          {`Das heißt jetzt nicht, dass man nicht mehr auf Bundesliga und Co
          wetten soll, zum Beispiel bei dem Buchmacher Betway.com, aber
          vergleichen Sie doch einmal deren Quoten mit denen aus der dritten
          Liga. Sie werden Diskrepanzen feststellen. Vielleicht traut man sich
          ja zu ein solches Ereignis mit in die eigene Mehrfach Wette zu packen.`}
        </p>
        <p style={{ textAlign: 'center' }}>
          <strong style={{ fontSize: 23, paddingLeft: 15 }}>
            <em>Wettanbieter mit Paypal – Das macht sie so besonders</em>
          </strong>
        </p>
        <p>
          {`Niemand sieht Gebühren gerne, das ist ja wohl logisch. Doch in einer
          Hinsicht kann man die Unternehmen durchaus verstehen, die ihre Kunden
          zur Kasse bitten. Der Grund? In Deutschland sind Wettanbieter
          verpflichtet fünf Prozent ihrer gesamten Wettumsätze dem Staat zu
          übergeben. Das ist durchaus eine hohe Summe, vor allem wenn man
          bedenkt wie der Wettbewerb die Buchmacher zu hohen Quoten drängt und
          die Gewinnmargin der Unternehmen so nach und nach zusammen schmilzt.
          Trotzdem, es gibt genug Anbieter, die ihre Kunden mit Wettsteuern
          verschonen. Häufig hat dies auch mit deren Standort zu tun (auf Malta
          erwartet die Spieler keine Abgabe) und so können die Tipps und Tricks
          der Unternehmen auch tolle Vorteile für User bedeuten.`}
        </p>
        <p>
          {`Worauf man aufpassen sollte, sind Gebühren bei Ein- bzw Auszahlungen.
          Es kann schon mal vorkommen, dass Anbieter hier nochmals gesondert zur
          Kasse bitten, wenn man beispielsweise den Weg über einen Wettanbieter
          mit Paypal, zum Beispiel bei 888Sport oder eine bestimmte Kreditkarte
          wählt. Man kann sich also überlegen, ob es sich lohnt, solche Gebühren
          zu entrichten, oder ob man vom Wettunternehmen erwartet, diese Abgaben
          in der eigenen Bilanz zu verarbeiten und den Kunden damit in Ruhe zu
          lassen. Ein Wettanbieter Vergleich im Voraus einer Anmeldung hilft
          hier natürlich. Die wichtigsten Informationen dafür finden sie auf
          dieser Webseite.`}
        </p>
        <p style={{ textAlign: 'center' }}>
          <strong style={{ fontSize: 23, paddingLeft: 15 }}>
            <em>Das Gesamtpaket sollte stimmig sein</em>
          </strong>
        </p>
        <p>
          {`Die Suche nach dem richtigen Buchmacher im Bereich des Sports ist
          nicht leicht. Doch ein ausführlicher Wettanbieter Vergleich hilft auf
          jeden Fall. Die wichtigsten Charakteristika wurden präsentiert und
          werden jetzt noch einmal zusammengefasst:`}
        </p>
        <p className="withBullet">
          {`Die Regulierung ist der Maßstab zur Seriosität des Unternehmens.
          Machen Sie hier keine Kompromisse.`}
        </p>
        <p className="withBullet">
          {`Wettquoten sind mittels des Auszahlungsschlüssels beschrieben. Es
          gilt: Je höher, desto besser.`}
        </p>
        <p className="withBullet">
          {`Gebühren werden natürlich nie gerne gesehen. Anbieter, die hierzulande
          tätig sind, müssen aber eine fünf prozentige Steuer auf die Umsätze
          abgeben. Inwiefern der Kunde davon betroffen ist, hängt vom jeweiligen
          Buchmacher ab.`}
        </p>
        <p className="withBullet">
          {`Es gibt sehr viele Bonusangebote auf dem Markt. Wichtig sind dabei
          ihre Bedingungen.`}
        </p>
        <p className="withBullet">
          {`Wettangebote unterscheiden sich natürlich. Die Auswahl sollte auf die
          eigenen Bedürfnisse abgestimmt werden.`}
        </p>
        <p className="withBullet">
          {`Wettangebote unterscheiden sich natürlich. Die Auswahl sollte auf die
          eigenen Bedürfnisse abgestimmt werden.`}
        </p>
        <p className="withBullet">
          {`Mobiles Wetten sollte zur Grundausstattung des Anbieters
          gehören. Einige Anbieter gewähren die Möglichkeit über ihre mobile
          Webseite eine Wette abzuschließen.`}
        </p>
      </span>
    )}
  </Typography>
)

SubFooter.propTypes = {
  isOnline: bool.isRequired,
}

export default SubFooter
