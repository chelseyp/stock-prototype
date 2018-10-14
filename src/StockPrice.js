import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const GET_STOCK_PRICE = gql`
    query($stockSymbol: String!) {
        prices(stock: $stockSymbol) {
          rate,
          stock
        }
    }
`;

const StockPrice = ({stockSymbol}) => (
  <Query query={GET_STOCK_PRICE} 
      variables={{stockSymbol}}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error {error}</p>;
      console.log('Data', data);
      console.log("----------------------");
      console.log('Prices', data.prices);
      if (data.prices !== null) {
        return (
          <div>
            <h2>Stock Symbol: {data.prices["stock"]} </h2>
            <h2>Stock Price: ${data.prices["rate"]}</h2>
          </div>
        );
      } else {
          return (
            <h2>No Data Found</h2>
          );
      }
    }}
  </Query>
);

export default StockPrice;