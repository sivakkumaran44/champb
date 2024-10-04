import React from 'react';
import Banner from './components/Banner';
import SearchableSubscriptionCards from './components/SearchableSubscriptionCards';
const page = () => {
  return (
    <div>   
      <div className="container mx-auto px-4 py-8 space-y-8">
      <Banner />
      </div>
      <div>
<SearchableSubscriptionCards/>
        </div>
        </div>
       
  );
};

export default page;
