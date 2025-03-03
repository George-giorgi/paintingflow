export default function FillForm() {
  return (
    <div className="">
      <form className=" flex flex-col gap-3 ">
        <input
          type="text"
          placeholder="Enter item number..."
          className=" w-full px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
        />
        <div className=" flex md:flex-row flex-col gap-2 w-full justify-between">
          <div className=" flex gap-2">
            <input
              type="text"
              placeholder="height"
              className="w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
            />
            <input
              type="text"
              placeholder="length"
              className="w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
            />
          </div>

          <div className=" flex gap-2">
            <input
              type="text"
              placeholder="width"
              className="w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
            />
            <input
              type="text"
              placeholder="weight"
              className="w-28 px-2 py-2 text-center border-b border-gray-300 focus:outline-none transition-colors duration-150 ease-in-out appearance-none focus:placeholder-opacity-0"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
