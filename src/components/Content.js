// dependencies
import { useState, Component } from 'react';
import { v4 as uuidv4 } from 'uuid'

// components
import ChartPanel from './charts/ChartPanel'
import ViewersPanel from './viewers/ViewersPanel'

// constants
import Constants from './Constants'

class Content extends Component {
  // static propTypes = {
  //     className: PropTypes.string,
  // };

  constructor(props) {
    super(props);

    // initialize all the Constants
    this.allConstants = new Constants()

    this.state = {
      labels: this.allConstants.labels,
      data: this.allConstants.data,
      id: uuidv4()
    }

    this.updateCount = this.updateCount.bind(this)
  }

  updateCount(channelInfo) {

    let labels = []
    let data = []

    channelInfo.forEach((ele) => {
      labels.push(ele.name)
      data.push(parseInt(ele.viewers))
    })

    this.setState({ labels, data, id: uuidv4() }, () => {
      console.log('State is updated in content ', this.state)
    })
  }

  render() {

    let { data, labels, id } = this.state
    return (
      <div className="content-div">
        <ViewersPanel updateCount={this.updateCount} />
        <ChartPanel data={data} labels={labels} id={id} />

      </div>
    );
  }
}

export default Content;