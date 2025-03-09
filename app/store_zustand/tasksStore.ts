import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface Task {
  db_id?: string;
  id_date: number;
  part_number: string;
  task_content?: string;
  task_for?: string;
  made_by?: string;
  availableSpace?: string;
  usedSpace?: string;
  usedOven?: string;
  part_description?: string;
  part_qty: string;
  part_rev: string;
  oven: string;
  created_by: string;
  created_for: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (
    part_number: string,
    part_description: string,
    part_qty: string,
    part_rev: string,
    oven: string,
    created_by: string,
    created_for: string
  ) => void;
}

export const TaskStore = create<TaskStore>()(
  devtools((set) => ({
    tasks: [],
    addTask: (
      part_number,
      part_description,
      part_qty,
      part_rev,
      oven,
      created_by,
      created_for
    ) => {
      set((state) => ({
        // he mooves spread tasks ...state.tasks -> tasks: [] inside task and adding new tasks
        tasks: [
          ...state.tasks,
          {
            id_date: Date.now(),
            part_number: part_number,
            part_description: part_description,
            part_qty: part_qty,
            part_rev: part_rev,
            oven: oven,
            created_by: created_by,
            created_for: created_for,
            // task_content,
            // task_for,
            // made_by,
          },
        ],
      }));
    },
  }))
);
