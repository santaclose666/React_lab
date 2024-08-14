import React, { useEffect, useRef, useState } from "react";
import LocationInput from "./component/LocationInput";
import WeatherInfo from "./component/WeatherInfo";
import useApiCall from "./hook/useApiCall";
import useDebounce from "./hook/useDebounce";
import Loading from "./component/Loading";

type CurrentWeather = {
  temp: number;
  describe: string;
  icon: string;
};

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const handleData = (data: any) => {
  const { main, weather } = data;
  const { description, icon } = weather[0];

  const weatherData: CurrentWeather = {
    temp: Math.floor(main.temp - 273.15),
    describe: description,
    icon,
  };

  return weatherData;
};

function App() {
  const inputRef = useRef(null);
  const [locationInput, setLocationInput] = useState("HaNoi");

  const locationDebounce = useDebounce(locationInput, 1000);

  const {
    data,
    loading,
    error,
  }: { data: CurrentWeather; loading: boolean; error: any } = useApiCall(
    `${apiUrl}?q=${locationDebounce}&appid=${apiKey}`,
    handleData
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/4 min-w-fit min-h-1/2 mx-auto">
        <h1 className="text-center mb-6 text-4xl text-blue-400 font-semibold">
          Today Weather
        </h1>

        <LocationInput
          ref={inputRef}
          locationValue={locationInput}
          onLocationChange={setLocationInput}
          weatherState={data?.describe}
        />

        {loading && <Loading />}

        {error && (
          <p className="text-center text-red-500 font-semibold">
            Cannot found your city. Try it again please!
          </p>
        )}

        {!loading && !error && (
          <WeatherInfo temp={data?.temp} icon={data?.icon} />
        )}
      </div>
    </div>
  );
}

export default App;
