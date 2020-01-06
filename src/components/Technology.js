import React from 'react';

import {
	Card,
	CardHeader,
	CardBody,
	Col,
	Row
} from "reactstrap"

const Technology = (props) => {
  	
	return (
	    <div className="bg-grey h-100">
	      	<Row className="m-0 h-100 p-2">
	      		{items.map((item, key)=>(
	      			<TechnologyCard image={item.image} name={item.name} key={key}/>
	      		))}
	      	</Row>
	    </div>
	);  	
}

export default Technology;

const items = [
	{
		name: "React",
		image: require("../assets/images/img1.png"),
	},
	{
		name: "React Native",
		image: require("../assets/images/img1.png")
	},
	{
		name: "Node js",
		image: require("../assets/images/img1.png")
	},
	{
		name: "Express",
		image: require("../assets/images/img1.png")
	},
	{
		name: "Laravel",
		image: require("../assets/images/img1.png")
	},
	{
		name: "Mongodb",
		image: require("../assets/images/img1.png")
	},
]

const TechnologyCard = (props) => {
	return (
		<Col className="p-2 m-0 h-50" lg={4} md={4} sm={4} xs={6}>
			<Card>
				<CardHeader className="p-0">
					<img src={props.image} alt={props.name}/>
				</CardHeader>
				<CardBody className="p-2">
					{props.name}
				</CardBody>
			</Card>
		</Col>
	)
}