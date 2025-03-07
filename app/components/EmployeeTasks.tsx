import { TaskStore } from "../store_zustand/tasksStore";

const EmployeeTask = () => {
  const { tasks, addTask } = TaskStore();

  console.log(tasks);

  return (
    <div className=" !pb-6 !mt-5 !ml-10 !mr-10  italic ">
      EmployeeTask Will be here
      {tasks[0]?.task_content}
    </div>
  );
};

export default EmployeeTask;
