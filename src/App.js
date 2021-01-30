import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import CountriesTable from "./components/CountriesTable";
import CovidHeader from "./components/CovidHeader";
import Footer from "./components/Footer";

function App() {
	const [countries, setCountries] = useState([]);
	const [global, setGlobal] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`https://disease.sh/v3/covid-19/countries`);
			const globalResult = await axios(`https://disease.sh/v3/covid-19/all`);

			setCountries(result.data);
			setGlobal(globalResult.data);
		};
		fetchData();
	}, []);

	return (
		<div className="App">
			<div className="container">
				<Header />
				<CovidHeader globalStats={global} />
				<CountriesTable countries={countries} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
