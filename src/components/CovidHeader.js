import React from "react";

const CovidHeader = ({ globalStats }) => {
	// && operator used to ensure toLocaleString only loads once globalstats is defined
	return (
		<div className="global-header">
			<div>
				<h1>Total Cases</h1>
				<p>{globalStats.cases && globalStats.cases.toLocaleString()}</p>
			</div>
			<div>
				<h1>Total Deaths</h1>
				<p>{globalStats.deaths && globalStats.deaths.toLocaleString()}</p>
			</div>
			<div>
				<h1>Total Recovered</h1>
				<p>{globalStats.recovered && globalStats.recovered.toLocaleString()}</p>
			</div>
		</div>
	);
};

export default CovidHeader;
