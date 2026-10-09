import "./cart.css";
import abi from "../assets/abi.jpg"
import mano from "../assets/mano.jpg"
import watch from "../assets/watch.jpg"
import shoe from "../assets/shoe.jpg"
import bag from "../assets/bag.jpg"
import sunglas from "../assets/sunglas.jpg"
function Card() {
  const products = [
    {
      name: "Women Dress",
      price: "699",
      image: abi
    },
    {
      name: "Men Shirt",
      price: "899",
      image: mano
    },
    {
      name: "Smart Watch",
      price: "2,449",
      image: watch
    },
    {
      name: "Sports Shoes",
      price: "1,449",
      image: shoe
    },
    {
      name: "Hand Bag",
      price: "499",
      image: bag
    },
    {
      name: "Sunglasses",
      price: "449",
      image: sunglas
    }
  ];

  return (
    <div className="app">
      <h2>Featured Products</h2>

      <div className="product-container">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} />

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
