import React from 'react';

const Technology = (props) => {

    return (
		<div className="section" id="technology">
			<div className="section-header">
				<h1>Technology</h1>
			</div>
			<div className="timeline">
				<div className="container left">
					<div className="timeline-card">
						<h3>Languages</h3>
						<p>[JavaScript] [Python]</p>
					</div>
				</div>
				<div className="container right">
					<div className="timeline-card">
						<h3>Frameworks</h3>
						<p>[React] [React-Native] [Express]</p>
					</div>
				</div>
				<div className="container left">
					<div className="timeline-card">
						<h3>Data</h3>
						<p>[MongoDB] [SQL]</p>
					</div>
				</div>
				<div className="container right">
					<div className="timeline-card">
						<h3>Tools</h3>
						<p>[Node] [VS-Code] [Laravel] [Django]</p>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Technology;
