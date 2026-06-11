import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        className="h-40 mx-auto object-contain"
      />
      <h3 className="mt-4 font-semibold text-sm line-clamp-2">
        {product.title}
      </h3>
      <p className="mt-2 text-gray-600">${product.price}</p>
      <Link to={`/product/${product.id}`}>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
        Add to Cart
      </button>
      </Link>
    </div>
  );
};

export default ProductCard;
