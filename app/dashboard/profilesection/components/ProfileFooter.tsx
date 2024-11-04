import React from 'react';
import Link from 'next/link';

const ProfileFooter = () => {

  return (
   <div>
      <footer className="mt-auto border-t border-gray-200 bg-white">
        <div className="container mx-auto py-3 sm:py-4 px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-600 space-y-2 sm:space-y-0">
            <div className="text-center sm:text-left">
              © {new Date().getFullYear()} Sangaas Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 sm:space-x-6">
              <Link 
                href="/dashboard/termsandconditions" 
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link 
                href="/dashboard/privacypolicy" 
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfileFooter;