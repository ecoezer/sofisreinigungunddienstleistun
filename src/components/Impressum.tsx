import './Impressum.css'

function Impressum() {
  return (
    <section id="impressum" className="impressum">
      <div className="impressum-container">
        <h2>Impressum</h2>

        <div className="impressum-content">
          <h3>Angaben gemäß § 5 TMG</h3>
          <p>
            <strong>Sofi's Reinigung und Dienstleistungen</strong><br />
            Inhaberin: Aleksandra Ilic<br />
            Dr.-Jasper-Straße 6a<br />
            31073 Delligsen<br />
            Deutschland
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: +49 123 456 7890<br />
            E-Mail: info@sofis-reinigung.de
          </p>

          <h3>Gewerbeanmeldung</h3>
          <p>
            Erteilt durch: Flecken Delligsen<br />
            Betriebsnummer: 03255008<br />
            Tätigkeitsbeginn: 01.10.2025<br />
            Art des Gewerbes: Gebäudereinigung
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>
            Nicht vorhanden / Kleinunternehmerin gemäß § 19 UStG
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Aleksandra Ilic<br />
            Dr.-Jasper-Straße 6a<br />
            31073 Delligsen
          </p>
        </div>
      </div>
    </section>
  )
}

export default Impressum
