import	React, {Component} from 'react';
import {Menu, Image, Label, Container} from 'semantic-ui-react';

export default class Header extends Component {
	state = {
		name: 'Russell',
		avatar: 'imgs/elliot.jpg'
	}
	render() {
		return (
			<Menu fixed="top" inverted>
				<Container>
					<Menu.Item>
						<Image 
							src="imgs/budgetr.png"
							width="25px"
						/>
					</Menu.Item>
					<Menu.Item position="right">
						<Label as='a'>
    				  <Image avatar spaced='right' src={this.state.avatar} />
    				  {this.state.name}
    				</Label>
					</Menu.Item>
				</Container>
			</Menu>		
		);
	}
}