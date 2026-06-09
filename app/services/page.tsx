import Header from "../components/Header";

export default function ServicesPage() {
  return (
    <main className="archivePage">
      <Header />

      <section className="archiveRoom">
        <h1>Services</h1>

        <p>
          Serrat Spirits Consulting provides analytical, strategic, operational,
          and creative support for agave spirits, beverage, small-batch
          production, and emerging consumer brands.
        </p>

        <div className="serviceList">
          <div className="serviceItem">
            <h2>[ Industry and Market Research ]</h2>
            <p>
              In-depth research on market structure, category growth,
              competitive positioning, producer scale, brand ownership,
              distribution access, pricing, consumer trends, and export-driven
              demand. Research is translated into practical insight for
              producers, founders, investors, and operators.
            </p>
          </div>

          <div className="serviceItem">
            <h2>[ Strategic Business Analysis ]</h2>
            <p>
              Business analysis for companies that need a clearer view of their
              position, constraints, opportunities, and next moves. This can
              include financial review, operational diagnosis, market sizing,
              cost structure analysis, growth planning, and competitive
              benchmarking.
            </p>
          </div>

          <div className="serviceItem">
            <h2>[ Market Entry and Distribution Strategy ]</h2>
            <p>
              Support for brands entering new markets or preparing for
              distribution conversations. Work may include importer strategy,
              channel planning, launch sequencing, account targeting,
              distributor readiness, and U.S. market positioning.
            </p>
          </div>

          <div className="serviceItem">
            <h2>[ Operational Solutions ]</h2>
            <p>
              Practical problem-solving for producers and lean teams that need
              help tightening workflows, organizing systems, identifying
              inefficiencies, improving coordination, or building the structure
              needed to support growth.
            </p>
          </div>

          <div className="serviceItem">
            <h2>[ Brand and Creative Strategy ]</h2>
            <p>
              Creative direction and brand development for projects that need a
              stronger identity, clearer storytelling, cultural translation, or
              sharper positioning. This includes brand language, concept
              development, product narratives, and market-facing presentation.
            </p>
          </div>

          <div className="serviceItem">
            <h2>[ Founder and Producer Support ]</h2>
            <p>
              Flexible project-based support for founders, producers, and small
              teams that need an additional strategic operator. When the problem
              is undefined, Serrat helps define it, structure it, and build a
              path forward.
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
