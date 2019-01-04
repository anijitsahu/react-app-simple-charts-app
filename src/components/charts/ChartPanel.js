import React, { Component } from 'react';
import { Doughnut, Bar, Pie } from 'react-chartjs-2';


// Constants
import Constants from '../Constants'

// components
import ShowChartTypes from './ShowChartTypes'
import ShowChart from './ShowChart'

class ChartPanel extends Component {
	constructor(props) {
		super(props)
		let { data, labels } = this.props

		// initialize all the Constants
		this.allConstants = new Constants()

		// define the state with initial data
		this.state = {
			chartType: 'doughnut',
			activeChart: 'doughnut',
			chartData: {
				labels,
				datasets: [{
					label: this.allConstants.datasetLabel,
					data,
					backgroundColor: this.allConstants.backgroundColor,
					borderColor: this.allConstants.borderColor,
					borderWidth: this.allConstants.borderWidth
				}],
			}
		}

		this.changeChartType = this.changeChartType.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id != this.props.id) {
			let { chartData } = this.state
			chartData["labels"] = nextProps.labels
			chartData["datasets"][0]["data"] = nextProps.data

			this.setState({ chartData })
		}
	}

	changeChartType(event) {
		event.persist()
		let { id } = event.target
		console.log('chart type selected', id)
		this.setState({ chartType: id, activeChart: id })
	}

	render() {
		let { chartData, chartType, activeChart } = this.state
		let chartTypes = ['pie', 'doughnut', 'bar']
		// let showChart = this.chooseChart()
		console.log('state in chart Panel', this.state)

		return (
			<div className="chart-container basic-padding">
				<ShowChartTypes chartTypes={chartTypes} changeChartType={this.changeChartType} activeChart={activeChart}/>
				<ShowChart chartData={chartData} chartType={chartType} />
			</div>
		);
	}
}




export default ChartPanel