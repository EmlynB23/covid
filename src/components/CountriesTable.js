import React from "react";

const CountriesTable = ({ countries }) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<td>Country</td>
						<td>Total Deaths</td>
						<td>Total Cases</td>
					</tr>
				</thead>
				<tbody>
					{countries.slice(0, 10).map((country) => {
						return (
							<tr>
								<td>
									<p>{country.country}</p>
								</td>
								<td>
									<p>{country.deaths.toLocaleString()}</p>
								</td>
								<td>
									<p>{country.cases.toLocaleString()}</p>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default CountriesTable;
