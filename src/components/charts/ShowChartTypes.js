import React from 'react';


const ShowChartTypes = (props) => {
	let { chartTypes, changeChartType } = props
	return (
		<div className="chart-type-div">
			{
				chartTypes.map((ele, index, arrayElements) => {
					return (
						<span key={ele} id={ele} className="chart-type" onClick={changeChartType}>
							{(index != arrayElements.length - 1) ?
								<Separator value={ele} />
								: ele}</span>
					)
				})
			}
		</div>
	)
}


// internal component
const Separator = ({ value }) => {
	return (
		<React.Fragment>
			{value}
			<span className="basic-padding separator">|</span>
		</React.Fragment>
	)
}


export default ShowChartTypes;