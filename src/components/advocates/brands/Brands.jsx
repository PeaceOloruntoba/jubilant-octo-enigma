import { ChevronRight, ChevronLeft } from "lucide-react";
import BrandCard from "./components/BrandCard";

const brands = new Array(15).fill({
  name: "Lorem Ipsum",
  category: "Business",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
});

const Brands = () => {
    return (
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Brands</h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor</p>
        </div>
  
        <p className="text-sm">Showing 1 of 15 Results</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.slice(0, 3).map((brand, i) => (
            <BrandCard key={i} brand={brand} />
          ))}
        </div>
  
        <div className="flex justify-center items-center gap-2">
          <ChevronLeft className="w-4 h-4 text-gray-500 cursor-pointer" />
          {[1, 2, 3, 4, 5, "...", 15].map((num, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-md text-sm ${
                num === 1
                  ? "bg-red-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {num}
            </button>
          ))}
          <ChevronRight className="w-4 h-4 text-gray-500 cursor-pointer" />
        </div>
      </div>
    );
  };
  
  export default Brands;