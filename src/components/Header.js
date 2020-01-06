import React from 'react';

const Header = (props) => {
  	
	return (
	    <header class="row justify-content-center align-items-center h-100 m-0 p-0">
	      	<div class="mr-4">
	      		<img src={require("../assets/images/logo.png")} style={{height: 100}} alt="Logo"/>
	      	</div>
	      	<div>
			  	<span>Nyankah Mensah</span><br/>
			  	<span>Web / Mobile Developer</span>
	      	</div>
	    </header>
	);  	
}

export default Header;