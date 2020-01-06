import React from 'react';

const Header = (props) => {

    return (
		<div className="left-panel header">
			<img src={require('../assets/images/logo.png')} alt="logo" width="50%"/>
			<span className="page-title">Nyankah Mensah</span>
			<div>
				<a href="#contact" rel="noopener noreferrer">
					<span className="fa fa-file social"></span>
				</a>
				<a href="https://linkedin.com/in/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span className="fa fa-linkedin social"></span>
				</a>
				<a href="https://github.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span className="fa fa-github social"></span>
				</a>
			</div>
			<div>
				<a href="https://twitter.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span className="fa fa-twitter social"></span>
				</a>
				<a href="https://medium.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span className="fa fa-medium social"></span>
				</a>
				<a href="https://instagram.com/nyankahmensah" target="_blank" rel="noopener noreferrer">
					<span className="fa fa-instagram social"></span>
				</a>
			</div>
		</div>
    );
}

export default Header;