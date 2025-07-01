// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="width-ft grid md:grid-cols-3 gap-8 px-4 py-10">
        <div>
          <h2 className="text-xl font-bold mb-3">NewsBlogger</h2>
          <p className="text-sm text-gray-300">
            Your go-to platform for reliable news across politics, sports, business, and lifestyle.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Categories</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Politics</a></li>
            <li><a href="#" className="hover:text-white">Sports</a></li>
            <li><a href="#" className="hover:text-white">Business</a></li>
            <li><a href="#" className="hover:text-white">Lifestyle</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Newsletter</h2>
          <p className="text-sm text-gray-300 mb-2">Subscribe to get latest news updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-md text-gray-800"
            />
            <button type="submit" className="bg-red-600 px-4 rounded-r-md hover:bg-red-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-3 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} NewsBlogger. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
