import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class Details extends React.Component {
	constructor() {
		super();
		this.state = {
			item: {}
		};
	}

	componentDidMount() {
		fetch(`https://swapi.co/api/${this.props.match.params.type}/${this.props.match.params.id}`)
			.then(result => result.json())
			.then(data => this.setState({ item: data }));
	}

	dynamType(type) {
		if (type === "planets") {
			return `Terrain is: ${this.state.item.terrain} \nPopulation is: ${
				this.state.item.population
			} \nClimate is: ${this.state.item.climate}`;
		} else if (type === "people") {
			return `Height is: ${this.state.item.height} \nBirth Year is: ${this.state.item.birth_year} \nGender is: ${
				this.state.item.gender
			}`;
		}
	}

	dynamImg(type) {
		if (type === "planets") {
			return "https://vignette.wikia.nocookie.net/starwars/images/9/99/Yavin-Battlefront.png/revision/latest?cb=20170911200018";
		} else if (type === "people") {
			return "https://www.superherodb.com/pictures2/portraits/10/050/10467.jpg";
		}
	}

	render() {
		console.log(this.props);
		console.log(this.state);
		console.log(this.dynamType(this.props.match.params.type));

		return (
			<React.Fragment>
				<div className="container">
					<div className="row card-horizontal">
						<div className="imgDiv">
							<img id="card-img-horiz" src={this.dynamImg(this.props.match.params.type)} />
						</div>
						<div className="card-body">
							<h5 className="card-subtitle">{this.state.item.name}</h5>
							<p className="card-text">{this.dynamType(this.props.match.params.type)}</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Details.propTypes = {
	match: PropTypes.object
};
