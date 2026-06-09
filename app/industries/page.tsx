import Header from "../components/Header";

export default function IndustriesPage() {
  return (
    <main className="archivePage">
      <Header />

      <section className="archiveRoom">
        <h1>Industries</h1>

        <p>
          Serrat Spirits Consulting works across the agave, beverage, and
          small-batch production value chain — from agriculture and
          manufacturing to imports, consumer markets, hospitality, and
          commercial real estate.
        </p>

        <div className="industryList">
          <div className="industryItem">
            <h2>[ Agave and Spirits Production ]</h2>
            <p>
              Agave producers, tequila producers, mezcal producers, distilleries,
              and small-batch spirits projects.
            </p>
          </div>

          <div className="industryItem">
            <h2>[ Agriculture and Raw Materials ]</h2>
            <p>
              Growers, agricultural suppliers, sourcing networks, and
              producer-side operations tied to agave and other craft inputs.
            </p>
          </div>

          <div className="industryItem">
            <h2>[ Manufacturing and Packaging ]</h2>
            <p>
              Production facilities, bottling, packaging, equipment planning,
              supplier coordination, and operational scaling.
            </p>
          </div>

          <div className="industryItem">
            <h2>[ Imports and Wholesale ]</h2>
            <p>
              Import strategy, wholesale relationships, distribution readiness,
              channel positioning, and cross-border commercial planning.
            </p>
          </div>

          <div className="industryItem">
            <h2>[ Warehousing and Logistics ]</h2>
            <p>
              Inventory flow, storage needs, operational coordination,
              fulfillment planning, and supply chain structure.
            </p>
          </div>

          <div className="industryItem">
            <h2>[ Retail and Consumer Markets ]</h2>
            <p>
              Consumer-facing strategy, market research, retail placement,
              pricing context, competitive analysis, and demand-side
              positioning.
            </p>
          </div>

          <div className="industryItem">
            <h2>[ Restaurants and On-Premise Accounts ]</h2>
            <p>
              Hospitality groups, restaurants, bars, tasting rooms, and
              account-building strategy for premium and craft beverage programs.
            </p>
          </div>

          <div className="industryItem">
            <h2>[ Real Estate and Site Strategy ]</h2>
            <p>
              Retail, production, storage, hospitality, and mixed-use spaces
              connected to beverage, manufacturing, and consumer-facing growth.
            </p>
          </div>

          <div className="industryItem">
            <h2>[ Research and Development ]</h2>
            <p>
              Product development, sensory direction, category research,
              competitive benchmarking, and early-stage concept validation.
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
