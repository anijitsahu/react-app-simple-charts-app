import { useState, Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import ChangeViewerCount from './ChangeViewerCount'

const ViewersPanel = (props) => {

	// initialize viewers data and its modifier function
	const [viewersData, setViewersData] = useState(
		{
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
		})

	const handleChange = (e) => {
		const { id, value } = e.target
		const channelInfoNew = [...viewersData.channelInfo]

		// update the viewers value
		channelInfoNew.forEach((ele, index, arrayElements) => {
			if (ele.id == id) {
				arrayElements[index].viewers = value
			}
		})

		props.updateViewersCount(channelInfoNew)
		setViewersData({ ...viewersData, channelInfo: channelInfoNew })
	}

	return (
		<div className="viewers-panel basic-padding">
			<div className="viewers-panel-title">Hourwise channel watching details</div>
			<div className="view-distribution">
				{
					viewersData.channelInfo.map((ele) => {
						return (
							<ChangeViewerCount key={ele.id} {...ele} handleChange={handleChange} />
						)
					})
				}
			</div>
		</div>
	);
}

export default ViewersPanel
