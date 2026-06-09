import Header from "../components/Header";

export default function ServicesPage() {
  return (
    <main className="archivePage">
      <Header />

      <section className="archiveRoom">
        <h1>Services</h1>

        <p>
          Strategy support for agave, beverage, and cultural brands building
          products, entering markets, or refining their positioning.
        </p>

        <div className="serviceList">
          <div className="serviceItem">
            <h2>[ Market Research ]</h2>

            <p>
              Industry research focused on market concentration, producer scale,
              brand ownership, export growth, geographic production patterns,
              and distribution access within the global tequila market. This
              work translates structural industry data into strategic insight
              for smaller producers, investors, and emerging agave spirits
              brands.
            </p>
          </div>

          <div className="serviceItem">
            <h2>[ Brand Positioning ]</h2>

            <p>
              Strategic support for brands defining their identity, audience,
              market role, and point of difference within competitive beverage
              and cultural spaces.
            </p>
          </div>

          <div className="serviceItem">
            <h2>[ Market Entry Strategy ]</h2>

            <p>
              Guidance for producers and emerging brands preparing to enter new
              markets, approach importers, evaluate distribution pathways, and
              sequence launch decisions.
            </p>
          </div>

          <div className="serviceItem">
            <h2>[ Agave Price Analysis ]</h2>

            <p>
              Forecasting and analysis around agave price cycles, production
              growth, sourcing exposure, and long-term cost pressure within the
              tequila supply chain.
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
