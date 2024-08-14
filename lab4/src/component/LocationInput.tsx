import React, { forwardRef } from "react";

interface LocationInputType {
  locationValue: string;
  weatherState: string;
  onLocationChange: (e: string) => void;
}

const LocationInput = (
  { locationValue, onLocationChange, weatherState }: LocationInputType,
  ref: any
) => {
  return (
    <div className="text-center mb-6">
      <p className="text-gray-500">
        Right now in{" "}
        <input
          ref={ref}
          className="font-bold border-b-2 border-gray-400 focus:outline-none focus:ring-0 w-1/4"
          value={locationValue}
          onChange={(e) => onLocationChange(e.target.value)}
        />
        , it's <span className="text-blue-400">{weatherState}</span>.
      </p>
    </div>
  );
};

export default forwardRef(LocationInput);
