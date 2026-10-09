function Checkout({onPlaceOrder}) {
  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <input type="text" placeholder="Enter your name" />
      <input type="text" placeholder="Enter your address" />
      <input type="text" placeholder="Enter your phone number" />

      <button onClick={onPlaceOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;