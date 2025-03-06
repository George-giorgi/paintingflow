"use client";

import { useState, useEffect } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaletteIcon from "@mui/icons-material/Palette";
import BrushIcon from "@mui/icons-material/Brush";
import inputStore from "../store_zustand/inputStore";
import { OvenKey } from "../lib/definitions/types";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

export default function FillForm() {
  const [data, setData] = useState<any[]>([]);

  // zustand
  const { ovens, setInput, selected_oven, setOven, options } = inputStore();

  console.log("page refresh");
  console.log(selected_oven);

  const currentoven = ovens[selected_oven];
  console.log(currentoven);

  const handleonChange = async (e: any) => {
    const inpName = e.target.name;
    const value = e.target.value;

    setInput(inpName, value);

    if (inpName == "item_number") {
      if (value.trim().length === 0) {
        setData([]); // Clear results if input is empty
        return;
      }
      try {
        const response = await fetch(
          `/api/db?search=${encodeURIComponent(value)}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className=" ">
      <form className=" flex flex-col  gap-3 ">
        <div className=" flex md:flex-row  gap-4 flex-col items-center  justify-between">
          {/* item number */}
          <div className="  flex flex-col justify-center items-center ">
            <p className=" text-center text-[10px] p-0.5  ">item number</p>
            <input
              name="item_number"
              onChange={(e) => {
                handleonChange(e);
              }}
              type="text"
              placeholder="Enter item number..."
              className="placeholder:text-sm w-full px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
            />
          </div>
          {/* icons */}
          <div>
            <PaletteIcon />
            <BrushIcon />
          </div>

          {/* qty */}
          <div className=" flex flex-col items-center justify-center">
            <p className=" text-center text-[10px] p-0.5 "> item qty</p>
            <input
              name="item_qty"
              onChange={(e) => {
                handleonChange(e);
              }}
              type="text"
              placeholder="item Qty"
              className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
            />
          </div>
        </div>

        {/* Item dimensions inputs */}
        <div className=" flex md:flex-row flex-col gap-2 w-full justify-between">
          <div className="flex-1 flex gap-2">
            <div className="  flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] p-0.5  ">height</p>
              <input
                name="item_height"
                onChange={(e) => {
                  handleonChange(e);
                }}
                type="text"
                placeholder="height"
                className="placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
              />
            </div>

            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] p-0.5 ">length</p>
              <input
                name="item_length"
                onChange={(e) => {
                  handleonChange(e);
                }}
                type="text"
                placeholder="length"
                className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
              />
            </div>
          </div>

          <div className=" flex-1 flex gap-2">
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] p-0.5  ">width</p>
              <input
                name="item_width"
                onChange={(e) => {
                  handleonChange(e);
                }}
                type="text"
                placeholder="width"
                className="placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
              />
            </div>
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] p-0.5  ">weight</p>
              <input
                name="item_weight"
                onChange={(e) => {
                  handleonChange(e);
                }}
                type="text"
                placeholder="weight"
                className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                // defaultValue={
                //   data[0]?.Weight ? Number(data[0]?.Weight.toFixed(3)) : ""
                // }
              />
            </div>
          </div>
        </div>
        {/* oven */}
        <div className=" flex-1 relative  ">
          <p className=" text-center text-[10px] p-0.5  ">choose oven</p>
          <Listbox value={selected_oven} onChange={setOven}>
            {/* Select Button */}
            <ListboxButton className="flex items-center justify-center w-full bg-transparent text-white text-center cursor-pointer">
              {selected_oven}
              <ExpandMoreIcon className="text-white" fontSize="small" />
            </ListboxButton>

            {/* Dropdown Options */}
            <ListboxOptions className="absolute w-full mt-1 bg-[#121212] border border-gray-300 shadow-md rounded-md z-10">
              {options.map((option: OvenKey, index: number) => (
                <ListboxOption
                  key={index}
                  value={option}
                  className={({ active }) =>
                    `cursor-pointer px-4 py-2 text-center transition-all ${
                      active
                        ? "bg-gray-700 rounded-md text-white"
                        : "text-white"
                    }`
                  }
                >
                  {option}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
        </div>
        {/* oven dimensions inputs */}
        <div className=" flex md:flex-row flex-col gap-2 w-full justify-between">
          <div className="flex-1 flex gap-2">
            <div className="  flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] p-0.5  ">height</p>
              <input
                type="text"
                placeholder="height"
                className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                value={currentoven.height}
                readOnly
              />
            </div>

            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] p-0.5 ">length</p>
              <input
                type="text"
                placeholder="length"
                className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                value={currentoven.lengh}
                readOnly
              />
            </div>
          </div>

          <div className=" flex-1 flex gap-2">
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] p-0.5  ">width</p>
              <input
                type="text"
                placeholder="width"
                className="placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                value={currentoven.width}
                readOnly
              />
            </div>
            <div className=" flex flex-col justify-center items-center ">
              <p className=" text-center text-[10px] p-0.5  ">max weight</p>
              <input
                type="text"
                placeholder="max weight"
                className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                value={currentoven.max_wheight}
                readOnly
              />
            </div>
          </div>
        </div>
        <button
          className="text-white bg-transparent border-2 cursor-pointer rounded-3xl p-4 w-fit !mt-5"
          type="submit"
        >
          Submit Task
        </button>
      </form>
    </div>
  );
}
