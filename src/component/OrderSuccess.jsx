function Payment({ cart, onPlaceOrder, onBack }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <div className="payment-page">
      <h1>Payment</h1>

      <h2>Total Amount: ₹{total}</h2>

      <input
        type="text"
        placeholder="Enter your name"
      />

      <input
        type="text"
        placeholder="Enter your address"
      />

      <input
        type="text"
        placeholder="Enter your phone number"
      />

      <select>
        <option>Select Payment Method</option>
        <option>Cash on Delivery</option>
        <option>UPI</option>
        <option>Card</option>
      </select>

      <button onClick={onPlaceOrder}>
        Place Order
      </button>

      <button onClick={onBack}>
        Back
      </button>
    </div>
  );
}

export default Payment;