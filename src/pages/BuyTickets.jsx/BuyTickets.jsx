import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import TicketForm from "./TicketForm";

const BuyTickets = () => {
  const locations = useLoaderData();
  const regionsDuplicate = locations.map((r) => r.region);
  const regions = [...new Set(regionsDuplicate)];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDepartureTime = tomorrow.toISOString().slice(0, 16);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const journeyType = useWatch({ control, name: "journeyType" });
  const transportType = useWatch({ control, name: "transportType" });

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
                {...register("journeyType", {
                  required: "Please select journey type",
                })}
                value="one-way"
                className="radio"
              />
              One Way
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("journeyType", {
                  required: "Please select journey type",
                })}
                value="two-way"
                className="radio"
              />
              Two way
            </label>
            {/* transport type */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Transport Type</legend>
              <select
                {...register("transportType", {
                  required: "Please Select a Transport type",
                })}
                defaultValue=""
                className="select"
              >
                <option value="" disabled={true}>
                  Pick a Transport
                </option>
                <option value="Bus">Bus</option>
                <option value="Train">Train</option>
                <option value="Air">Air</option>
              </select>
            </fieldset>
            {/* Class */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Class</legend>
              <select
                {...register("class", { required: true })}
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
                control={control}
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
                {...register("name", { required: true })}
                className="input"
                placeholder="Your Name"
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input"
                placeholder="Your Email"
              />
              {/* age */}
              <h2 className="text-sm font-bold">Gender</h2>
              <div className="flex gap-4">
                <label className="label">
                  <input
                    type="radio"
                    {...register("gender", { required: true })}
                    value="male"
                    className="radio"
                    defaultChecked
                  />
                  Male
                </label>
                <label className="label">
                  <input
                    type="radio"
                    {...register("gender", { required: true })}
                    value="female"
                    className="radio"
                    defaultChecked
                  />
                  Female
                </label>
                <label className="label">
                  <input
                    type="radio"
                    {...register("gender", { required: true })}
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
                  {...register("phone", { required: true })}
                  className="input"
                  placeholder="Phone Number"
                />
                <h2>NID</h2>
                <input
                  type="number"
                  {...register("nid", { required: true })}
                  className="input"
                  placeholder="NID"
                />
              </div>
            </fieldset>
          </div>
          {/* ticket info LEFT side */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold mb-3">Ticket Info</h2>
              {/* BUS */}
              {transportType === "Bus" && (
                <div className="gap-4 flex flex-col">
                  <div>
                    <h2>Seat Number</h2>
                    <label>
                      <select
                        {...register("seatNumber", { required: true })}
                        className="select select-bordered w-full max-w-xs"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Pick a number
                        </option>

                        {[...Array(64)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div>
                    <h2>Coach Number</h2>
                    <label>
                      <input
                        {...register("coachNumber")}
                        type="text"
                        className="input"
                        placeholder="Coach No"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* TRAIN */}
              {transportType === "Train" && (
                <div className="flex flex-col gap-4">
                  <h2>Coach Number</h2>
                  <label>
                    <input
                      {...register("coachNumber", {
                        required: "Coach number is required",
                      })}
                      type="text"
                      className="input"
                      placeholder="e.g. B"
                    />
                  </label>
                  <h2>Seat Number</h2>
                  <label>
                    <select
                      {...register("seatNumber", { required: true })}
                      className="select select-bordered w-full max-w-xs"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pick a number
                      </option>

                      {[...Array(64)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              )}

              {/* AIR */}
              {transportType === "Air" && (
                <div className="flex flex-col gap-4">
                  <h2>Seat Number</h2>
                  <label>
                    <select
                      {...register("seatNumber", { required: true })}
                      className="select select-bordered w-full max-w-xs"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Pick a number
                      </option>

                      {[...Array(64)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </label>
                  <h2>Flight Num</h2>
                  <label>
                    <input
                      {...register("flightNum", { required: true })}
                      className="input input-bordered w-full max-w-xs"
                      defaultValue=""
                    ></input>
                  </label>
                </div>
              )}
              <h2>Departure Date & Time</h2>
              <p className="text-green-500">
                Arrive 30 minutes before departure time
              </p>
              <label>
                <input
                  type="datetime-local"
                  {...register("departureTime", {
                    required: "Departure time is required",
                    validate: (value) =>
                      new Date(value) >= new Date(minDepartureTime) ||
                      "Departure time must be at least 1 day ahead",
                  })}
                  min={minDepartureTime}
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            {/* Pricing RIGHT side */}
            <div>
              
            </div>
          </div>

          <div></div>
        </div>
        <input type="submit" value="Buy Ticket" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default BuyTickets;
