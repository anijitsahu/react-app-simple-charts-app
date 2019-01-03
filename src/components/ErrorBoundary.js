import React, { Component } from 'react';


class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: false,
			info: ''
		}
	}

	componentDidCatch(error, info) {
		this.setState({ error, info })
	}

	render() {
		let { error, info } = this.state
		return (
			<React.Fragment>
				{(error) ?
					<div className="error-div">
						<div className="error-type">{error}</div>
						<div className="error-details">{info}</div>
					</div>
					: this.props.children
				}
			</React.Fragment>
		);
	}
}


export default ErrorBoundary;