import React from "react";
import Button from "../../../shared/Button";
import { MoreVertical, ChevronRight, ChevronLeft } from "lucide-react";

// const brands = new Array(15).fill({
//   name: "Lorem Ipsum",
//   category: "Business",
//   description:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
// });

const BrandCard = ({ brand }) => (
  <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm flex flex-col gap-3 border">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 rounded-full w-6 h-6" />
        <div>
          <h3 className="text-sm font-semibold">{brand.name}</h3>
          <p className="text-xs text-gray-500">{brand.category}</p>
        </div>
      </div>
      <MoreVertical className="w-4 h-4 text-gray-400" />
    </div>

    <div className="bg-gray-200 rounded-md h-32 flex items-center justify-center gap-4">
      <div className="w-8 h-8 bg-gray-400 clip-triangle" />
      <div className="w-8 h-8 bg-gray-400" />
      <div className="w-8 h-8 bg-gray-400 rounded-full" />
    </div>

    <p className="text-sm text-gray-600">{brand.description}</p>

    <div className="flex justify-between">
      <Button variant="outline" className="text-sm">
        View Profile
      </Button>
      <Button variant="destructive" className="text-sm">
        Join Campaign
      </Button>
    </div>
  </div>
);


export default BrandCard;

