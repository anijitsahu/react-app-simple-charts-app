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
			chartData: {
				labels,
				datasets: [{
					label: "Hourwise Channel watching distribution",
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
		console.log('chart type selected', event.target.id)
		this.setState({ chartType: event.target.id })
	}

	render() {
		let { chartData, chartType } = this.state
		let chartTypes = ['pie', 'doughnut', 'bar']
		// let showChart = this.chooseChart()
		console.log('state in chart Panel', this.state)

		return (
			<div className="chart-container basic-padding">
				<ShowChartTypes chartTypes={chartTypes} changeChartType={this.changeChartType} />
				<ShowChart chartData={chartData} chartType={chartType}/>	
			</div>
		);
	}
}




export default ChartPanel