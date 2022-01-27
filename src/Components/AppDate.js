import React from "react";
import "../App.css";

const AppDate = () => {
	let date = new Date();
	let day = date.getDate();
	let year = date.getFullYear();
	let months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	let month = months[date.getMonth()];

	return (
		<div className="AppDate">
			{month} {day}, {year}
		</div>
	);
};

export default AppDate;
