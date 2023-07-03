import React, { useState } from 'react';
import ReactForms from '../reactForms/ReactForms';

function Navbar() {
  const [showModel, setShowModel] = useState(false);
  return (
    <div className="w-[100%] px-[5%] mx-auto grid md:grid-cols-3 h-[65px] sticky top-0 bg-gray-100">
      <div className="text-3xl text-left my-auto">affirm</div>
      <div className="col-span-2 my-auto">
        <div className="grid grid-cols-7">
          <div className="text-[1rem] hover:cursor-pointer text-center">Deals</div>
          <div className="text-[1rem] hover:cursor-pointer text-center" onClick={() => { setShowModel(true) }}>Open form</div>
          <div className="text-[1rem] hover:cursor-pointer text-center">Earn</div>
          <div className="text-[1rem] hover:cursor-pointer text-center border-x-[1px]">For business</div>
          <div className="text-[1rem] hover:cursor-pointer text-center"><span className="mr-[5%]">&#128100;</span>Sign in</div>
          <div className="text-[1rem] hover:cursor-pointer text-center w-[115%]"><span className="mr-[3%]">&#128241;</span>Download app</div>
          <div className="text-[1rem] hover:cursor-pointer text-center">USA</div>
        </div>
      </div>
      <ReactForms showModel={showModel} setShowModel={setShowModel} />
    </div>
  );
}

export default Navbar;
