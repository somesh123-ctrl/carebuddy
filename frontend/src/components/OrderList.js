// OrderList.js

import React from "react";

const OrderList = ({ orders }) => {
  return (
    <div>
      <h2>Order Listing</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Trade ID</th>
            <th>Quantity</th>
            <th>Per Unit Price</th>
            <th>Type</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.tradeId}</td>
              <td>{order.quantity}</td>
              <td>{order.perUnitPrice}</td>
              <td>{order.type}</td>
              <td>{order.stock}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
