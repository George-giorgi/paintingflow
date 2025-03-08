"use client";

import { useState } from "react";
import { TaskProps } from "../lib/definitions/types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { TaskStore } from "../store_zustand/tasksStore";
import Link from "next/link";

export const Tasks = () => {
  const { tasks } = TaskStore();
  return (
    <>
      <Link className=" !mt-5" href={"./tasks"}>
        <h2 className=" font-medium">See all tasks</h2>
      </Link>

      <div className="w-full flex flex-col-reverse items-center justify-center gap-5 !mt-10">
        {tasks.slice(-3).map((item) => (
          <Task
            key={item.id_date} // ✅ Always use a unique key for list items
            partNumber={"43434Test"}
            description={item.task_content}
            createdAt={item.id_date}
            createdBy={item.made_by}
            createdFor={item.task_for}
            ovenUsedSpace={"59%Test"}
          />
        ))}
      </div>
    </>
  );
};

export const Task = ({
  partNumber,
  description,
  createdAt,
  createdBy,
  createdFor,
  ovenUsedSpace,
}: TaskProps) => {
  const [taskview, setTaskview] = useState(false);
  const formattedDate = new Date(createdAt).toLocaleString();

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
            <span onClick={() => handlecklick()}>
              {!taskview ? <ExpandMoreIcon /> : <ExpandLessIcon />}
            </span>

            <EditIcon />
            <DeleteIcon />
          </div>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Part Number:</span>
          <span className="text-lg font-semibold">{partNumber}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Created At:</span>
          <span className="text-md">{createdAt}</span>
        </div>
        <div className="flex flex-col border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Description:</span>
          <span className="text-md">{description}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Created By:</span>
          <span className="text-md">{createdBy}</span>
        </div>
        <div className="flex justify-between border-b border-gray-300 p-2">
          <span className="text-sm text-gray-500">Created For:</span>
          <span className="text-md">{createdFor}</span>
        </div>
        <div className="flex justify-between p-2">
          <span className="text-sm text-gray-500">Oven Used Space:</span>
          <span className="text-md">{ovenUsedSpace}</span>
        </div>
      </div>
    </div>
  );
};
