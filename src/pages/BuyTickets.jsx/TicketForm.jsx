import { useWatch } from "react-hook-form";

const TicketForm = ({ regions, register, control, errors }) => {
  const from = useWatch({ control, name: "from" });
  const to = useWatch({ control, name: "to" });
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* FROM */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Departure Location</legend>
        <select
          className="select"
          defaultValue=""
          {...register("from", {
            required: "Departure Location is Required",
            validate: (value) =>
              value !== to || "Departure and Destination cannot be the same",
          })}
        >
          <option value="" disabled>
            Set location
          </option>
          {regions.map((reg) => (
            <option key={reg} value={reg}>
              {reg}
            </option>
          ))}
        </select>
      </fieldset>
      {/* TO */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Destination Location</legend>
        <select
          {...register("to", {
            required: "Destination location is required",
            validate: (value) =>
              value !== from || "Departure and Destination cannot be the same",
          })}
          className="select"
          defaultValue=""
        >
          <option value="" disabled>
            Set Location
          </option>
          {regions.map((reg) => (
            <option key={reg} value={reg} disabled={reg === from}>
              {reg}
            </option>
          ))}
        </select>
      </fieldset>

      {errors.to && <p className="text-red-500 mt-2">{errors.to.message}</p>}
    </div>
  );
};

export default TicketForm;
