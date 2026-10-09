import ProductCard from "./ProductCard";

function Products({ onAddToCart, onBuyNow }) {
  const products = [
    {
      name: "School Shoes",
      price: 1499,
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      name: "School T-Shirt",
      price: 599,
      rating: "⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      name: "Kids School Backpack",
      price: 799,
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
    {
      name: "School Stationery",
      price: 299,
      rating: "⭐⭐⭐⭐",
      image:
        "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3",
    },
  ];

  return (
    <section className="products" id="products">
      <h2>School Essentials</h2>

      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            onAddToCart={onAddToCart}
            onBuyNow={onBuyNow}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;