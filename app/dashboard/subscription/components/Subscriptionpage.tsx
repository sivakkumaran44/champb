import React from 'react';
import Banner from './Banner';
import GoldCard from './GoldCard';
import SearchBar from './SearchBarAllExam';
import AllExamButton from './AllExamButton';

const Subscription = () => {
  return (
    <div>   
      <div className="container mx-auto px-4 py-8 space-y-8">
      <Banner />
      </div>
       <div className="flex justify-center items-center w-full px-4 py-8 space-y-8">
        <div className="w-full md:w-1/2">
          <SearchBar />
        </div>
      </div>
      <div className='flex justify-center items-center'>     
       <div className=" w-full md:w-1/2">
          <AllExamButton />
        </div>
        </div>
      <div className="w-full md:w-auto">
        <GoldCard />
      </div>
    </div>
  );
};

export default Subscription;
