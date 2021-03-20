// dependencies
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

// components
import ChartPanel from './charts/ChartPanel'
import ViewersPanel from './viewers/ViewersPanel'

// constants
import Constants from './Constants'

const Content = () => {

  // initialize all the Constants
  const allConstants = Constants()

  // Initialize chart data and its modifier function
  const [chartData, setChartData] = useState(
    {
      labels: allConstants.labels,
      data: allConstants.data,
      id: uuidv4()
    }
  )

  const updateCount = (channelInfo) => {
    const labels = []
    const data = []

    channelInfo.forEach((ele) => {
      labels.push(ele.name)
      data.push(parseInt(ele.viewers))
    })

    setChartData({ ...chartData, labels, data, id: uuidv4() })
  }

  const { data, labels, id } = chartData
  return (
    <div className="content-div">
      <ViewersPanel updateCount={updateCount} />
      <ChartPanel data={data} labels={labels} id={id} />
    </div>
  );
}

export default Content;