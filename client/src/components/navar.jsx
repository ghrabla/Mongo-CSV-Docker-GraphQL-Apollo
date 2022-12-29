import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light px-5">
      <div class="navbar-brand">My Website</div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/">
            <a class="nav-link" href="#">
              Home
            </a>
            </Link>
          </li>
          <li class="nav-item">
          <Link to="/dashboard">
            <a class="nav-link" href="#">
              dashboard
            </a>
          </Link>
          </li>
          <li class="nav-item">
          <Link to="/Register">
            <a class="nav-link" href="#">
              Register
            </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
