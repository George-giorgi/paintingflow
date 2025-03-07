import { create } from "zustand";

interface Task {
  id_date: number;
  task_content: string;
  task_for: string;
  made_by: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (
    task_content_param: string,
    task_for_param: string,
    made_by_param: string
  ) => void;
}

export const TaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  addTask: (task_content_param, task_for_param, made_by_param) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id_date: Date.now(),
          task_content: task_content_param,
          task_for: task_for_param,
          made_by: made_by_param,
        },
      ],
    }));
  },
}));
