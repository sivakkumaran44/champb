import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DetailsFormProps {
  firstName: string;
  lastName: string;
  exam: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setExam: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const DetailsForm: React.FC<DetailsFormProps> = ({
  firstName,
  lastName,
  exam,
  setFirstName,
  setLastName,
  setExam,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
      <div className="space-y-1 sm:space-y-2">
        <label htmlFor="firstName" className="text-xs sm:text-sm text-gray-600">*First name</label>
        <Input
          id="firstName"
          name="firstName"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full bg-gray-100 border-slate-300 rounded-md shadow-none text-sm sm:text-base"
          required
        />
      </div>
      <div className="space-y-1 sm:space-y-2">
        <label htmlFor="lastName" className="text-xs sm:text-sm text-gray-600">*Last name</label>
        <Input
          id="lastName"
          name="lastName"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full bg-gray-100 border-slate-300 rounded-md shadow-none text-sm sm:text-base"
          required
        />
      </div>
      <div className="space-y-1 sm:space-y-2">
        <label htmlFor="exam" className="text-xs sm:text-sm text-gray-600">*Select your exam</label>
        <Select value={exam} onValueChange={setExam} required>
          <SelectTrigger id="exam" name="exam" className="w-full bg-gray-100 border-slate-300 rounded-md shadow-none text-sm sm:text-base">
            <SelectValue placeholder="Select your exam" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="exam1">Exam 1</SelectItem>
            <SelectItem value="exam2">Exam 2</SelectItem>
            <SelectItem value="exam3">Exam 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Button 
          type="submit"
          id="submit-button"
          name="submit-button"
          className="w-full bg-emerald-700 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 transition-colors duration-300 py-2 text-base sm:text-lg font-medium rounded-md"
        >
          Continue
        </Button>
      </div>
    </form>
  );
};

export default DetailsForm;
