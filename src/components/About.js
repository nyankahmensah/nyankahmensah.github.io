import React from 'react';

import {
	Col,
	Row
} from "reactstrap";

const About = (props) => {
  	
	return (
	    <div className="bg-grey h-100 p-2">
	      	<div>
			  	<span className="text-me">Name</span>
			  	<p>
				  	<span>Enoch Nana Nyankah Mensah</span>
			  	</p>
		  	</div>
		  	<div>
			  	<span className="text-me">Bio</span>
			  	<p>
				  	<span>Nyankah Mensah is a self motivated web . mobile developer with 5 years of experience. Likes tinkering with stuff at his leisure</span>
			  	</p>
		  	</div>
		  	<Row>
			  	<Col>
				  	<span className="text-me">Hobbies</span>
				  	<p>
					  	<span>Singing</span><br/>
					  	<span>Board Games</span>
				  	</p>
			  	</Col>
			  	<Col>
				  	<span className="text-me">Locations</span>
				  	<p>
					  	<span>Oyarifa</span><br/>
					  	<span>Tema</span>
				  	</p>
		      	</Col>
	      	</Row>
	    </div>
	);  	
}

export default About;