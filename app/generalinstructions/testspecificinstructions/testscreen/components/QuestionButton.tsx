import React from 'react';

interface QuestionButtonProps {
  index: number;
  status: string;
  isCurrent: boolean;
  onNavigateToQuestion: (subjectIndex: number, questionIndex: number) => void;
  getButtonColor: (status: string) => string;
}

const QuestionButton: React.FC<QuestionButtonProps> = ({
  index,
  status,
  isCurrent,
  onNavigateToQuestion,
  getButtonColor
}) => (
  <div
    key={index}
    className={`flex-shrink-0 w-10 h-10 flex items-center justify-center transition-all border border-none
      ${isCurrent ? '' : ''} 
      ${status === 'not-visited' ? '' : 'rounded-full'}`}
    onClick={() => onNavigateToQuestion(index, index)}
  >
    {status === 'marked-for-review' || status === 'answered-and-marked' ? (
      <svg className="w-12 h-12" viewBox="0 0 24 24">
        <polygon points="12,2 22,22 2,22" fill="purple" />
        {status === 'answered-and-marked' && (
          <g transform="translate(12, 13)">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
              <g>
                <circle cx="12" cy="12" r="10" fill="#4ade80" />
                <text x="12" y="16" fontSize="16" textAnchor="middle" fill="white" fontWeight="bold">!</text>
              </g>
            </svg>
          </g>
        )}
        <text x="50%" y="70%" textAnchor="middle" fill="white" fontSize="10px" fontWeight="normal">
          {index + 1}
        </text>
      </svg>
    ) : (
      <span className={`w-full h-full flex items-center justify-center
        ${status === 'not-visited' ? '' : 'rounded-full'} 
        ${getButtonColor(status)}`}>
        {index + 1}
      </span>
    )}
  </div>
);

export default QuestionButton;
