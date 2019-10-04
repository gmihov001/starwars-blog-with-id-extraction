import React from "react";
import "../../styles/home.scss";
import { render } from "react-dom";
import { NavBar } from "../component/Navbar.js";
import { Footer } from "../component/Footer.js";
import { Card } from "../component/Card.js";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			planet: [],
			character: []
		};
	}

	componentDidMount() {
		fetch("https://swapi.co/api/people/")
			.then(response => response.json())
			.then(data => {
				this.setState({ character: data.results });
			});

		fetch("https://swapi.co/api/planets/")
			.then(response => response.json())
			.then(data => {
				this.setState({ planet: data.results });
			});
	}

	render() {
		let characterList = this.state.character.map((item, index) => {
			return (
				<Card
					key={index}
					imgUrl="https://www.superherodb.com/pictures2/portraits/10/050/10467.jpg"
					prop1={item.name}
					prop1_title="Name : "
					prop2={item.height}
					prop2_title="Height : "
					prop3={item.birth_year}
					prop3_title="Birth Year : "
				/>
			);
		});
		let planetList = this.state.planet.map((item, index) => {
			return (
				<Card
					key={index}
					imgUrl="https://vignette.wikia.nocookie.net/starwars/images/9/99/Yavin-Battlefront.png/revision/latest?cb=20170911200018"
					prop1={item.name}
					prop1_title="Name : "
					prop2={item.terrain}
					prop2_title="Terrain : "
					prop3={item.population}
					prop3_title="Population : "
				/>
			);
		});

		return (
			<React.Fragment>
				<div className="home">
					<div>
						<hr className="hr-top col-lg-10 col-md-6 col-sm-6 col-xs-6 " />
						<p className="pText">Characters</p>
						<hr className="hr-bottom col-lg-10 col-md-6 col-sm-6 col-xs-6 " />
					</div>
					<div className="container">
						<div className="row">{characterList}</div>
					</div>
					<div>
						<hr className="hr-top col-lg-10 col-md-6 col-sm-6 col-xs-6" />
						<p className="pText">Planets</p>
						<hr className="hr-bottom col-lg-10 col-md-6 col-sm-6 col-xs-6" />
					</div>
					<div className="container">
						<div className="row">{planetList}</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
