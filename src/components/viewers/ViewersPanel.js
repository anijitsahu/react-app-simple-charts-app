import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

// Components
import ChangeViewerCount from './ChangeViewerCount'

class ViewersPanel extends Component {

	constructor(props) {
		super(props)

		this.state = {
			channelInfo: [
				{
					name: "Star Jalsha",
					viewers: "6",
					id: uuidv4()
				},
				{
					name: "Star Sports",
					viewers: "2",
					id: uuidv4()
				},
				{
					name: "National Geograpic",
					viewers: "5",
					id: uuidv4()
				},
				{
					name: "Others",
					viewers: "11",
					id: uuidv4()
				}
			]
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		event.persist()
		let { id, value } = event.target
		console.log('function reached... value is', id, ' and value', value)

		let channelInfoNew = [...this.state.channelInfo]

		channelInfoNew.forEach((ele, index, arrayElements) => {
			if (ele.id == id) {
				arrayElements[index].viewers = value
			}
		})

		this.setState({ channelInfo: channelInfoNew }, () => {
			console.log('State is updated', this.state)
			this.props.updateCount(channelInfoNew)
		})
	}

	render() {
		let { channelInfo } = this.state

		return (
			<div className="viewers-panel basic-padding"> Hourwise Channel watching details
			<div className="view-distribution">
					{
						channelInfo.map((ele) => {
							return (
								<ChangeViewerCount key={ele.id} {...ele} handleChange={this.handleChange} />
							)
						})
					}
				</div>
			</div>
		);

	}
}

export default ViewersPanel