export default function HomePage() {
  return (
    <main className="homePage">
      <header className="topNav">
        <a className="brandName" href="/">
          SERRAT SPIRITS
        </a>

        <nav className="navLinks">
          <div className="navItem dropdown">
            <button className="navButton">About</button>

            <div className="dropdownMenu">
              <a href="/profile">Profile</a>
              <a href="/services">Services</a>
              <a href="/case-studies">Case Studies</a>
              <a href="/industries">Industries</a>
              <a href="/alliances">Alliances</a>
            </div>
          </div>

          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>

      <div className="blackRule" />

      <section className="heroCenter">
        <p className="subhead">CONSULTING &amp; SOLUTIONS</p>

        <div className="logoMark">
          <img src="/serrat-spirits-logo.png" alt="serrat spirits consulting logo" />
        </div>
      </section>
    </main>
  );
}