import React from 'react';

const Footer = (props) => {

    return (
		<div className="right-panel footer">
			<div>
				<a href="#about" rel="noopener noreferrer">
					<span className="fa fa-circle social"></span>About
				</a>
				<a href="#skills" rel="noopener noreferrer">
					<span className="fa fa-circle social"></span>Skills
				</a>
				<a href="#education" rel="noopener noreferrer">
					<span className="fa fa-circle social"></span>Education
				</a>
				<a href="#experience" rel="noopener noreferrer">
					<span className="fa fa-circle social"></span>Experience
				</a>
				<a href="#technology" rel="noopener noreferrer">
					<span className="fa fa-circle social"></span>Technology
				</a>
				<a href="#projects" rel="noopener noreferrer">
					<span className="fa fa-circle social"></span>Projects
				</a>
				<a href="#contact" rel="noopener noreferrer">
					<span className="fa fa-circle social"></span>Contact
				</a>
			</div>
		</div>
    );
}

export default Footer;