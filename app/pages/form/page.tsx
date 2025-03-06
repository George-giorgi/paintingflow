"use client";

import FillForm from "@/app/components/Form";
import { PendingActions } from "@mui/icons-material";

export default function page() {
  return (
    // main div Form/page
    <div className=" w-full   flex flex-col items-center justify-center  bg-gradient-to-r from-bg-[#121212]via-transparent to-bg-[#121212]   ">
      <div className=" flex flex-col items-center !mt-20">
        <h1 className=" !mb-10   filter blur-[0.28px] text-xl font-semibold">
          Prepare Your Task <PendingActions />
        </h1>

        <FillForm />
      </div>
    </div>
  );
}
