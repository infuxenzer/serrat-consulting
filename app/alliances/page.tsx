import Header from "../components/Header";

export default function AlliancesPage() {
  return (
    <main className="archivePage">
      <Header />

      <section className="archiveRoom">
        <h1>Alliances</h1>

        <p>
          Strategic relationships and working networks across import,
          distribution, production, regulatory, academic, and on-premise
          channels.
        </p>

        <div className="allianceList">
          <div className="allianceItem">
            <h2>[ New York Market Network ]</h2>
            <p>
              Importers, on-premise accounts, and relationship-building across
              Westchester, New York City, and Connecticut.
            </p>
          </div>

          <div className="allianceItem">
            <h2>[ Import Strategy ]</h2>
            <p>
              Market-entry guidance, importer conversations, launch sequencing,
              and commercial positioning for emerging spirits brands.
            </p>
          </div>

          <div className="allianceItem">
            <h2>[ Tequila Regulatory Ecosystem ]</h2>
            <p>
              Working knowledge of Consejo Regulador del Tequila structures, NOM
              context, certification pathways, and compliance considerations.
            </p>
          </div>

          <div className="allianceItem">
            <h2>[ Distillery Relationships ]</h2>
            <p>
              Connections across production teams, distillers, and operational
              contacts within tequila and agave spirits.
            </p>
          </div>

          <div className="allianceItem">
            <h2>[ Agave Producers ]</h2>
            <p>
              Producer-side understanding of agave sourcing, supply cycles,
              price volatility, and cultivation constraints.
            </p>
          </div>

          <div className="allianceItem">
            <h2>[ University and Research Network ]</h2>
            <p>
              Academic contacts, tequila production research, technical advisors,
              and industry-facing university relationships.
            </p>
          </div>
        </div>

        <a className="backLink" href="/">
          [ back ]
        </a>
      </section>
    </main>
  );
}
