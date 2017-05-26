import React, { Component } from "react";
import { Header, Segment, Button } from "semantic-ui-react";
import Rule from "./Rule";
export default class Flow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rules: ["rul1", "rul2"]
		};
	}
	render() {
		return (
			<div className="flow">
				<Header
					textAlign="center"
					icon="money"
					attached="top"
					content={this.props.title}
				/>
				<Segment attached>
					{this.state.rules.map((rule, i) => (
						<Rule key={i} title={rule} />
					))}
				</Segment>
				<Button.Group attached="bottom">
					<Button icon="plus" />
					<Button icon="save" />
					<Button icon="refresh" />
					<Button icon="remove" />
				</Button.Group>
			</div>
		);
	}
}
