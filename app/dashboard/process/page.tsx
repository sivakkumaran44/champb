import TestProgress from './components/process';
import testData from '@/components/data/test.json';

const YourPage = () => {
  return (
    <div>
      <TestProgress data={testData} />
    </div>
  );
};

export default YourPage;