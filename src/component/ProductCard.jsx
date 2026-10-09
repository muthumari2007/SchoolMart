function ProductCard({ product, onAddToCart, onBuyNow }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="rating">
        {product.rating}
      </p>

      <p className="price">
        ₹{product.price}
      </p>

      <div className="product-buttons">

        <button
          type="button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>

        <button
          type="button"
          onClick={() => onBuyNow(product)}
        >
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default ProductCard;