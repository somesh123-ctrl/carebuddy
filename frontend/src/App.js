// App.js

import React, { useState, useEffect } from "react";
import TradeForm from "./components/TradeForm";
import TradeList from "./components/TradeList";
import OrderList from "./components/OrderList";

const App = () => {
  const [trades, setTrades] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch trades and orders data from backend API
    // Example:
    fetch("/api/trades")
      .then((response) => response.json())
      .then((data) => setTrades(data));
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data));
  }, []);

  const handleAddTrade = (newTrade) => {
    // Add new trade to backend API
    // Example:
    fetch("/api/trades", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrade),
    })
      .then((response) => response.json())
      .then((data) => {
        setTrades([...trades, data]);
      });
  };

  const handleUpdateTrade = (updatedTrade) => {
    // Update trade in backend API
    // Example:
    fetch(`/api/trades/${updatedTrade.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrade),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedTrades = trades.map((trade) =>
          trade.id === updatedTrade.id ? data : trade
        );
        setTrades(updatedTrades);
      });
  };

  const handleDeleteTrade = (deletedTrade) => {
    // Delete trade from backend API
    // Example:
    fetch(`/api/trades/${deletedTrade.id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedTrades = trades.filter(
        (trade) => trade.id !== deletedTrade.id
      );
      setTrades(updatedTrades);
    });
  };

  const handleCreateOrder = (trade) => {
    // Create order based on trade in backend API
    // Example:
    fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tradeId: trade.id,
        quantity: trade.quantity,
        perUnitPrice: trade.pricePerUnit,
        type: trade.type,
        stock: trade.stockName,
        status: "created",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders([...orders, data]);
      });
  };

  return (
    <div>
      <TradeForm onSubmit={handleAddTrade} />
      <TradeList
        trades={trades}
        onCreateOrder={handleCreateOrder}
        onUpdateTrade={handleUpdateTrade}
        onDeleteTrade={handleDeleteTrade}
      />
      <OrderList orders={orders} />
    </div>
  );
};

export default App;
