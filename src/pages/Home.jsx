import { Link } from "react-router-dom";

function Home() {

  return (
    <div className="min-h-screen bg-[#070B1A] text-white overflow-hidden">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-md">

        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          TrueScan AI
        </h1>

        <div className="space-x-8 text-gray-300 hidden md:flex">
          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">About</a>
        </div>

      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center text-center mt-24 px-6">

        <div className="bg-purple-500/10 border border-purple-500/20 px-6 py-2 rounded-full mb-8">
          <p className="text-purple-300">
            AI-Powered Product Verification
          </p>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight max-w-5xl">

          Detect Fake
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            {" "}Products
          </span>

          <br />

          Using AI

        </h1>

        <p className="mt-8 text-gray-400 text-xl max-w-3xl leading-relaxed">
          Upload product images and instantly analyze
          authenticity using advanced Artificial Intelligence.
          Get smart classification and authenticity scores
          within seconds.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex gap-6 flex-wrap justify-center">

          <Link to="/upload">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-purple-500/30">
              Start Scanning
            </button>
          </Link>

          <button className="border border-gray-700 hover:border-purple-500 transition px-10 py-4 rounded-2xl text-lg">
            Learn More
          </button>

        </div>

      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-32 pb-20">

        {/* Card 1 */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 transition">

          <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
            🤖
          </div>

          <h2 className="text-2xl font-bold mb-4">
            AI Detection
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Advanced machine learning models analyze
            products and estimate authenticity with
            intelligent classification.
          </p>

        </div>

        {/* Card 2 */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 transition">

          <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
            ⚡
          </div>

          <h2 className="text-2xl font-bold mb-4">
            Instant Analysis
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Upload product details and receive
            authenticity reports within seconds
            using AI-powered analysis.
          </p>

        </div>

        {/* Card 3 */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:scale-105 transition">

          <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
            📊
          </div>

          <h2 className="text-2xl font-bold mb-4">
            Smart Results
          </h2>

          <p className="text-gray-400 leading-relaxed">
            View authenticity score, fake product
            probability, and explanation-based
            AI-generated reports.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Home;