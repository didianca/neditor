const NavBarComponent: React.FunctionComponent = () => {
  return (
    <nav className="navbar ">
      <div className="navbar-brand">
        <h1 className="navbar-item">JBook</h1>
        <a
          className="navbar-item is-hidden-desktop"
          href="https://github.com/didianca"
          target="_blank"
        >
          <span className="icon">
            <i className="fab fa-github" />
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBarComponent;