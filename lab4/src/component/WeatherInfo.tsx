import React from "react";

interface WeatherInfoProps {
  temp: number;
  icon: string;
}

const WeatherInfo = ({ temp, icon }: WeatherInfoProps) => {
  return (
    <div className="flex items-center justify-evenly p-4">
      <div className="bg-blue-300 rounded-md">
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="weather"
          className="min-w-16 min-h-16"
        />
      </div>
      <p className="text-4xl font-bold text-gray-700">{temp}°C</p>
    </div>
  );
};

export default WeatherInfo;
