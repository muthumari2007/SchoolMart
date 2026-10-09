function ShoeDetails({ onBack }) {
  return (
    <div className="shoe-details">
      <h1>Shoe Details</h1>
      <h2>Running Shoes</h2>
      <p>Price: ₹1,499</p>
      <p>Comfortable shoes for everyday use.</p>

      <button>Add to Cart</button>
      <button onClick={onBack}>Back to Products</button>
    </div>
  );
}

export default ShoeDetails;