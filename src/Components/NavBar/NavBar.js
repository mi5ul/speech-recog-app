import React from 'react';

const NavBar = () => {
	return (
	  <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
      <div className="container">
        <a className="navbar-brand" href="#0">Logo</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a 
              className="nav-link" 
              rel="tooltip noopener noreferrer" 
              title="Follow us on Twitter" 
              data-placement="bottom" 
              href="https://twitter.com/CreativeTim" 
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
              <p className="d-lg-none">Twitter</p>
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              rel="tooltip noopener noreferrer" 
              title="Like us on Facebook" 
              data-placement="bottom" 
              href="https://www.facebook.com/CreativeTim" 
              target="_blank"
            >
              <i className="fa fa-facebook-square"></i>
              <p className="d-lg-none">Facebook</p>
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              rel="tooltip noopener noreferrer" 
              title="Follow us on Instagram" 
              data-placement="bottom" 
              href="https://www.instagram.com/CreativeTimOfficial" 
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
              <p className="d-lg-none">Instagram</p>
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link" 
              rel="tooltip noopener noreferrer" 
              title="Star on GitHub" 
              data-placement="bottom" 
              href="https://www.github.com/CreativeTimOfficial/paper-kit" 
              target="_blank"
            >
              <i className="fa fa-github"></i>
              <p className="d-lg-none">GitHub</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>	
	);
}

export default NavBar;