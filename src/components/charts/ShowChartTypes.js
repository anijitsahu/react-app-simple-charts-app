// ShowCharttTypes component
export default (props) => {
	let { chartTypes, changeChartType, activeChart } = props

	return (
		<div className="chart-type-div">
			{
				chartTypes.map((ele, index, arrayElements) => {
					let activeChartStyle = (activeChart == ele) ? "chart-type active-chart-type" : "chart-type"
					return (
						<span key={ele} id={ele} className={activeChartStyle} onClick={changeChartType}>
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
		<>
			{value}
			<span className="basic-padding separator">|</span>
		</>
	)
}
