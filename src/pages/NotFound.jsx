import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-primary gap-2">
      <span>Page Not Found, Go back</span>
      <Link to="/" className="bg-secondary p-2">Home</Link>
    </div>
  );
}
