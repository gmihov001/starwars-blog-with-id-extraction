import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card-characters card col-lg-2 col-md-2">
			<div className="card-body">
				<img src={props.imgUrl} className="card-img-top" alt="..." />
				<h5 className="title card-title" />
				<h6 className="card-subtitle mb-2">
					{props.prop1_title}
					{props.prop1}
				</h6>
				<h6 className="card-text mb-2">
					{props.prop2_title}
					{props.prop2}
				</h6>
				<h6 className="card-text mb-2">
					{props.prop3_title}
					{props.prop3}
				</h6>
			</div>
		</div>
	);
}

Card.propTypes = {
	prop1: PropTypes.string,
	prop2: PropTypes.string,
	prop3: PropTypes.string,
	imgUrl: PropTypes.string,
	prop1_title: PropTypes.string,
	prop2_title: PropTypes.string,
	prop3_title: PropTypes.string
};
