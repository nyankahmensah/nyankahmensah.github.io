import React, {useState} from 'react';

import {
	Carousel,
	CarouselItem
} from "reactstrap";

const items = [
	{
		src: require("../assets/images/about.png"),
		altText: "hello",
		caption: "Hacklab 2019"
	},
	{
		src: require("../assets/images/faq.png"),
		altText: "hello",
		caption: "National sanitation hackathon"
	},
	{
		src: require("../assets/images/banner.png"),
		altText: "hello",
		caption: "COMPSSA dinner"
	},
	/*{
		src: require("../assets/images/b1.png"),
		altText: "hello",
		caption: "Huawei ICT challenge"
	},
	{
		src: require("../assets/images/b2.png"),
		altText: "hello",
		caption: "Nyankah Mensah"
	}*/
];

const Gallery = (props) => {
  	
	const [activeIndex, setActiveIndex] = useState(0);

	setInterval(()=>(setActiveIndex((activeIndex === items.length-1) ? 0 : activeIndex + 1)), 3000)

	return (
	    <div className="bg-white h-100">
	      	<Carousel
	      		activeIndex={activeIndex}
	      		ride="carousel"
	      	>
	      		{items.map((item, key) => (
	      			<CarouselItem
	      				key={key}
	      			>
	      				<img src={item.src} alt={item.altText} className="vh-50 w-100"/>
	      				<span className="caption-me bg-grey2 p-2 text-me">{item.caption}</span>
	      			</CarouselItem>
	      		))}
	      	</Carousel>
	    </div>
	);  	
}

export default Gallery;