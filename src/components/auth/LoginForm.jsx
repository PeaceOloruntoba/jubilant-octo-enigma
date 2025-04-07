import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center text-black dark:text-white">
      <h2 className="text-xl font-semibold text-center mb-2">
        Welcome back to Market!N 👋
      </h2>
      <p className="text-sm text-center mb-6 opacity-70 px-24">
        Earn while promoting businesses/brands or promote your business.
        Market!N caters for both sides. We make marketing happens easier and
        smarter.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-8 rounded-lg text-sm w-full max-w-md"
      >
        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
          className={`w-full p-3 mb-1 bg-white dark:bg-black text-black dark:text-white rounded-md border ${
            errors.email ? "border-red-500" : "border-[#C4C1C1]"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
          className={`w-full p-3 mb-1 bg-white dark:bg-black text-black dark:text-white rounded-md border ${
            errors.password ? "border-red-500" : "border-[#C4C1C1]"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#B30600] p-3 rounded-md text-white font-semibold mt-3"
        >
          Login
        </button>

        <div className="my-4 text-center text-gray-500">or</div>

        {/* Social Buttons */}
        <button className="w-full flex items-center justify-center bg-white border border-[#B30600] text-[#B30600] p-3 rounded-md mb-2 font-medium">
          <FaGoogle className="mr-2" /> Continue With Google
        </button>
        <button className="w-full flex items-center justify-center bg-white border border-[#B30600] text-[#B30600] p-3 rounded-md font-medium">
          <FaFacebook className="mr-2 text-blue-600" /> Continue With Facebook
        </button>
      </form>
    </div>
  );
}
