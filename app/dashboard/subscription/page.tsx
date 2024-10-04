import React from 'react';
import Banner from './components/Banner';
import GoldCard from './components/GoldCard';
import SearchBar from './components/SearchBarAllExam';
const page = () => {
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
      <div className="w-full md:w-auto">
        <GoldCard />
      </div>
    </div>
  );
};

export default page;
