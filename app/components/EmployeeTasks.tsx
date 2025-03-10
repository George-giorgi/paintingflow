"use client";

import { useState } from "react";
import { TaskProps } from "../lib/definitions/types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ListIcon from "@mui/icons-material/List";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { TaskStore } from "../store_zustand/tasksStore";
import inputStore from "../store_zustand/inputStore";
import Link from "next/link";

export const Tasks = () => {
  const { tasks } = TaskStore();

  return (
    <>
      <Link className=" !mt-5" href={"./tasks"}>
        <h2 className=" font-semibold text-lg hover:text-red-300">
          See all tasks &nbsp;
          <ListIcon />
        </h2>
      </Link>

      <div className="w-full flex flex-col-reverse items-center justify-center gap-5 !mt-10 !mb-10">
        {tasks.slice(-3).map((item) => (
          <Task
            key={item.id_date} // ✅ Always use a unique key for list items
            partNumber={item.part_number}
            createdAt={item.id_date}
            description={item.part_description}
            qty={item.part_qty}
            rev={item.part_rev}
            oven={item.oven}
            created_by={item.created_by}
            created_for={item.created_for}
          />
        ))}
      </div>
    </>
  );
};

export const Task = ({
  partNumber,
  createdAt,
  description,
  qty,
  rev,
  oven,
  created_by,
  created_for,
}: TaskProps) => {
  const [taskview, setTaskview] = useState(false);
  const formattedDate = new Date(createdAt ?? 0).toLocaleString();

  const handlecklick = () => {
    setTaskview((prev) => !prev);
  };

  return (
    <div
      className={`border border-gray-300 rounded-lg  shadow-md  w-[90%] ${
        !taskview ? "h-[40px]" : "h-[100%]"
      }   md:w-[50%] overflow-clip `}
    >
      <div className="flex flex-col">
        {/* header div for task */}
        <div className=" flex items-center justify-between h-[40px] p-2">
          <div>{formattedDate}</div>
          {/* icons div */}
          <div className=" flex gap-1 items-center justify-center cursor-pointer">
            <span className=" hover:scale-125" onClick={() => handlecklick()}>
              {!taskview ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </span>

            <EditIcon className=" hover:text-yellow-500" />
            <DeleteIcon className=" hover:text-red-500" />
            <DoneAllIcon className=" hover:text-green-500" />
          </div>
        </div>
        {/* another fields */}
        <div className="flex flex-col  justify-center border-b border-gray-300 p-2">
          <p className=" flex justify-between">
            <span className="text-sm text-gray-500">Part Number:</span>
            <span className="text-lg font-semibold">{partNumber}</span>
          </p>
          <p className=" flex justify-between">
            <span className="text-sm text-gray-500">Rev:</span>
            <span>{rev}</span>
          </p>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Description:</span>
          <span className="">{description}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Part Qty:</span>
          <span className="">{qty}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Oven:</span>
          <span className="">{oven}</span>
        </div>

        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Created For:</span>
          <span className="text-md">{created_for}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Created By:</span>
          <span className="text-md">{created_by}</span>
        </div>
      </div>
    </div>
  );
};
