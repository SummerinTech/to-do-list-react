import React from "react";

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
			<div className="date">
				{month} {day}, {year}
			</div>
		</div>
	);
};

export default AppDate;
