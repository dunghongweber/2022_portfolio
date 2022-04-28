const NavBar = () => {
  const handleClick = (id) => {
    let element = document.getElementById("navbarNav");
    element.classList.remove("show");

    let inactiveLinks = ["linkAbout", "linkProjects", "linkExperience"];

    inactiveLinks
      .filter((e) => e !== id)
      .forEach((e) => {
        document.getElementById(e).classList.remove("active");
      });

    let activeLink = document.getElementById(id);
    activeLink.classList.add("active");
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
            <li className="nav-item" onClick={() => handleClick("linkAbout")}>
              <a
                className="nav-link"
                aria-current="page"
                href="#about"
                id="linkAbout"
              >
                About
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => handleClick("linkProjects")}
            >
              <a className="nav-link" href="#projects" id="linkProjects">
                Projects
              </a>
            </li>

            <li
              className="nav-item"
              onClick={() => handleClick("linkExperience")}
            >
              <a className="nav-link" href="#experience" id="linkExperience">
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
