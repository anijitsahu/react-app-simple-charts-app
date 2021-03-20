// dependencies
import { useEffect, useState } from 'react';

// components
import ShowChartTypes from './ShowChartTypes'
import ShowChart from './ShowChart'

// Constants
import Constants from '../Constants'

const ChartPanel = ({ data, labels, id }) => {
	// initialize all the Constants
	const allConstants = Constants()

	// define the state with initial data and its modifier function
	const [chartPanelData, setChartPanelData] = useState(
		{
			chartType: 'doughnut',
			activeChart: 'doughnut',
			chartData: {
				labels,
				datasets: [{
					label: allConstants.datasetLabel,
					data,
					backgroundColor: allConstants.backgroundColor,
					borderColor: allConstants.borderColor,
					borderWidth: allConstants.borderWidth
				}],
			}
		})

	// change the chartdata whenever a new id received
	useEffect(() => {
		modifyDataset()
	}, [id])

	const modifyDataset = () => {
		let newDataset = [...chartPanelData.chartData.datasets]
		newDataset[0].data = data
		setChartPanelData({ ...chartPanelData, chartData: { labels, datasets: newDataset } })
	}

	const changeChartType = (e) => {
		const { id } = e.target
		setChartPanelData({ ...chartPanelData, chartType: id, activeChart: id })
	}

	const { chartData, chartType, activeChart } = chartPanelData
	const chartTypes = ['pie', 'doughnut', 'bar']

	return (
		<div className="chart-container basic-padding">
			<ShowChartTypes chartTypes={chartTypes} changeChartType={changeChartType} activeChart={activeChart} />
			<ShowChart chartData={chartData} chartType={chartType} />
		</div>
	);
}

export default ChartPanel
