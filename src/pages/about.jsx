import Header from "../component/Header"
import Footer from "../component/Footer"

export default function About() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            About Our Store
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built with trust, transparency, and a commitment to quality shopping
            experiences.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a modern e-commerce platform focused on delivering reliable,
            affordable, and high-quality products to our customers. Our design
            philosophy is centered around simplicity, speed, and usability.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Every feature is thoughtfully designed to reduce friction and
            enhance customer trust — because ethical business is sustainable
            business.
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Our Mission
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>✔ User-first shopping experience</li>
            <li>✔ Clean, responsive modern UI</li>
            <li>✔ Transparent pricing & data flow</li>
            <li>✔ Performance-focused architecture</li>
            <li>✔ Long-term scalability</li>
          </ul>
        </div>

      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          <div className="p-6 shadow rounded">
            <h3 className="font-semibold mb-2">Trust</h3>
            <p className="text-sm text-gray-600">
              Honesty and transparency at every step.
            </p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="font-semibold mb-2">Quality</h3>
            <p className="text-sm text-gray-600">
              Products that meet modern expectations.
            </p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="font-semibold mb-2">Performance</h3>
            <p className="text-sm text-gray-600">
              Fast load times and smooth UX.
            </p>
          </div>

          <div className="p-6 shadow rounded">
            <h3 className="font-semibold mb-2">Growth</h3>
            <p className="text-sm text-gray-600">
              Built to scale with users and business.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}
