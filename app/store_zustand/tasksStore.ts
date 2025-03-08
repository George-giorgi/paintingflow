import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Task {
  id_date: number;
  task_content: string;
  task_for: string;
  made_by: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task_content: string, task_for: string, made_by: string) => void;
}

export const TaskStore = create<TaskStore>()(
  devtools((set) => ({
    tasks: [],
    addTask: (task_content, task_for, made_by) => {
      set((state) => ({
        tasks: [
          ...state.tasks,
          {
            id_date: Date.now(),
            task_content,
            task_for,
            made_by,
          },
        ],
      }));
    },
  }))
);
