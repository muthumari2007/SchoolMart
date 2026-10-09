function Header({ onCartClick, cartCount }) {
  return (
    <header className="header">
      <h1>SchoolMart</h1>

      <nav>
        <a href="/">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className="cart-button"
        onClick={onCartClick}
      >
        Cart ({cartCount})
      </button>
    </header>
  );
}

export default Header;