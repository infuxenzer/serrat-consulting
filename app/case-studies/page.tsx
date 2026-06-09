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
            <div className="forecastTableBlock">
  <h3>Forecasted Agave Price</h3>

  <table className="forecastTable">
    <thead>
      <tr>
        <th>Year</th>
        <th>Forecasted Price MXN/KG</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>2025</td>
        <td>9.470631</td>
      </tr>
      <tr>
        <td>2026</td>
        <td>5.310221</td>
      </tr>
      <tr>
        <td>2027</td>
        <td>2.605933</td>
      </tr>
      <tr>
        <td>2028</td>
        <td>1.909590</td>
      </tr>
      <tr>
        <td>2029</td>
        <td>2.015990</td>
      </tr>
      <tr>
        <td>2030</td>
        <td>2.443314</td>
      </tr>
      <tr>
        <td>2031</td>
        <td>2.998939</td>
      </tr>
      <tr>
        <td>2032</td>
        <td>3.605857</td>
      </tr>
      <tr>
        <td>2033</td>
        <td>4.233280</td>
      </tr>
      <tr>
        <td>2034</td>
        <td>4.868901</td>
      </tr>
    </tbody>
  </table>
</div>
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
