import React, { Component } from "react";
import { Segment, Button, Dropdown, Input } from "semantic-ui-react";

export default class Occurrence extends Component {
	render() {
		return (
			<Segment className="occurrence">
				<Button.Group size="mini">
					<Button disabled content="Occurs Every" />
					<Button disabled content="1" />
					<Dropdown
						button
						value="Day"
						options={[
							{ text: "Day", value: "Day" },
							{ text: "Weeks", value: "Weeks" },
							{ text: "Months", value: "Months" },
							{ text: "Years", value: "Years" }
						]}
					/>
				</Button.Group>
			</Segment>
		);
	}
}
