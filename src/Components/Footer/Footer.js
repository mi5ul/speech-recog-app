import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
      <div className="container">
        <div className="row">
          <div className="credits m-auto">
            <span className="copyright" >
              © {new Date().getFullYear()}, made with <i className="fa fa-heart heart"></i> by 
              <a href="https://github.com/mi5ul" target="_blank" rel="noopener noreferrer"> MS</a>.
              Template by <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer"> Creative Tim </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
	);
}

export default Footer;