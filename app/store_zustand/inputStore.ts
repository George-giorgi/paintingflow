// store_zustand/inputStore.ts
"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ovens } from "../lib/ovens/ovens";
import { OvenKey } from "../lib/definitions/types";

type InputStore = {
  ovens: typeof ovens;
  options: OvenKey[];
  selected_oven: OvenKey;
  setOven: (oven: OvenKey) => void;
  item_number: string;
  item_qty: string;
  item_height: string;
  item_length: string;
  item_width: string;
  item_weight: string;
  rev: string;
  task_for: string;
  task_by: string;
  setInput: (field: string, value: any) => void;
};

const inputStore = create<InputStore>()(
  devtools((set) => ({
    ovens,
    // Create options array from ovens keys:
    options: Object.keys(ovens) as OvenKey[],
    // Set default selected oven key to "default":
    selected_oven: "choose_oven",
    setOven: (oven: OvenKey) => set({ selected_oven: oven }),
    item_number: "",
    item_qty: "",
    item_height: "",
    item_length: "",
    item_width: "",
    item_weight: "",
    rev: "",
    task_for: "",
    task_by: "",
    setInput: (field: string, value: any) =>
      set((state) => ({ ...state, [field]: value })),
  }))
);

export default inputStore;
