export default function Nav() {
  return <header className="nav nav--logo-only">
    <a className="skip-link" href="#top">Skip to content</a>
    <div className="wrap nav__bar"><a className="nav__logo" href="/" aria-label="Marven Luis home">
      <img className="nav__logo-img" src="/images/logo-sage.png" alt="" width="64" height="36"/>
    </a></div>
  </header>;
}
