import React from 'react';

const Footer = () => {
	return (
		<footer className="footer">
        <div className="container">
            <div className="row">
                <nav className="footer-nav">
                    <ul>
                        <li><a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer">Creative Tim</a></li>
                        <li><a href="https://blog.creative-tim.com" target="_blank" rel="noopener noreferrer">Blog</a></li>
                        <li><a href="https://www.creative-tim.com/license" target="_blank" rel="noopener noreferrer">Licenses</a></li>
                    </ul>
                </nav>
                <div className="credits ml-auto">
                    <span className="copyright" >
                        © {new Date().getFullYear()}, made with <i className="fa fa-heart heart"></i> by <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer"> Creative Tim </a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
	);
}

export default Footer;