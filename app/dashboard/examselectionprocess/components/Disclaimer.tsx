import disclaimerData from '@/components/data/disclaimer.json';
const Disclaimer: React.FC = () => {
  return (
    <div className="mb-4">
      <h2 className="text-lg text-slate-700 font-bold mb-4">{disclaimerData.title}</h2>
      <p className="text-lg text-slate-700">
        The Exam Selection Probability feature is designed to provide an estimate of your potential performance based on your mock test results. Please read and acknowledge the following:
      </p>
      <div className="space-y-4 text-slate-700 text-base mb-12">
        {disclaimerData.content.map((item, index) => (
          <p key={index}>
            <strong>{item.title}:</strong> {item.description}
          </p>
        ))}
      </div>
    </div>
  );
}
export default Disclaimer