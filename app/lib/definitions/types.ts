// ../definitions/types.ts

export interface TaskProps {
  partNumber?: string;
  description?: string;
  createdAt?: number;
  createdBy?: string;
  createdFor?: string;
  ovenUsedSpace?: string;
  qty?: string;
  rev?: string;
  oven?: string;
  created_by?: string;
  created_for?: string;
}

export type Oven = {
  name: string;
  height: string;
  lengh: string;
  width: string;
  max_wheight: string;
};

export type OvenKey =
  | "choose_oven"
  | "oven_1"
  | "oven_2"
  | "oven_3"
  | "oven_4"
  | "oven_5";
