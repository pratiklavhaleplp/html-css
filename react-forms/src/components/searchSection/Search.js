import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
function Search() {
  const [showInput, setShowInput] = useState(false);
  const inputHandler = (e) => {
    if (e.target.value === '')
      setShowInput(false);
  }
  return (
    <div className='text-center mt-[3%] font-semibold'>
      <p className='lg:text-5xl md:text-3xl sm:text-2xl'>Shop at thousands of stores</p>
      <div className='grid grid-rows-2 grid-flow-col h-[4.5em] border rounded-full mt-5 mx-[20%] py-2'>
        <p className="text-start col-span-1 text-[1rem] text-gray-300 mx-[7%]">STORES</p>
        {showInput ? <input onChange={inputHandler} className='mx-[7%] border-0 focus:outline-none'></input> : <p className="text-start pb-10 px-[7%] font-light text-xl" onClick={() => { setShowInput(true) }}>Where are you shoping?</p>}
        <div className="row-span-2 self-center p-[10px] pl-[10px] mr-[10px]"><div className="text-4xl w-fit-content p-[12px] rounded-full bg-slate-400 float-right"><AiOutlineSearch /></div></div>
      </div>
    </div>
  );
}

export default Search;
