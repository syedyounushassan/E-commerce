import { Link } from "react-router";
import Product from "../pages/product";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-orange-500">Fire</span>Store
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link className="hover:text-black">Home</Link>
          <Link to={`/products`} className="hover:text-black">Products</Link>
          <Link to={`/contact`} className="hover:text-black">Contact</Link>
        </nav>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;

