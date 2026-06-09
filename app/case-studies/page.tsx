export default function CaseStudiesPage() {
  return (
    <main className="archivePage">
      <header className="archiveTop">
        <a href="/">SERRAT SPIRITS</a>
      </header>

      <div className="blackRule" />

      <section className="archiveRoom">
        <h1>Case Studies</h1>

        <p>
          Selected work across tequila, agave research, brand development, and
          creative strategy.
        </p>

        <div className="caseStudyBlock">
          <p className="sectionEyebrow">Case Study</p>

          <h2>Agave Price Forecast</h2>

          <p>
            This forecast analyzes historical agave prices alongside projected
            tequila production growth to estimate future price movement from
            2025 to 2034. After the major agave price spike between 2017 and
            2022, the model projects a sharp correction followed by gradual
            price recovery later in the forecast period.
          </p>

          <p>
            The analysis helps identify potential sourcing risks, cost exposure,
            and long-term market pressure within the tequila supply chain.
          </p>

          <ul>
            <li>Shows historical agave prices from 2003–2024</li>
            <li>Projects possible agave prices from 2025–2034</li>
            <li>
              Uses past price behavior and tequila production growth as
              forecasting inputs
            </li>
            <li>
              Assumes tequila production continues growing at approximately 3%
              per year
            </li>
            <li>
              Supports planning around sourcing, cost exposure, and future
              market pressure
            </li>
          </ul>

          <figure>
            <img
              src="/agave-price-forcast.png"
              alt="Agave price forecast chart from 2003 to 2034"
            />
            <figcaption>Agave Price Forecast, 2003–2034</figcaption>
          </figure>
        </div>

        <div className="pageLinks">
          <a href="https://serratmx.com">[ serrat mx / iteración 6 ]</a>
          <span>[ tequila market research ]</span>
          <span>[ agave price analysis ]</span>
          <span>[ beverage brand development ]</span>
        </div>

        <a className="backLink" href="/">
          [ back ]
        </a>
      </section>
    </main>
  );
}
