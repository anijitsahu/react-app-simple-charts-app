import React, { Component } from 'react';

// components 
import Header from './components/layout/Header';
import Content from './components/Content';
import ErrorBoundary from './components/ErrorBoundary'

// css
import './css/style.css'


class App extends Component {
  // static propTypes = {
  //   className: PropTypes.string,
  // };

  constructor(props) {
    super(props);

    this.state = {
      showContent: false,
      searchText: '',
      error: false
    }
  }

  componentDidCatch() {
    this.setState({ error, info })
  }

  render() {
    return (
      <div className="container">
        { /* including the Title and other components */}
        <Header />
        <Content />

      </div>
    );
  }
}

export default App;