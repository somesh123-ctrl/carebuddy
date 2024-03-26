// TradeList.js

import React from "react";

const TradeList = ({ trades, onCreateOrder, onUpdateTrade, onDeleteTrade }) => {
  return (
    <div>
      <h2>Trade Listing</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Trade Date Time</th>
            <th>Stock Name</th>
            <th>Listing Price</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Price Per Unit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index}>
              <td>{trade.tradeDateTime}</td>
              <td>{trade.stockName}</td>
              <td>{trade.listingPrice}</td>
              <td>{trade.quantity}</td>
              <td>{trade.type}</td>
              <td>{trade.pricePerUnit}</td>
              <td>
                <button onClick={() => onCreateOrder(trade)}>
                  Create Order
                </button>
                <button onClick={() => onUpdateTrade(trade)}>Update</button>
                <button onClick={() => onDeleteTrade(trade)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeList;
