"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ovens } from "../lib/ovens/ovens";
import { OvenKey } from "../lib/definitions/types";

// Define the shape of our store state
type InputStore = {
  // Oven data from our ovens module
  ovens: typeof ovens;
  // Array of oven keys (used for select options)
  options: OvenKey[];
  // Currently selected oven key
  selected_oven: OvenKey;
  // Function to update the selected oven
  setOven: (oven: OvenKey) => void;

  // Various input fields
  item_number: string;
  item_qty: string;
  item_height: string;
  item_length: string;
  item_width: string;
  item_weight: string;
  item_rev: string;
  task_for: string;
  task_by: string;
  item_name: string;

  // Function to update any input field (field name and new value)
  setInput: (field: string, value: any) => void;
  // Function to reset all input fields to default values
  resetInputs: () => void;
};

// Define default values for our input fields (excluding ovens/options)
const defaultInputValues = {
  selected_oven: "choose_oven" as OvenKey,
  item_number: "",
  item_qty: "",
  item_height: "",
  item_length: "",
  item_width: "",
  item_weight: "",
  item_rev: "",
  task_for: "",
  task_by: "",
  item_name: "",
};

// Create the Zustand store with devtools integration
const useInputStore = create<InputStore>()(
  devtools(
    (set) => ({
      // Add oven data and derived options (keys of the ovens object)
      ovens,
      options: Object.keys(ovens) as OvenKey[],

      // Initialize all input fields with default values
      ...defaultInputValues,

      // Function to update the selected oven
      setOven: (oven: OvenKey) => set({ selected_oven: oven }),

      // Function to update any input field dynamically by field name
      setInput: (field: string, value: any) =>
        set((state) => ({
          ...state,
          [field]: value,
        })),

      // Function to reset all input fields to their initial default values
      resetInputs: () => set({ ...defaultInputValues }, false, "RESET_INPUTS"),
    }),
    { name: "InputStore" } // Name for Redux DevTools tracking
  )
);

export default useInputStore;
