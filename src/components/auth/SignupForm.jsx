import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    number: false,
    lowercase: false,
    uppercase: false,
    special: false,
  });

  const password = watch("password", ""); // Watch password input in real time

  // Real-time password validation
  useEffect(() => {
    setPasswordCriteria({
      length: password.length >= 8,
      number: /\d/.test(password),
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  }, [password]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col justify-center items-center text-black dark:text-white">
      <h2 className="text-xl font-semibold text-center mb-2">
        Welcome to Market!N 💫
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
        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName", { required: "Full name is required" })}
          className={`w-full p-3 mb-1 bg-white text-black dark:bg-black dark:text-white rounded-md border ${
            errors.fullName ? "border-red-500" : "border-[#C4C1C1]"
          }`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}

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
          className={`w-full p-3 mb-1 bg-white text-black dark:bg-black dark:text-white rounded-md border ${
            errors.email ? "border-red-500" : "border-[#C4C1C1]"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Create Password"
          {...register("password", {
            required: "Password is required",
          })}
          className={`w-full p-3 mb-1 bg-white text-black dark:bg-black dark:text-white rounded-md border ${
            errors.password ? "border-red-500" : "border-[#C4C1C1]"
          }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        {/* Password Strength Validation */}
        <div className="text-xs text-gray-400 mb-3 flex gap-6">
          <div className="flex flex-col gap-2">
            <p
              className={
                passwordCriteria.length ? "text-green-400" : "text-gray-500"
              }
            >
              • Minimum of eight (8) characters
            </p>
            <p
              className={
                passwordCriteria.number ? "text-green-400" : "text-gray-500"
              }
            >
              • Number characters (1,2,3,...)
            </p>
            <p
              className={
                passwordCriteria.lowercase ? "text-green-400" : "text-gray-500"
              }
            >
              • Lowercase characters (a,b,c,...)
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p
              className={
                passwordCriteria.uppercase ? "text-green-400" : "text-gray-500"
              }
            >
              • Uppercase characters (A,B,C,...)
            </p>
            <p
              className={
                passwordCriteria.special ? "text-green-400" : "text-gray-500"
              }
            >
              • Special characters (@,#,$,...)
            </p>
          </div>
        </div>

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords must match",
          })}
          className={`w-full p-3 mb-1 bg-white text-black dark:bg-black dark:text-white rounded-md border ${
            errors.confirmPassword ? "border-red-500" : "border-[#C4C1C1]"
          }`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#B30600] p-3 rounded-md text-white font-semibold mt-3"
        >
          Sign Up for Free
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
