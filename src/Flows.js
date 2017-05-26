import React, { Component } from "react";
import Flow from "./Flow";

export default class Flows extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flows: ["Income"]
		};
	}
	render() {
		return (
			<div className="flows">
				{this.state.flows.map((flow, i) => (
					<Flow key={i} title={flow} />
				))}
			</div>
		);
	}
}
