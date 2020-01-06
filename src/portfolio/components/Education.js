import React from 'react';

const Education = (props) => {
	return(
		<div className="section" id="education">
			<div className="section-header">
				<h1>Education</h1>
			</div>
			<div className="timeline">
				<div className="container left">
					<div className="timeline-card">
						<h3>September 2017 - Present</h3>
						<h3>Bsc Computer Science, University Of Ghana</h3>
					</div>
				</div>
				<div className="container right">
					<div className="timeline-card">
						<h3>March 2019 - May 2019</h3>
						<h3>Cisco Routing, Skills And Competence</h3>
					</div>
				</div>
				<div className="container left">
					<div className="timeline-card">
						<h3>September 2013 - May 2016</h3>
						<h3>General Science, Ghana Secondary Technical School</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Education;