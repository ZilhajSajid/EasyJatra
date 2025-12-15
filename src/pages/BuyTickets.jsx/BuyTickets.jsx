import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";
import TicketForm from "./TicketForm";

const BuyTickets = () => {
  const locations = useLoaderData();
  const regionsDuplicate = locations.map((r) => r.region);
  const regions = [...new Set(regionsDuplicate)];

  const {
    register,
    watch,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const journeyType = watch("journeyType");

  const handleBuyTickets = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold">Buy a Ticket</h2>
      <form onSubmit={handleSubmit(handleBuyTickets)} className="mt-6 p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* journey type */}
          <div>
            <h2 className="text-xl font-bold mb-4">Journey Type</h2>
            <label className="label mr-4">
              <input
                type="radio"
                {...register("journeyType")}
                value="one-way"
                className="radio"
                defaultChecked
              />
              One Way
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("journeyType")}
                value="two-way"
                className="radio"
                defaultChecked
              />
              Two way
            </label>
            {/* transport type */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Transport Type</legend>
              <select
                {...register("transportType")}
                defaultValue="Pick a Transport"
                className="select"
              >
                <option disabled={true}>Pick a Transport</option>
                <option>Bus</option>
                <option>Train</option>
                <option>Air</option>
              </select>
            </fieldset>
            {/* Class */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Class</legend>
              <select
                {...register("class")}
                defaultValue="Pick a Class"
                className="select"
              >
                <option disabled={true}>Pick a Class</option>
                <option>AC</option>
                <option>Non-AC</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </fieldset>
            <div className="grid grid-cols-2 gap-3">
              {/* from and to*/}
              <TicketForm
                regions={regions}
                register={register}
                watch={watch}
                errors={errors}
              ></TicketForm>
            </div>
            {/* journey date */}
            <div className="flex flex-row mt- gap-4">
              <label>
                Journey Date
                <input
                  {...register("journeyDate", { required: true })}
                  type="date"
                  className="input"
                />
              </label>
              {journeyType === "two-way" && (
                <label>
                  Return Date
                  <input
                    {...register("returnDate")}
                    type="date"
                    className="input"
                  />
                  {errors.returnDate && (
                    <p className="text-red-500 text-sm">
                      {errors.returnDate.message}
                    </p>
                  )}
                </label>
              )}
            </div>
            <div className="mt-4 flex flex-row">
              <label>
                Num of Passengers
                <input
                  {...register("numOfPassengers", {
                    required: true,
                    max: { value: 4, message: "You cannot book more tickets" },
                  })}
                  type="number"
                  className="input"
                />
                {errors.numOfPassengers && (
                  <p className="text-red-500">
                    {errors.numOfPassengers.message}
                  </p>
                )}
              </label>
            </div>
          </div>

          {/* passenger details */}
          <div>
            <h2 className="text-xl font-bold">Passenger details</h2>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name")}
                className="input"
                placeholder="Your Name"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email")}
                className="input"
                placeholder="Your Email"
              />
              {/* age */}
              <h2 className="text-sm font-bold">Gender</h2>
              <div className="flex gap-4">
                <label className="label">
                  <input
                    type="radio"
                    {...register("gender")}
                    value="male"
                    className="radio"
                    defaultChecked
                  />
                  Male
                </label>
                <label className="label">
                  <input
                    type="radio"
                    {...register("gender")}
                    value="female"
                    className="radio"
                    defaultChecked
                  />
                  Female
                </label>
                <label className="label">
                  <input
                    type="radio"
                    {...register("gender")}
                    value="other"
                    className="radio"
                    defaultChecked
                  />
                  Other
                </label>
              </div>
              <div>
                <h2>Age</h2>
                <input
                  type="number"
                  {...register("age", {
                    required: true,
                    max: { value: 100, message: "Age cannot be more than 100" },
                  })}
                  className="input"
                  placeholder="Your Age"
                />
                {errors.age && (
                  <p className="text-red-500 text-sm">{errors.age.message}</p>
                )}
                <h2>Phone Number</h2>
                <input
                  type="number"
                  {...register("phone")}
                  className="input"
                  placeholder="Phone Number"
                />
                <h2>NID</h2>
                <input
                  type="number"
                  {...register("nid")}
                  className="input"
                  placeholder="NID"
                />
              </div>
            </fieldset>
          </div>
          <div>{/* ticket info LEFT side */}</div>
          <div>{/* Pricing RIGHT side */}</div>
        </div>
        <input type="submit" value="Buy Ticket" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default BuyTickets;
