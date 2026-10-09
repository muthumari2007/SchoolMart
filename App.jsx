import { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "School T-Shirt",
      price: 599,
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      name: "School Shoes",
      price: 1299,
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 3,
      name: "School Bag",
      price: 799,
      rating: "⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      id: 4,
      name: "Water Bottle",
      price: 399,
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    },
    {
      id: 5,
      name: "School Books",
      price: 499,
      rating: "⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    },
    {
      id: 6,
      name: "Stationery Set",
      price: 299,
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3",
    },
  ];

  const [cart, setCart] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const buyNow = () => {
    if (cart.length === 0) {
      return;
    }

    setShowForm(true);
  };

  const placeOrder = (e) => {
    e.preventDefault();

    setShowForm(false);
    setOrderSuccess(true);
    setCart([]);
  };

  return (
    <div>

      {/* Header */}

      <header className="header">

        <h1>🎒 SchoolMart</h1>

        <nav>
          <a href="#home">Home</a>

          <a href="#products">
            Products
          </a>

          <a href="#about">
            About
          </a>

          <a href="#contact">
            Contact
          </a>

          <a href="#cart">
            🛒 Cart ({cartCount})
          </a>
        </nav>

      </header>


      {/* Home */}

      <section
        className="home"
        id="home"
      >

        <div className="home-text">

          <h2>
            Everything You Need
            <br />
            For Your School
          </h2>

          <p>
            Quality school essentials
            at affordable prices.
          </p>

          <a href="#products">
            <button>
              Shop Now
            </button>
          </a>

        </div>

        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          alt="School"
        />

      </section>


      {/* Products */}

      <section
        className="product-section"
        id="products"
      >

        <h2>
          📚 School Essentials
        </h2>

        <p className="product-subtitle">
          Everything students need in one place
        </p>

        <div className="products">

          {products.map((product) => (

            <div
              className="card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>
                {product.name}
              </h3>

              <p className="rating">
                {product.rating}
              </p>

              <p className="price">
                ₹{product.price}
              </p>

              <div className="card-buttons">

                <button
                  onClick={() =>
                    addToCart(product)
                  }
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => {
                    addToCart(product);
                    setShowForm(true);
                  }}
                >
                  Pay Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* Cart */}

      <section
        className="cart-section"
        id="cart"
      >

        <h2>
          🛒 My Shopping Cart
        </h2>

        {cart.length === 0 ? (

          <p className="empty">
            Your cart is empty.
          </p>

        ) : (

          <>

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price}
                  </p>

                  <div className="quantity">

                    <button
                      onClick={() =>
                        decrease(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increase(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <p>
                    Subtotal: ₹
                    {item.price *
                      item.quantity}
                  </p>

                </div>

              </div>

            ))}

            <h2>
              Total: ₹{total}
            </h2>

            <button
              className="buy-button"
              onClick={buyNow}
            >
              Proceed to Buy
            </button>

          </>

        )}

      </section>


      {/* About */}

      <section
        className="about"
        id="about"
      >

        <h2>
          About SchoolMart
        </h2>

        <p>
          SchoolMart is a simple online
          shopping website for students.
          We provide useful school products
          at affordable prices.
        </p>

      </section>


      {/* Contact */}

      <section
        className="contact"
        id="contact"
      >

        <h2>
          Contact Us
        </h2>

        <p>
          📧 schoolmart@gmail.com
        </p>

        <p>
          📞 9876543210
        </p>

        <p>
          📍 Tamil Nadu, India
        </p>

      </section>


      {/* Purchase Form */}

      {showForm && (

        <section className="form-section">

          <div className="purchase-form">

            <h2>
              📝 Student Details
            </h2>

            <form onSubmit={placeOrder}>

              <input
                type="text"
                placeholder="Enter Name"
                required
              />

              <input
                type="email"
                placeholder="Enter Email"
                required
              />

              <input
                type="tel"
                placeholder="Enter Phone Number"
                required
              />

              <textarea
                placeholder="Enter Delivery Address"
                required
              ></textarea>

              <input
                type="text"
                placeholder="Enter City"
                required
              />

              <input
                type="text"
                placeholder="Enter Pincode"
                required
              />

              <select required>

                <option value="">
                  Select Payment Method
                </option>

                <option>
                  Cash on Delivery
                </option>

                <option>
                  UPI
                </option>

                <option>
                  Credit Card
                </option>

                <option>
                  Debit Card
                </option>

              </select>

              <h3>
                Order Total: ₹{total}
              </h3>

              <button
                className="place-order"
                type="submit"
              >
                Place Order
              </button>

              <button
                type="button"
                className="cancel"
                onClick={() =>
                  setShowForm(false)
                }
              >
                Cancel
              </button>

            </form>

          </div>

        </section>

      )}


      {/* Success */}

      {orderSuccess && (

        <div className="success">

          <div className="success-box">

            <h1>✓</h1>

            <h2>
              Order Successful!
            </h2>

            <p>
              Your order has been placed
              successfully.
            </p>

            <button
              onClick={() =>
                setOrderSuccess(false)
              }
            >
              Continue Shopping
            </button>

          </div>

        </div>

      )}


      {/* Footer */}

      <footer>

        <h3>
          🎒 SchoolMart
        </h3>

        <p>
          Making school shopping simple
          and easy.
        </p>

        <p>
          © 2026 SchoolMart
        </p>

      </footer>

    </div>
  );
}

export default App;