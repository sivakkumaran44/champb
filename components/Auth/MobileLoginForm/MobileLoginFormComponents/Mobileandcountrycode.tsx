import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import ReactCountryFlag from 'react-country-flag';
import countryData from '@/components/data/countrydata.json';
interface MobileandcountrycodeProps {
  countryCode: string;
  mobileNumber: string;
  onCountryCodeChange: (value: string) => void;
  onMobileNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Mobileandcountrycode: React.FC<MobileandcountrycodeProps> = ({
  countryCode,
  mobileNumber,
  onCountryCodeChange,
  onMobileNumberChange,
}) => {
  const selectedCountry = countryData.find((c) => c.dial_code === countryCode);
 return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-2">
      <Select name="country-code-select" onValueChange={onCountryCodeChange} value={countryCode}>
        <SelectTrigger className="w-full sm:w-[100px] bg-white">
          <SelectValue>
            {selectedCountry && (
              <span className="flex items-center">
                <ReactCountryFlag countryCode={selectedCountry.code} svg className="mr-2 h-4 w-6" />
                {selectedCountry.dial_code}
              </span>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {countryData.map((country) => (
            <SelectItem key={country.code} value={country.dial_code}>
              <span className="flex items-center">
                <ReactCountryFlag countryCode={country.code} svg className="mr-2 h-4 w-6" />
                {country.name} ({country.dial_code})
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        name="mobileNumber"
        placeholder="Enter mobile number"
        value={mobileNumber}
        onChange={onMobileNumberChange}
        className="w-full sm:w-[300px] bg-white outline-none"
      />
    </div>
  );
};
export default Mobileandcountrycode;
