import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./views/home.js";
import { Demo } from "./views/demo.js";
import { Single } from "./views/single.js";
import injectContext from "./store/appContext.js";
import { Details } from "./component/Details";
import { NavBar } from "./component/Navbar.js";
import { Footer } from "./component/Footer.js";
import { Card } from "./component/Card";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/details/:type/:id" component={Details} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
