"use client";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaletteIcon from "@mui/icons-material/Palette";
import BrushIcon from "@mui/icons-material/Brush";
import inputStore from "../store_zustand/inputStore";
import { TaskStore } from "../store_zustand/tasksStore";
import { OvenKey } from "../lib/definitions/types";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

export default function FillForm() {
  // zustand
  const {
    ovens,
    setInput,
    selected_oven,
    setOven,
    options,
    item_number,
    item_height,
    item_weight,
    item_length,
    item_qty,
    item_width,
    item_rev,
    task_for,
    task_by,
    resetInputs,
  } = inputStore();

  const { addTask } = TaskStore();

  const currentoven = ovens[selected_oven];

  const handleonChange = async (e: any) => {
    const inpName = e.target.name;
    const value = e.target.value;
    console.log(inpName, value);

    setInput(inpName, value);

    if (inpName === "item_rev" || inpName === "item_number") {
      try {
        // Get the latest values of both inputs
        const updatedRev =
          inpName === "item_rev" ? value.trim() : item_rev.trim();
        const updatedItemNumber =
          inpName === "item_number" ? value.trim() : item_number.trim();

        // Reset fields if either `rev` or `item_number` is empty
        if (!updatedRev || !updatedItemNumber) {
          setInput("item_length", "");
          setInput("item_width", "");
          setInput("item_height", "");
          setInput("item_weight", "");
          // setInput("item_rev", "");
          return; // Stop execution if either field is empty
        }

        // Make API request when both values exist
        const response = await fetch(
          `/api/db?search=${encodeURIComponent(
            updatedItemNumber
          )}&rev=${encodeURIComponent(updatedRev)}`
        );

        const result = await response.json();
        console.log(result);

        if (result.length > 0) {
          setInput("item_length", result[0].Length || "");
          setInput("item_width", result[0].Width || "");
          setInput("item_height", result[0].Height || "");
          setInput("item_weight", result[0].Weight || "");
          setInput("item_rev", result[0].Rev || "");
          // setInput("item_name", result[0]."check in db" || "");
        } else {
          // Reset fields if no result is found
          setInput("item_length", "");
          setInput("item_width", "");
          setInput("item_height", "");
          setInput("item_weight", "");
          setInput("item_rev", "");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");

    addTask(
      item_number,
      " request -> updateInpStore -> item_name",
      item_qty,
      item_rev,
      selected_oven,
      task_by,
      task_for
    );
    resetInputs();
  };

  return (
    <div className=" ">
      <form
        onSubmit={handleSubmit}
        className="  flex flex-col  gap-2 border-b-1 border-gray-500 pb-5"
      >
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
              value={item_number}
            />
          </div>
          <div className=" flex flex-col items-center justify-center">
            <p className=" text-center text-[10px] p-0.5 "> item rev</p>
            <input
              name="item_rev"
              onChange={(e) => {
                handleonChange(e);
              }}
              type="text"
              placeholder="Rev"
              className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
              value={item_rev}
            />
          </div>

          {/* qty */}
          <div className=" flex flex-col items-center justify-center">
            <p className=" text-center text-[10px] p-0.5 "> item qty</p>
            <input
              name="item_qty"
              onChange={(e) => {
                handleonChange(e);
              }}
              value={item_qty}
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
                value={item_height}
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
                value={item_length}
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
                value={item_width}
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
                value={item_weight}
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
        <div className=" flex-1 flex flex-col items-center justify-center relative  ">
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
        {/* last row */}

        <div className=" flex md:flex-row flex-col-reverse items-center justify-between gap-4 !mt-5 ">
          <div className=" flex gap-2 items-center justify-center">
            <button
              className=" transition-all hover:scale-y-95   text-sm text-white bg-transparent border-1 cursor-pointer rounded-lg p-2 w-fit h-fit "
              type="submit"
            >
              Prepare Task
            </button>
            <div className=" flex items-center justify-center">
              <PaletteIcon />
              <BrushIcon />
            </div>
          </div>

          <div className=" flex gap-2">
            <div className="  flex flex-col justify-center items-center ">
              <input
                name="task_for"
                type="text"
                placeholder="Task For"
                className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                value={task_for}
                onChange={(e) => handleonChange(e)}
              />
            </div>

            <div className=" flex flex-col justify-center items-center ">
              <input
                name="task_by"
                type="text"
                placeholder="Task By"
                className=" placeholder:text-sm w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
                value={task_by}
                onChange={(e) => handleonChange(e)}
              />
            </div>
          </div>
        </div>
        <p className=" !mt-3 h-3 text-sm  text-red-300 font-semibold transition-all">
          {task_by}
          {task_by.length > 0 ? "." : ""}
        </p>
      </form>
    </div>
  );
}
