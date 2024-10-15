import TestProgress from './components/testprocess';
import testData from '@/components/data/test.json';
import { TestData } from './components/testprocess'; 

const Page = () => {
  return (
    <div>
      <TestProgress data={testData as TestData[]} />
    </div>
  );
};

export default Page;