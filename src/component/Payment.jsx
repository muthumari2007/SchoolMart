import { useState } from "react";

function Payment({ cart, onPlaceOrder, onBack }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePlaceOrder = () => {
    if (
      name.trim() === "" ||
      address.trim() === "" ||
      phone.trim() === "" ||
      paymentMethod === ""
    ) {
      alert("Please fill all the details.");
      return;
    }

    onPlaceOrder();
  };

  return (
    <div className="payment-page">
      <h1>Payment</h1>

      <h2>Total Amount: ₹{total}</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="">Select Payment Method</option>
        <option value="Cash on Delivery">
          Cash on Delivery
        </option>
        <option value="UPI">UPI</option>
        <option value="Card">Card</option>
      </select>

      <button onClick={handlePlaceOrder}>
        Place Order
      </button>

      <button onClick={onBack}>
        Back
      </button>
    </div>
  );
}

export default Payment;