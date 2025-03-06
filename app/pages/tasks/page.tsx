"use client";

import Link from "next/link";
const Tasks = () => {
  return (
    <div className="">
      <Task />
    </div>
  );
};

const Task = () => {
  return (
    <>
      <Link href={"/pages/form"}>got to form</Link>
      <div>One task row</div>
    </>
  );
};

export default Tasks;
