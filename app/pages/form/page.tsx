"use client";

import FillForm from "@/app/components/Form";
import { PendingActions } from "@mui/icons-material";

export default function page() {
  return (
    <div className=" w-full  flex flex-col items-center justify-center bg-[#121212]  !mt-20   ">
      <h1 className=" !mb-10 filter blur-[0.28px] text-xl font-semibold">
        Prepare Your Task <PendingActions />
      </h1>
      <FillForm />
    </div>
  );
}
