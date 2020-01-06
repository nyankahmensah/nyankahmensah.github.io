import React from 'react';

const Contact = (props) => {

	return(
		<div className="section contact-section" id="contact">
			<div className="section-header">
				<h1>Contact</h1>
				<p>
					Send me a mail. I can't promise that I will reply soon
				</p>
			</div>
			<div className="window">
				<div className="window-title-bar">
					<div className="window-title">
						<h3>Contact</h3>
					</div>
					<div className="window-buttons">
						<span>_</span>
						<span>#</span>
						<span>*</span>
					</div>
				</div>
				<div className="window-body">
					<p>
						<span className="text-red text-bold">-[<span className="text-primary">guest</span><span>@</span><span className="text-primary">codeine</span>]-[<span className="text-primary">~</span>]<br/>--><span className="text-primary">$</span>
						<input type="text" name="command" className="input"/></span>
					</p>
				</div>
				<div className="window-footer">
					<div className="word-count">
						<span>300</span><span>/500 words</span>
					</div>
					<div className="key-status">
						<span>caps</span>
						<span>num</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;