import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import StockPrice from './StockPrice';

import './App.css';
import constants from './config/constants.json';

const client = new ApolloClient({
  uri: constants.APOLLO_CLIENT
});

class App extends Component {
  state = {
    stockSymbol: 'CRON'
  }

  componentWillMount() {
    this.timer = null;
  }

  handleChange(event) {
    console.log(event.charCode);
    this.setState({stockSymbol: event.target.value});
  }

  render() {
    return (
      <div>

      <label>Stock
      <input type="text" 
            value={this.state.stockSymbol} 
            onChange={this.handleChange.bind(this)}/>
      </label>

      <div>
      <ApolloProvider client={client}>
        <StockPrice stockSymbol={this.state.stockSymbol}/>
      </ApolloProvider>
      </div>

      </div>
    );
  }
}

export default App;
