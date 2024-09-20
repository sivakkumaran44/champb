import TestProgress from './components/process';
import testData from '@/components/data/test.json';
import { TestData } from './components/process'; 

const Page = () => {
  return (
    <div>
      <TestProgress data={testData as TestData[]} />
    </div>
  );
};

export default Page;