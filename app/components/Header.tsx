export default function Header() {
  return (
    <>
      <header className="topNav">
        <a className="brandName" href="/">
          SERRAT SPIRITS
        </a>

        <nav className="navLinks">
          <div className="navItem dropdown">
            <button className="navButton">About</button>

            <div className="dropdownMenu">
              <a href="/profile">Profile</a>
            </div>
          </div>

          <div className="navItem dropdown">
            <button className="navButton">Capabilities</button>

            <div className="dropdownMenu">
              <a href="/case-studies">Case Studies</a>
              <a href="/services">Services</a>
              <a href="/industries">Industries</a>
              <a href="/alliances">Alliances</a>
            </div>
          </div>

          <a href="/contact">Contact Us</a>
        </nav>
      </header>

      <div className="blackRule" />
    </>
  );
}
