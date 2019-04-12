import React from "react";
import Travel from "./Travel";

const dest = [
	{
		country:"Norway",
		image:"https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
		destination:"Lofoten",
		distance: "2500 km", 
	},
	{
		country:"Sueden",
		image:"https://images.unsplash.com/photo-1545705754-c312e4836414?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
		destination:"Fjallraven",
		distance: "2000 km",
	},
	{
		country:"Island",
		image:"https://images.unsplash.com/photo-1545824938-abda79feebc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
		destination:"Fruskej",
		distance: "3000 km"
	},
	{
		country:"Groenland",
		image:"https://images.unsplash.com/photo-1538681105587-85640961bf8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
		destination:"Kaprioklen",
		distance:"3500 km"
	},
	{
		country:"Norway",
		image:"https://images.unsplash.com/photo-1543651425-3260f9c9ecfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
		destination:"Bodo",
		distance:"2500 km"
	}];

const Travels = () => (
  <div>
    {dest.map(element => (
      <Travel destination={element.destination} photo={element.image} country={element.country} distance={element.distance} />
    ))}
  </div>
);

export default Travels;