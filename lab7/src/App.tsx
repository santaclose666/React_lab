import React, { useEffect, useState } from "react";
import BarChart from "./Components/BarChart";

export type population = {
  population: number;
  name: string;
  color?: string;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const where = encodeURIComponent(
  JSON.stringify({
    population: {
      $gt: 200000,
    },
    name: {
      $exists: true,
    },
  })
);
const api = `https://parseapi.back4app.com/classes/City?count=1&limit=16&order=cityId&keys=name,population&where=${where}`;
const appKey = "kysTM8sxjGAzL9kRFu5SbI3zRSZgRvzj6Feb9CaI";
const masterKey = "saeclF3NoaHo0ETX9uN88H85xT2KAY4QCHNp4n1F";

const App = () => {
  const [listData, setListData] = useState<population[]>([]);
  const [data, setData] = useState<population[]>([]);

  const [provinceList, setProvinceList] = useState<string[]>(["All"]);
  const [province, setProvince] = useState(provinceList[0]);

  useEffect(() => {
    getAllPopulation();
  }, []);

  const getAllPopulation = async () => {
    const data = await fetch(api, {
      headers: {
        "X-Parse-Application-Id": appKey,
        "X-Parse-Master-Key": masterKey,
      },
    });

    const population = await data.json();

    let countryList: string[] = [];

    const dataFilter: population[] = population.results.map((item) => {
      const prov = item.name;

      countryList.push(prov);

      const popu: population = {
        name: prov,
        population: item.population,
        color: getRandomColor(),
      };

      return popu;
    });

    setProvinceList([...provinceList, ...countryList]);
    setData(dataFilter);
    setListData(dataFilter);
  };

  const handleFilter = async () => {
    if (province === "All") {
      return setData(listData);
    }

    let filtered = listData.filter(
      (item: population) => item.name === province
    );

    setData(filtered);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="p-8 bg-white/20 backdrop-blur-md shadow-xl rounded-3xl max-w-xl w-full">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">Filter Data</h2>
        </div>
        <div className="flex space-x-4 mb-6">
          <select
            onChange={(e) => setProvince(e.target.value)}
            className="block w-full p-3 text-gray-700 bg-white rounded-xl shadow-md focus:ring-2 focus:ring-pink-500 focus:outline-none"
          >
            {provinceList.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleFilter}
            className="block w-1/2 py-3 text-lg font-semibold text-white bg-pink-500 rounded-xl shadow-md hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Apply
          </button>
        </div>

        <p className="text-md text-white font-bold mb-4">
          Province: {province}
        </p>

        <BarChart data={data} labels={["name", "population"]} />
      </div>
    </div>
  );
};

export default App;
