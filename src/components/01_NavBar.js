const NavBar = () => {
  const handleClick = () => {
    let element = document.getElementById("navbarNav");
    element.classList.remove("show");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Dung Hong
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={handleClick}>
              <a className="nav-link active" aria-current="page" href="#about">
                About
              </a>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item" onClick={handleClick}>
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
