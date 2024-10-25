import { useState } from "react";


interface Option {
  id: string;
  option: string;
}


interface QuestionProps {
  question: string;
  questionId: string;
  options: Option[];
  ismarked: boolean;
  set_Selected_Option: (value: string[] | string) => void; // Updated to handle array or string
  formId: string;
  isMultipleCorrect: boolean; // Add a new prop
}

export default function EachQuestion({
  question,
  options,
  set_Selected_Option,
  isMultipleCorrect, // Add a new prop
}: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string[]>([]); // Now an array

  const handleOptionSelect = (optionId: string) => {
    if (isMultipleCorrect) {
      // Handle multiple correct answers
      if (selectedOption.includes(optionId)) {
        setSelectedOption(selectedOption.filter((id) => id !== optionId));
      } else {
        setSelectedOption([...selectedOption, optionId]);
      }
    } else {
      setSelectedOption([optionId]); // Single select
    }

    set_Selected_Option(isMultipleCorrect ? selectedOption : optionId);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white min-h-screen sm:p-8 lg:p-10">
      <div className="mb-6">
        <p className="text-gray-600 text-sm">Question</p>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">{question}</h2>
      </div>
      <div className="space-y-4">
        {options.map((opt) => (
          <div
            key={opt.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedOption.includes(opt.id) ? 'border-green-400 bg-green-50' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleOptionSelect(opt.id)}
          >
            <div className="flex items-center">
              <div
                className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                  selectedOption.includes(opt.id) ? 'border-green-400 bg-green-400' : 'border-gray-300'
                }`}
              >
                {selectedOption.includes(opt.id) && <div className="w-3 h-3 bg-white rounded-full" />}
              </div>
              <label className="flex-1 cursor-pointer text-lg">{opt.option}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
