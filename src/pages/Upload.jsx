import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Upload() {

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

const handleAnalyze = async () => {

  if (!productName || !price || !image) {
    alert("Please fill all fields and upload image");
    return;
  }

  setLoading(true);

  try {

    const response = await axios.post(
      "http://127.0.0.1:8000/analyze",
      {
        productName,
        price: Number(price)
      }
    );

    navigate("/result", {
      state: {
        productName,
        price,
        image,
        score: response.data.score,
        classification: response.data.classification,
        message: response.data.message
      }
    });

  } catch (error) {
    console.log(error);
    alert("Backend connection failed");
  }

};

if (loading) {
  return (
    <div className="min-h-screen bg-[#070B1A] flex flex-col justify-center items-center text-white">

      <div className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>

      <h1 className="text-4xl font-bold mt-10">
        Analyzing Product...
      </h1>

      <p className="text-gray-400 mt-4">
        AI is checking authenticity
      </p>

    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#070B1A] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Upload Product
      </h1>

      <div className="bg-[#111827] max-w-2xl p-10 rounded-3xl">

        {/* Upload */}
        <div className="border-2 border-dashed border-gray-600 p-10 rounded-2xl text-center">

          <p className="text-gray-400">
            Upload Product Image
          </p>

          <input
             type="file"
             onChange={(e) =>
            setImage(URL.createObjectURL(e.target.files[0]))
         }
         className="mt-6"
    />
    {
        image && (
        <img
        src={image}
        alt="preview"
        className="mt-6 w-64 rounded-2xl"
        />
        )
    }

        </div>

        {/* Form */}
        <div className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Product category"
            className="w-full p-4 rounded-xl bg-gray-800"
          />

          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-800"
        />

         <input
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-4 rounded-xl bg-gray-800"
        />
          <textarea
            placeholder="Product Description"
            className="w-full p-4 rounded-xl bg-gray-800 h-32"
          />

        </div>

        {/* Button */}
       <button
  onClick={handleAnalyze}
  className="mt-8 bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-lg"
>
  Analyze Product
</button>

      </div>

    </div>
  );
}

export default Upload;