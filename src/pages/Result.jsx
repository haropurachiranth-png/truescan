import { useLocation } from "react-router-dom";

function Result() {

  const location = useLocation();

  // DEFINE DATA FIRST
  const {
    productName,
    price,
    image,
    score,
    classification
  } = location.state || {};

 

  return (
    <div className="min-h-screen bg-[#070B1A] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Analysis Result
      </h1>

      <div className="bg-[#111827] p-10 rounded-3xl max-w-3xl">

        <img
          src={image}
          alt="product"
          className="w-64 rounded-2xl mb-8"
        />

        <h2 className="text-3xl mb-4">
          Product: {productName}
        </h2>

        <h3 className="text-2xl mb-6">
          Price: ₹{price}
        </h3>

        <h2 className="text-4xl font-bold text-green-400">
          <h2 className="text-4xl font-bold text-green-400">
  Authenticity Score: {score}%
</h2>

<div className="w-full bg-gray-700 h-5 rounded-full mt-6">

  <div
    className="bg-green-500 h-5 rounded-full"
    style={{ width: `${score}%` }}
  >

  </div>

</div>
        </h2>

        <h3 className="mt-6 text-3xl text-yellow-400">
          Classification: {classification}
        </h3>

        <p className="mt-6 text-gray-300 text-lg">
          The uploaded product appears visually
          similar to the original product but
          differs in material quality and finishing.
        </p>

      </div>

    </div>
  );
}

export default Result;