import Header from "../components/Header";

export default function CaseStudiesPage() {
  return (
    <main className="archivePage">
      <Header />

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
        </div>

        <div className="caseStudyBlock">
          <p className="sectionEyebrow">Case Study</p>

          <h2>Tequila Market Structure</h2>

          <div className="statGrid">
            <div className="statCard">
              <strong>302%</strong>
              <span>U.S. tequila category growth since 2003</span>
            </div>

            <div className="statCard">
              <strong>21.6%</strong>
              <span>
                Share of total U.S. spirits revenue, on 14.7% of volume
              </span>
            </div>

            <div className="statCard">
              <strong>62.3%</strong>
              <span>Dollar share held by just four parent companies</span>
            </div>

            <div className="statCard">
              <strong>47.8%</strong>
              <span>Of all retail dollars spent on bottles $45 and above</span>
            </div>
          </div>

          <p>
            Tequila is one of the fastest-growing spirits categories in the
            world. The U.S. market has expanded by more than 300% since 2003,
            demand continues to climb, and the category generates a
            disproportionate share of total spirits revenue relative to its
            volume. By most measures, the opportunity has never been larger.
          </p>

          <p>
            But aggregate growth tells an incomplete story. The United States
            absorbs over 82% of all tequila exports by volume, making U.S.
            distribution access not just advantageous but effectively
            determinative of whether a brand can compete internationally at all.
            Within that market, four multinational parent companies — Diageo,
            Proximo Spirits, Bacardi, and Beam Suntory — collectively control
            nearly two-thirds of both dollar and volume sales. Their advantage
            is not only brand recognition. It is distribution infrastructure,
            capital access, portfolio strategy, and market visibility operating
            at a scale smaller producers cannot easily match.
          </p>

          <p>
            The premium segment compounds the imbalance further. Nearly half of
            all retail tequila dollars are spent on bottles priced at $45 and
            above, and luxury tequila grew at an average of 37% annually between
            2018 and 2023 — the fastest rate of any spirits category tracked in
            the period. The segment generating the most revenue per bottle is
            also the segment most dependent on brand investment, distributor
            relationships, and on-premise visibility — precisely the resources
            that are hardest for independent and emerging producers to access.
          </p>

          <p>
            At the same time, international markets remain open. Outside the
            United States, tequila is still developing its position in many
            premium beverage markets, creating room for brands that can enter
            early, educate the trade, and build credibility before the category
            becomes fully consolidated. For smaller producers, the opportunity
            is not necessarily to outspend the largest companies, but to
            identify markets where timing, positioning, relationships, and
            cultural fluency can still create an advantage.
          </p>

          <p>
            For smaller brands and independent producers, this is the
            environment they are entering. The market is large and growing, the
            consumer appetite for premium and craft expressions is real, and the
            structural barriers to capturing that demand are significant.
            Navigating them requires a clear understanding of where the category
            is going, who controls the channels that matter, and how to position
            a brand to compete on the terms where size is not the only
            advantage.
          </p>

          <p>That is the work.</p>
        </div>

        <div className="pageLinks">
         
          <span>[ International Markets ]</span>
        </div>

        <a className="backLink" href="/">
          [ back ]
        </a>
      </section>
    </main>
  );
}
