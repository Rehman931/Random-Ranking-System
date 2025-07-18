import React from "react";
import AddMem from '../AddMember/AddMem'
const Header = () => {
  return (
    <>
      <header className="h-[10vh] w-full bg-slate-400 flex flex-row justify-end items-center">
        <AddMem/>
      </header>
    </>
  );
};

export default Header;
