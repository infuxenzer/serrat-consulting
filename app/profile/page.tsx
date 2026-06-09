import Header from "../components/Header";

export default function ProfilePage() {
  return (
    <main className="archivePage">
      <Header />

      <section className="profileRoom">
        <div className="profileText">
          <h1>Profile</h1>

          <p>
            My path into the spirits industry is grounded in formal training on
            both sides of the business. I hold a Master&apos;s in Tequila
            Production Processes from Universidad Autónoma de Guadalajara, one
            of the few graduate programs in the world dedicated entirely to the
            science and business of tequila, where I built specialized knowledge
            across microbiology, fermentation, distillation, aging, sensory
            analysis, supply chains, and international distribution.
          </p>

          <p>
            Before that, I earned a B.A. in Global Studies with a minor in
            Business from Gettysburg College, studying economics, finance,
            marketing, and cultural analysis, with additional coursework
            completed in Florence through Syracuse University.
          </p>

          <p>
            That foundation set me up to be useful in practical settings. Across
            my career I have led small teams and taken on the kind of functional
            work that actually moves things: cutting costs, tightening
            workflows, and cleaning up operations that had outgrown their
            systems. I find the inefficiency before it finds the bottom line.
          </p>

          <p>
            As the founder of Serrat Spirits Consulting, I specialize in market
            entry strategy, distributor relations, and brand development for
            emerging craft and artisanal agave spirits across U.S. and
            international markets. On the analytical side, I serve as a project
            consultant at Blackfïsk, conducting financial and operational due
            diligence on tequila industry investments.
          </p>

          <p>
            Lately my focus has shifted toward what comes next. I have been
            leaning hard into AI-assisted analysis and research, using it to
            accelerate the kind of work that used to take weeks: breaking down
            competitive markets, identifying structural trends, and building
            models that forecast where things are headed.
          </p>

          <p>
            My current research examines how production scale, brand ownership,
            geographic concentration, and distribution access create competitive
            asymmetries between multinational firms and independent producers in
            the global tequila market. That work lives inside an ARIMAX(1,1,3)
            model forecasting agave prices and production demand through 2034,
            alongside end-to-end distillery operational models projecting
            capacity and equipment scaling across 10-year horizons.
          </p>

          <p>
            On the technical side, I work in Python and R for forecasting and
            modeling, use Power BI and Excel for operational and financial
            analysis, and apply web scraping to competitive intelligence and
            market research. I am a native English speaker, fluent in Spanish,
            conversational in French, and have a working knowledge of Italian.
          </p>
          
          <p>
            I am always interested in connecting with producers, importers,
            investors, and brand builders who are serious about the craft
            spirits space.
          </p>
        </div>

        <aside className="profileImageBlock">
          <img src="/profile.png" alt="Montserrat Rodriguez" />
          <p>Montserrat Rodriguez / Serrat Spirits Consulting</p>
        </aside>

        <a className="backLink profileBackLink" href="/">
          [ back ]
        </a>
      </section>
    </main>
  );
}
          
