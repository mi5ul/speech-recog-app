import React from 'react';

const Background = () => {
	return (
	  <div 
	  	className="page-header section-dark" 
	  	style={{backgroundImage: "url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/antoine-barres.jpg')"}}>
        <div className="filter"></div>
        <div className="content-center">
          <div className="container">
            <div className="title-brand">
              <h1 className="presentation-title">Speech to Text</h1>
            </div>
            <h2 className="presentation-subtitle text-center">This app transcribes whatever you say to your screen.</h2>
          </div>
        </div>
      </div>
	);
}

export default Background;