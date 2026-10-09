function Cart({
  cart,
  onRemove,
  onPayment,
  onBack,
  onIncrease,
  onDecrease,
}) {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div className="cart-item" key={index}>
              <img
                src={product.image}
                alt={product.name}
              />

              <div>
                <h3>{product.name}</h3>

                <p>Price: ₹{product.price}</p>

                <div className="quantity">
                  <button onClick={() => onDecrease(index)}>
                    −
                  </button>

                  <span>{product.quantity}</span>

                  <button onClick={() => onIncrease(index)}>
                    +
                  </button>
                </div>

                <p>
                  Subtotal: ₹
                  {product.price * product.quantity}
                </p>

                <button onClick={() => onRemove(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>

          <button onClick={onPayment}>
            Place Order
          </button>
        </>
      )}

      <br />

      <button onClick={onBack}>
        Back to Products
      </button>
    </div>
  );
}

export default Cart;