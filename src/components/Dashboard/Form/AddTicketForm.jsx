import React from "react";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../Utils";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../../../pages/shared/LoadingSpinner";
import ErrorPage from "../../../pages/ErrorPage";

const AddTicketForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const { isPending, isError, data, mutateAsync } = useMutation({
    mutationFn: async (payload) =>
      await axios.post(`${import.meta.env.VITE_API_URL}/tickets`, payload),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
    onMutate: (payload) => {
      console.log("i will post this data-->", payload);
    },
    onSettled: (data, error) => {
      if (data) {
        console.log(data);
      }
      if (error) {
        console.log(error);
      }
    },
    retry: 3,
  });

  const onSubmit = async (data) => {
    const { name, category, description, price, quantity, image } = data;
    const imageFile = image[0];

    try {
      const imageURL = await imageUpload(imageFile);
      const ticketData = {
        image: imageURL,
        name,
        category,
        description,
        price: Number(price),
        quantity: Number(quantity),
        vendor: {
          name: user?.displayName,
          image: user?.photoURL,
          email: user?.email,
        },
      };
      await mutateAsync(ticketData);
    } catch (error) {
      console.log(error);
    }
  };
  if (isPending) return <LoadingSpinner />;
  if (isError) return <ErrorPage />;
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {/* Name */}
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                {...register("name", {
                  required: "name is required",
                })}
                className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md bg-white"
                id="name"
                type="text"
                placeholder="Ticket title"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>
            {/* Category */}
            <div className="space-y-1 text-sm">
              <label htmlFor="category" className="block text-gray-600 ">
                Category
              </label>
              <select
                {...register("category", { required: "category required" })}
                className="w-full px-4 py-3 border-blue-300 focus:outline-blue-500 rounded-md bg-white"
                name="category"
              >
                <option value="Buss">Buss</option>
                <option value="Train">Train</option>
                <option value="Air">Air</option>
              </select>
              {errors.category && (
                <p className="text-xs text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>
            {/* Description */}
            <div className="space-y-1 text-sm">
              <label htmlFor="description" className="block text-gray-600">
                Description
              </label>

              <textarea
                {...register("description", {
                  required: "description is required",
                })}
                id="description"
                placeholder="Write Ticket description here..."
                className="block rounded-md focus:lime-300 w-full h-32 px-4 py-3 text-gray-800  border border-blue-300 bg-white focus:outline-blue-500 "
                name="description"
              ></textarea>
              {errors.description && (
                <p className="text-xs text-red-500">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-6 flex flex-col">
            {/* Price & Quantity */}
            <div className="flex justify-between gap-2">
              {/* Price */}
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600 ">
                  Price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md bg-white"
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 0, message: "price cannot be less than 0" },
                  })}
                  id="price"
                  type="number"
                  placeholder="Price per unit"
                />
                {errors.price && (
                  <p className="text-xs text-red-500">{errors.price.message}</p>
                )}
              </div>

              {/* Quantity */}
              <div className="space-y-1 text-sm">
                <label htmlFor="quantity" className="block text-gray-600">
                  Quantity
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border border-blue-300 focus:outline-blue-500 rounded-md bg-white"
                  {...register("quantity", {
                    required: "quantity required",
                    min: {
                      value: 0,
                      message: "quantity cannot be less than 0",
                    },
                  })}
                  id="quantity"
                  type="number"
                  placeholder="Available quantity"
                />
                {errors.quantity && (
                  <p className="text-xs text-red-500">
                    {errors.quantity.message}
                  </p>
                )}
              </div>
            </div>
            {/* Image */}
            <div className=" p-4  w-full  m-auto rounded-lg grow">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      {...register("image", { required: "image required" })}
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    {errors.image && (
                      <p className="text-xs text-red-500">
                        {errors.image.message}
                      </p>
                    )}
                    <div className="bg-blue-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-blue-500">
                      Upload
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-blue-500 "
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTicketForm;
