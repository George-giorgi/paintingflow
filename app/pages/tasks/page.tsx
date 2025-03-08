"use client";
import { Task } from "@/app/components/EmployeeTasks";
import { TaskStore } from "@/app/store_zustand/tasksStore";

const Tasks = () => {
  const { tasks } = TaskStore();
  console.log(tasks);

  return (
    <div className="">
      {tasks.map((item) => (
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
  );
};

export default Tasks;
