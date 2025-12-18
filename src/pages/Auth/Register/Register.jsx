import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-toastify";
import { imageUpload, saveOrUpdateUser } from "../../../Utils";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const { registerUser, updateUserProfile, signInWithGoogle, user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const handleRegister = async (data) => {
    const { name, image, email, password } = data;
    const imageFile = image[0];
    try {
      const imageURL = await imageUpload(imageFile);
      const result = await registerUser(email, password);
      await saveOrUpdateUser({ name, email, image: imageURL });

      await updateUserProfile(name, imageURL);
      navigate(from, { replace: true });
      toast.success("Registration Successful");
      console.log(result);
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      const { user } = await signInWithGoogle();
      await saveOrUpdateUser({
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      });

      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-5">
        <h3 className="text-3xl font-extrabold text-secondary">
          Welcome to EasyJatra
        </h3>
        <p className="text-xl text-secondary">Please Register</p>
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              {...register("name", {
                required: true,
                maxLength: {
                  value: 30,
                  message: "Name should be in 30 characters",
                },
              })}
              type="name"
              className="input"
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            {/* email */}
            <label className="label">Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please Enter a valid email address",
                },
              })}
              type="email"
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            {/* image */}
            <label className="label">Image</label>
            <input
              type="file"
              {...register("image")}
              className="file-input"
              placeholder="Upload Your Photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo is required</p>
            )}
            {/* password */}
            <label className="label">Password</label>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
              type="password"
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must contain a uppercase, a Lowercase, a number and a
                special character
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn mt-4 btn-secondary">Register</button>
          </fieldset>
          <p>
            Already have an account?{" "}
            <Link
              state={location.state}
              to="/login"
              className="text-blue-500 underline"
            >
              Sign In
            </Link>
          </p>
        </form>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-blue-500 text-gray-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
