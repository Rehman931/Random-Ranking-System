import React, { useState } from "react";
import AddMember from './AddMember';

const AddMem = () => {
  const [AddMemValue, setAddMemValue] = useState("");

  return (
    <div className="h-[8vh] w-full sm:w-[70vw] md:w-[50vw] lg:w-[30vw] flex justify-evenly items-center rounded-lg">
      <input
        type="text"
        placeholder="Enter User Name"
        className="border border-gray-300 p-2 rounded-md w-1/2"
        onChange={(e) => setAddMemValue(e.target.value)}
        value={AddMemValue}
      />
      <button
        className="bg-orange-400 text-white px-4 py-2 rounded-md font-bold shadow-md"
        onClick={() => AddMember(AddMemValue)}
      >
        Add User
      </button>
    </div>
  );
};

export default AddMem;
