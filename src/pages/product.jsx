import React, { useEffect, useState } from "react";
import SkeletonCard from "../component/SkeletonCard";
import ProductCard from "../component/ProductCard";



const Product = () => {
  const [category, setCategory] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getAllCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
    .then((response) => response.json())
    .then((data) => setCategory(data))
    .catch((err) => console.log(err));
  };

  const filterProduct = products.filter(item => item.category == selectCategory || "")
  console.log(filterProduct)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
      getAllCategory()
    }, []);

    




    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
      <span className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>

        <select onChange={(e)=> setSelectCategory(e.target.value)} name="" id="">
          <option value="">View ALL</option>
          {category?.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      </span>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : filterProduct.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
};

export default Product;
