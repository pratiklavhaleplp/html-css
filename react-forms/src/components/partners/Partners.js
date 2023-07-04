import React from 'react';
import { AiOutlineTag } from 'react-icons/ai';
import amazon from '../../media/amazon.webp';
import goat from '../../media/goat.webp';
import hotels from '../../media/hotels.webp';
import pleaton from '../../media/pleaton ecomers.webp';
import priceline from '../../media/priceline.webp';
import purple from '../../media/purple.webp';
import target from '../../media/target.webp';
import theReal from '../../media/the real real.png';
import walmart from '../../media/walmart.webp';

function Partners() {
  return (
    <div className=" container my-[7%] mx-auto">
      <p className="lg:text-3xl font-semibold mb-7">We partner with the best</p>
      <div className="grid md:grid-rows-2 lg:grid-rows-3 sm:grid-rows-2 container mx-auto">
        <div className='lg:row-span-2 md:row-span-1 sm:row-span-1 sm:mb-[4%] lg:mb-[2%] md:mb-[2%]'>
          <div className="grid grid-cols-4 md:grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 gap-5">
            <div className="grid grid-rows-3 col-span-2 lg:max-h-[25em] md:max-h-[34em] sm:max-h-[30em] row-span-2 gap-5">
              <div className=''>
                <img src={amazon} className='rounded-[10px]' alt='amazon' />
                <p className='font-bold pt-3'>Amazon</p>
                <p className='flex self-center mt-1'><AiOutlineTag className='mr-[10px] text-2xl' />Browse todays deals!</p>
              </div>
            </div>
            <div className=''>
              <img src={walmart} className='rounded-[10px]' alt='walmart' />
              <p className='font-bold pt-3'>Walmart.com</p>
            </div>
            <div className='sm:col-span-2 lg:col-span-1'>
              <img src={target} className='rounded-[10px]' alt='target' />
              <p className='font-bold pt-3'>Target</p>
              <p className='flex self-center mt-1'><AiOutlineTag className='mr-[10px] text-2xl' />Up to 35% off Floor Care</p>
            </div>
            <div className='sm:col-span-2 lg:col-span-1'>
              <img src={hotels} className='rounded-[10px]' alt='hotels' />
              <p className='font-bold pt-3'>Expedia Hotels & Vacation Packages</p>
              <p className='flex self-center mt-1'><AiOutlineTag className='mr-[10px] text-2xl' />Save 30% During The Summer Sale.</p>
            </div>
            <div className='sm:col-span-2 lg:col-span-1'>
              <img src={pleaton} className='rounded-[10px]' alt='pleaton' />
              <p className='font-bold pt-3'>Peloton E-commerce</p>
              <p className='flex self-center mt-1'><AiOutlineTag className='mr-[10px] text-2xl' />Shop the Peloton Row starting at $0 down and </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:gap-5">
          <div className=''>
            <img src={purple} className='rounded-[10px]' alt='purple' />
            <p className='font-bold pt-0'>Purple</p>
            <p className='flex self-center'><AiOutlineTag className='mr-[10px] text-2xl' />Save on New Day Mattresses.</p>
          </div>
          <div className=''>
            <img src={theReal} className='rounded-[10px]' alt='the Real' />
            <p className='font-bold pt-0'>TheRealReal</p>
            <p className='flex self-center'><AiOutlineTag className='mr-[10px] text-2xl' />Authenticated Luxury Resale</p>
          </div>
          <div className=''>
            <img src={priceline} className='rounded-[10px]' alt='priceline' />
            <p className='font-bold pt-0'>Priceline</p>
            <p className='flex self-center'><AiOutlineTag className='mr-[10px] text-2xl' />Book today, pay over time.</p>
          </div>
          <div className=''>
            <img src={goat} className='rounded-[10px]' alt='goat' />
            <p className='font-bold pt-0'>GOAT</p>
            <p className='flex self-center'><AiOutlineTag className='mr-[10px] text-2xl' />As low as 0% APR</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Partners;
