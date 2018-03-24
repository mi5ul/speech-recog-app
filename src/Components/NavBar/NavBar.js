import React from 'react';

const NavBar = () => {
	return (
	  <nav className="navbar navbar-expand-md fixed-top navbar-transparent" color-on-scroll="500">
      <div className="container">
        <div className="navbar-translate">
          <button 
            className="navbar-toggler navbar-toggler-right navbar-burger" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarToggler" 
            aria-controls="navbarTogglerDemo02" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar"></span>
            <span className="navbar-toggler-bar"></span>
            <span className="navbar-toggler-bar"></span>
          </button>
          <a className="navbar-brand" href="#top">MS</a>
        </div>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a 
                className="nav-link" 
                rel="tooltip noopener noreferrer" 
                title="Follow us on Twitter" 
                data-placement="bottom" 
                href="https://twitter.com/msul177" 
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
                title="Star on GitHub" 
                data-placement="bottom" 
                href="https://www.github.com/mi5ul" 
                target="_blank"
              >
                <i className="fa fa-github"></i>
                <p className="d-lg-none">GitHub</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
	);
}

export default NavBar;