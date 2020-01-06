import React from 'react';
import './assets/css/style.css';
import './assets/css/icon.css';

import {
	Header,
	Footer,
	Technology,
	Contact,
	Projects,
	Skills,
	Education,
	Experience
} from './components';

const Portfolio = () => {
    return (
        <div className="curtain">
        	<Header />
			<div className="content">
				<div className="section">
					<div className="section-header">
						<h1>Summary</h1>
						<p>
							I talk about myself here
						</p>
					</div>
				</div>
				<Experience />
				<Education />
				<Skills />
				<Technology />
				<Projects />
				<Contact />
				<div className="section footer-section">
					<div>
						<span className="text-bold">© </span>2019<span className="text-bold"> Nyankah Mensah </span>All rights reserved
					</div>
					<div>
						Designed by <span className="text-bold">devDeclan</span>
					</div>
				</div>
			</div>
			<Footer />
		</div>
    );
}

export default Portfolio;
