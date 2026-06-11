const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-tight">
            Modern Shopping Experience
          </h2>
          <p className="mt-4 text-gray-600">
            Discover premium products with clean design and smooth UX.
          </p>
          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg">
            Explore Products
          </button>
        </div>

        <div className="h-64 bg-white rounded-xl shadow flex items-center justify-center text-gray-400">
          Hero Image (Figma Style)
        </div>
      </div>
    </section>
  );
};

export default Hero;
