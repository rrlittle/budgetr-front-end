import React, { Component } from "react";
import { Accordion, Segment } from "semantic-ui-react";
import Occurrence from "./Occurrence";
import "./Rule.css";

export default class Rule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			occurrences: [{}, {}, {}]
		};
	}
	renderOccurences = () => (
		<Segment.Group>
			{this.state.occurrences.map((occurrence, i) => (
				<Occurrence key={i} />
			))}
		</Segment.Group>
	);
	render() {
		return (
			<Accordion fluid styled className="rule">
				<Accordion.Title content={this.props.title} />
				<Accordion.Content
					className="ruleContent"
					children={this.renderOccurences()}
				/>
			</Accordion>
		);
	}
}
