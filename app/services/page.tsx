export default function ServicesPage() {
  return (
    <main className="archivePage">
      <header className="archiveTop">
        <a href="/">SERRAT SPIRITS</a>
        
        <nav className="navLinks">
          <a href="/profile">PROFILE</a>
          <a href="/services">SERVICES</a>
          <a href="/case-studies">CASE STUDIES</a>
          <a href="/contact">CONTACT</a>
        </nav>
      </header>

      <div className="blackRule" />

      <section className="archiveRoom">
        <h1>Services</h1>

        <p>
          Strategy support for agave, beverage, and cultural brands building
          products, entering markets, or refining their positioning.
        </p>

        <div className="pageLinks">
          <span>[ market research ]</span>
            <span>[ Market Research ]</span>
              <p>
                Industry research focused on market concentration, producer scale, brand
                ownership, export growth, geographic production patterns, and distribution
                access within the global tequila market. This work translates structural
                industry data into strategic insight for smaller producers, investors, and
                emerging agave spirits brands.
              </p>
    
          <span>[ brand positioning ]</span>
      
        </div>

        <a className="backLink" href="/">
          [ back ]
        </a>
      </section>
    </main>
  );
}
