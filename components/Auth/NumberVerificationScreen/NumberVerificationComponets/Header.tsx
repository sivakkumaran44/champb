import React from 'react';

interface HeaderProps {
  isEditing: boolean;
}

const Header: React.FC<HeaderProps> = ({ isEditing }) => (
  <>
    <h2 className="text-center text-slate-700 text-xl font-bold mb-2">
      {isEditing ? "Edit Mobile Number" : "Enter Mobile Number"}
    </h2>
    <p className="text-center text-sm text-slate-500 mb-4">
      {isEditing
        ? "Please verify your mobile number"
        : "Enter your mobile number to continue"}
    </p>
  </>
);

export default Header;
