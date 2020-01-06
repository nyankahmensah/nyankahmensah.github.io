import React from 'react';

const Contact = (props) => {
  	
	return (
	    <div className="bg-grey h-100 w-100 container-me">
	    	<h5 className="text-me">Contact</h5>
		  	<a href="tel:233550123292"><span className="fa fa-whatsapp text-dark my-3">{"  +233 (0)55 012 3292"}</span></a>
		  	<a href="tel:233550123292"><span className="fa fa-phone text-dark my-3">{"  +233 (0)55 012 3292"}</span></a>
		  	<a href="mailto:nyankahmensah@gmail.com"><span className="fa fa-lock text-dark my-3">{"  nyankahmensah@gmail.com"}</span></a>
			<div className="container-me-social my-3">
				<a href="https://facebook.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span class="fa fa-facebook text-me"></span>
				</a>
				<a href="https://twitter.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span class="fa fa-twitter text-me"></span>
				</a>
				<a href="https://github.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span class="fa fa-github text-me"></span>
				</a>
				<a href="https://linkedin.com/in/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span class="fa fa-linkedin text-me"></span>
				</a>
				<a href="https://medium.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span class="fa fa-medium text-me"></span>
				</a>
				<a href="https://instagram.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span class="fa fa-instagram text-me"></span>
				</a>
			</div>
	    </div>
	);  	
}

export default Contact;