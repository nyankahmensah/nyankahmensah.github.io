import React from 'react';

const Projects = (props) => {
	return (
		<div className="section" id="projects">
			<div className="section-header">
				<h1>Projects</h1>
			</div>
			<div className="timeline">
				<div className="container left">
					<div className="timeline-card">
						<h3>Alade Hotel</h3>
						<h4>[web] [php] [laravel]</h4>
						<p>University Of Ghana</p>
					</div>
				</div>
				<div className="container right">
					<div className="timeline-card">
						<h3>Eden Nexus</h3>
						<h4>[web] [python] [django]</h4>
						<p>This is an application for buying and selling products</p>
					</div>
				</div>
				<div className="container left">
					<div className="timeline-card">
						<h3>COMPSSA Timetable Application</h3>
						<h4>[mobile] [javascript] [react-native]</h4>
						<p>This is an application for viewing schedules for the computer science department</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects;