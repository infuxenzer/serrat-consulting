import Header from "../components/Header";

export default function ContactPage() {
  return (
    <main className="archivePage">
      <Header />

      <section className="archiveRoom">
        <h1>Contact Us</h1>

        <p>
          For consulting inquiries, collaborations, market research, brand
          strategy, or project conversations, reach out directly.
        </p>

        <div className="contactBlock">
          <p className="sectionEyebrow">Email Us</p>

          <h2>Start The Conversation</h2>

          <p>
            Share a brief note about your project, market, timeline, and what
            kind of support you are looking for. Serrat Spirits Consulting works
            with producers, importers, investors, and brand builders across
            agave, beverage, and cultural markets.
          </p>

          <div className="contactDetails">
            <a
              href="mailto:monty@serratccx.com?subject=Consulting%20Inquiry%20%7C%20Serrat%20Spirits&body=Hello%20Serrat%20Spirits%2C%0A%0AI%20am%20reaching%20out%20about%3A%0A%0AName%3A%0ACompany%3A%0AMarket%20/%20Country%3A%0AProject%20Type%3A%0ATimeline%3A%0A%0AAdditional%20Context%3A%0A"
              className="emailLink"
            >
              [ monty@serratccx.com ]
            </a>
          </div>

          <div className="contactPrompt">
            <h3>Helpful Details To Include</h3>

            <ul>
              <li>Name and company</li>
              <li>Market or country of interest</li>
              <li>Project type or business challenge</li>
              <li>Timeline or urgency</li>
              <li>Any relevant product, brand, or investment context</li>
            </ul>
          </div>
        </div>

        <a className="backLink" href="/">
          [ back ]
        </a>
      </section>
    </main>
  );
}
