import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <Link href={"./pages/form"}>
        <p className="border-b border-transparent hover:border-white cursor-pointer p-2 hover:font-semibold transition-all">
          Create Painting Task
        </p>
      </Link>
    </div>
  );
}
