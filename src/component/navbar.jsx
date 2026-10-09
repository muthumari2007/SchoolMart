import "./navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ShopZone</h2>

      <div className="links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right">
        <input type="text" placeholder="Search products..." />
        <button>🛒 Cart</button>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default Navbar;