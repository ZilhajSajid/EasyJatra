import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl p-5">
          <h3 className="text-3xl font-extrabold text-secondary">
            Welcome to EasyJatra
          </h3>
          <p className="text-xl text-secondary">Please Register</p>
          <div className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500">Email is required</p>
              )}
              {/* password */}
              <label className="label">Password</label>
              <input
                {...register("password", { required: true, minLength: 6 })}
                type="password"
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be 6 characters or longer
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-secondary mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
