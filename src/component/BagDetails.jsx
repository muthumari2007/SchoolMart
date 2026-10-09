function BagDetails({ onBack }) {
  return (
    <div className="shoe-details">
      <h1>Bag Details</h1>
      <h2>School Backpack</h2>
      <p>Price: ₹999</p>
      <p>Comfortable backpack for school students.</p>

      <button>Add to Cart</button>
      <button onClick={onBack}>Back to Products</button>
    </div>
  );
}

export default BagDetails;