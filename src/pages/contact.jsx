const ContactPage = () => (
  <div className="max-w-6xl mx-auto py-16 px-6">
    <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div>
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">Have a question? We'd love to hear from you.</p>
        <div className="space-y-4">
          <p className="flex items-center gap-3">📍 123 Fashion St, NY</p>
          <p className="flex items-center gap-3">📞 +1 234 567 890</p>
          <p className="flex items-center gap-3">✉️ support@shopwave.com</p>
        </div>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-blue-500" />
        <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-blue-500" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-blue-500"></textarea>
        <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors">Send Message</button>
      </form>
    </div>
  </div>
);  export default ContactPage