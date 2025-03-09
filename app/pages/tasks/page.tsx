"use client";
import { Task } from "@/app/components/EmployeeTasks";
import { TaskStore } from "@/app/store_zustand/tasksStore";
import ListIcon from "@mui/icons-material/List";

const Tasks = () => {
  const { tasks } = TaskStore();
  console.log(tasks);

  return (
    <div className=" flex flex-col gap-3 justify-center items-center !mt-10   ">
      <h2 className=" font-semibold text-lg ">
        Tasks &nbsp;
        <ListIcon />
      </h2>
      {tasks.map((item) => (
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
  );
};

export default Tasks;
