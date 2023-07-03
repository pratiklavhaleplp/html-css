import React, { useState } from 'react';
import ReactForms from '../reactForms/ReactForms';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Navbar() {
  const [showModel, setShowModel] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1256);
  const [showSmallNav, setShowSmallNav] = useState(false);
  const handelResize = () => {
    setScreenWidth(window.innerWidth);
  }
  window.addEventListener('resize', handelResize);
  return (
    <div className="w-[100%] px-[5%] mx-auto grid md:grid-cols-3 h-[65px] sticky top-0 bg-gray-100">
      <div className="text-3xl text-left my-auto">affirm</div>
      <div className="col-span-2 my-auto">
        {screenWidth >= 1253 ? <div className="grid grid-cols-7">
          <div className="text-[1rem] hover:cursor-pointer text-center">Deals</div>
          <div className="text-[1rem] hover:cursor-pointer text-center" onClick={() => { setShowModel(true) }}>Open form</div>
          <div className="text-[1rem] hover:cursor-pointer text-center">Earn</div>
          <div className="text-[1rem] hover:cursor-pointer text-center border-x-[1px]">For business</div>
          <div className="text-[1rem] hover:cursor-pointer text-center"><span className="mr-[5%]">&#128100;</span>Sign in</div>
          <div className="text-[1rem] hover:cursor-pointer text-center w-[115%]"><span className="mr-[3%]">&#128241;</span>Download app</div>
          <div className="text-[1rem] hover:cursor-pointer text-center">USA</div>
        </div> :
          <div>
            <GiHamburgerMenu onClick={() => setShowSmallNav(true)} className='text-3xl float-right hover:cursor-pointer' />
            {showSmallNav ? <div className='absolute right-0 top-0 bg-gray-100 border-2 w-[17%]'><span><AiOutlineCloseCircle onClick={() => { setShowSmallNav(false) }} className='float hover:cursor-pointer float-right text-3xl m-3' /></span>
              <ul>
                <li className="text-[1rem] hover:cursor-pointer text-left px-6 py-2 mt-10">Deals</li>
                <li className="text-[1rem] hover:cursor-pointer text-left px-6 py-2" onClick={() => { setShowModel(true) }}>Open form</li>
                <li className="text-[1rem] hover:cursor-pointer text-left px-6 py-2">Earn</li>
                <li className="text-[1rem] hover:cursor-pointer text-left px-6 py-2">For business</li>
                <li className="text-[1rem] hover:cursor-pointer text-left px-6 py-2"><span className="mr-[5%]">&#128100;</span>Sign in</li>
                <li className="text-[1rem] hover:cursor-pointer text-left px-6 py-2 w-[115%]"><span className="mr-[3%]">&#128241;</span>Download app</li>
                <li className="text-[1rem] hover:cursor-pointer text-left px-6 py-2">USA</li>
              </ul>
            </div> :
              ''}
          </div>}
      </div>
      <ReactForms showModel={showModel} setShowModel={setShowModel} />
    </div>
  );
}

export default Navbar;
