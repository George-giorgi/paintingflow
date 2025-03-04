"use client";

import { useState } from "react";

export default function FillForm() {
  const [query, setQuery] = useState(""); // Search input value
  const [data, setData] = useState<any[]>([]);
  console.log(data);

  const handleonChange = async (e: string) => {
    // setQuery(e);

    if (e.trim().length === 0) {
      setData([]); // Clear results if input is empty
      return;
    }

    try {
      const response = await fetch(`/api/db?search=${encodeURIComponent(e)}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="">
      <form className=" flex flex-col gap-3 ">
        <div className=" flex flex-col justify-center items-center ">
          <p className=" text-center text-[10px]  ">item number</p>
          <input
            onChange={(e) => handleonChange(e.target.value)}
            type="text"
            placeholder="Enter item number..."
            className=" w-full px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
          />
        </div>

        <div className=" flex md:flex-row flex-col gap-2 w-full justify-between">
          <div className=" flex gap-2">
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] ">height</p>
              <input
                type="text"
                placeholder="height"
                className="w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                defaultValue={""}
              />
            </div>

            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] ">length</p>
              <input
                type="text"
                placeholder="length"
                className="w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                defaultValue={data[0]?.Length || ""}
              />
            </div>
          </div>

          <div className=" flex gap-2">
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] ">width</p>
              <input
                type="text"
                placeholder="width"
                className="w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                defaultValue={data[0]?.Width || ""}
              />
            </div>
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] ">weight</p>
              <input
                type="text"
                placeholder="weight"
                className="w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                defaultValue={
                  data[0]?.Weight ? Number(data[0]?.Weight.toFixed(3)) : ""
                }
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
