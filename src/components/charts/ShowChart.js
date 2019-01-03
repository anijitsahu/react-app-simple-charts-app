import React from 'react'
import { Bar, Doughnut, Pie } from 'react-chartjs-2';


const ShowChart = (props) => {

	let { chartType, chartData } = props

	let options = {
		maintainAspectRatio: false,
		legend: {
			position: 'bottom',
			labels: {
				boxWidth: 20
			}
		}
	}
	const chooseChart = () => {
		console.log('chooseChart received...', chartType, 'and chart Data\n', chartData)

		switch (chartType) {
			case 'pie':
				return <Pie data={chartData} options={options} />;
			case 'doughnut':
				return <Doughnut data={chartData} options={options} />;
			case 'bar':
				return <Bar data={chartData} options={options} />;
		}
	}

	let showChart = chooseChart()
	return (
		<div className="chart-div">
			{showChart}
		</div>
	)
}

export default ShowChart;