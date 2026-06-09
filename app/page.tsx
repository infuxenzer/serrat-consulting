import Header from "./components/Header";

export default function HomePage() {
  return (
    <main className="homePage">
      <Header />

      <section className="heroCenter">
        <p className="subhead">CONSULTING &amp; SOLUTIONS</p>

        <div className="logoMark">
          <img
            src="/serrat-spirits-logo.png"
            alt="Serrat Spirits Consulting logo"
          />
        </div>
      </section>
    </main>
  );
}
