// TradeForm.js

import React, { useState } from "react";

const TradeForm = ({ onSubmit, trade }) => {
  const [formData, setFormData] = useState(trade);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="tradeDateTime"
        value={formData.tradeDateTime}
        onChange={handleChange}
        placeholder="Trade Date Time"
      />
      <br />
      <input
        type="text"
        name="stockName"
        value={formData.stockName}
        onChange={handleChange}
        placeholder="Stock Name"
      />
      <br />
      <input
        type="text"
        name="listingPrice"
        value={formData.listingPrice}
        onChange={handleChange}
        placeholder="Listing Price"
      />
      <br />
      <input
        type="text"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity"
      />
      <br />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type"
      />
      <br />
      <input
        type="text"
        name="pricePerUnit"
        value={formData.pricePerUnit}
        onChange={handleChange}
        placeholder="Price Per Unit"
      />
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default TradeForm;
