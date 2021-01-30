import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return <footer>Created by Emlyn Bryan-Joyce {currentYear}</footer>;
};

export default Footer;
