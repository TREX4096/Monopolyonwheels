"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import { useSession } from 'next-auth/react';

// Define types for question options
interface Option {
  id: string;
  option: string;
}

// Define types for questions
interface Question {
  questionId: string;
  question: string;
  options: Option[];
  ismarked: boolean;
  isMultipleCorrect: boolean;  // New field to determine if multiple correct answers are allowed
}

// Define props for the EachQuestion component
interface EachQuestionProps {
  question: string;
  questionId: string;
  options: Option[];
  ismarked: boolean;
  onOptionSelect: (optionId: string[]) => void;
  selectedOption: string[];
  handleNavigation: (direction: 'prev' | 'next') => Promise<void>;
  loading: boolean;
  isMultipleCorrect:boolean
}

// TopBar Component
const TopBar: React.FC<{ showBack?: boolean }> = ({ showBack = true }) => {
  const router = useRouter();
  const [isEnglish, setIsEnglish] = useState(true);
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b z-10">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center">
        {showBack && (
          <button 
            onClick={() => router.back()}
            className="mr-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-medium">Monopolyonwheels</h1>
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="text-sm px-3 py-1 rounded-full border bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            {isEnglish ? 'En' : 'عربي'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Progress Bar Component
const ProgressBar: React.FC<{ current: number; total: number }> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-green-400 h-2.5 rounded-full"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};



const EachQuestion: React.FC<EachQuestionProps> = ({
  question,
  options,
  onOptionSelect,
  selectedOption,
  handleNavigation,
  loading,
  isMultipleCorrect, 
}) => {
  const handleOptionSelect = (optionId: string) => {
    if (isMultipleCorrect) {
      // Handle multiple correct options
      if (selectedOption.includes(optionId)) {
        // If the option is already selected, remove it
        onOptionSelect(selectedOption.filter((id) => id !== optionId));
      } else {
        // Otherwise, add it to the selected array
        onOptionSelect([...selectedOption, optionId]);
      }
    } else {
      // Single correct option
      onOptionSelect([optionId]); // Wrap it in an array for consistency
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">{question} {isMultipleCorrect && "(multiple)"}</h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {options.map((opt) => (
          <div
            key={opt.id}
            className={`border rounded-lg p-4 cursor-pointer transition-all ${
              selectedOption.includes(opt.id)
                ? 'border-green-400 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => handleOptionSelect(opt.id)}
          >
            <div className="flex items-center">
              <div
                className={`w-4 h-4 rounded-full border mr-3 flex items-center justify-center ${
                  selectedOption.includes(opt.id)
                    ? 'border-green-400 bg-green-400'
                    : 'border-gray-300'
                }`}
              >
                {selectedOption.includes(opt.id) && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <label className="flex-1 cursor-pointer">{opt.option}</label>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => handleNavigation('prev')}
          className="px-6 py-2 bg-green-400 text-white rounded-full hover:bg-green-500 transition-colors"
        >
          Prev
        </button>
        <button
          onClick={() => handleNavigation('next')}
          disabled={selectedOption.length === 0 || loading}
          className="px-6 py-2 bg-green-400 text-white rounded-full hover:bg-green-500 transition-colors disabled:bg-gray-300"
        >
          {loading ? 'Submitting...' : 'Next'}
        </button>
      </div>
    </div>
  );
};


const Survey: React.FC<{ questions: Question[]; formId: string,isSurvey:boolean }> = ({ questions, formId,isSurvey }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const unmarkedQuestions = questions.filter((question) => !question.ismarked);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const handleNavigation = async (direction: 'prev' | 'next') => {
    setLoading(true);
    setError(null);

    try {

      console.log(userId);
      
      if (direction === 'next' && selectedOption.length > 0 && userId) {
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/mark/${userId}`;
        const body = {
          formId,isSurvey,
          questionId: unmarkedQuestions[currentQuestionIndex].questionId,
          optionIds: selectedOption,
        };

        // Send the answer to mark the question
        await axios.post(url, body);
       
        // Check if we reached the last question
        if (currentQuestionIndex === unmarkedQuestions.length - 1) {
          router.push('/api/user/spin');
        } else {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSelectedOption([]); // Reset selected options for next question
        }
      } else if (direction === 'prev' && currentQuestionIndex > 0) {
        setCurrentQuestionIndex((prev) => prev - 1);
        setSelectedOption([]); // Reset selected options for previous question
      }
      
    } catch (err) {
      setError('Error submitting answer or updating points. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const currentQuestion = unmarkedQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <div className="max-w-2xl mx-auto pt-16 px-4">
        <ProgressBar current={currentQuestionIndex + 1} total={unmarkedQuestions.length} />
        <div className="bg-white rounded-lg shadow-sm p-6">
          <EachQuestion
            question={currentQuestion.question}
            questionId={currentQuestion.questionId}
            options={currentQuestion.options}
            ismarked={currentQuestion.ismarked}
            isMultipleCorrect={currentQuestion.isMultipleCorrect} // Pass the new prop
            onOptionSelect={setSelectedOption}
            selectedOption={selectedOption}
            handleNavigation={handleNavigation}
            loading={loading}
          />
        </div>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Survey;

export {TopBar}
