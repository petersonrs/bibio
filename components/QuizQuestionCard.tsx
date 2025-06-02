
import React from 'react';
import { QuizQuestionType } from '../types';

interface QuizQuestionCardProps {
  questionData: QuizQuestionType;
  onAnswerSelect: (answer: string) => void;
  selectedAnswer: string | null;
  showAnswer: boolean;
}

const QuizQuestionCard: React.FC<QuizQuestionCardProps> = ({
  questionData,
  onAnswerSelect,
  selectedAnswer,
  showAnswer,
}) => {
  const { question, image, options, correctAnswer, explanation } = questionData;

  return (
    <div className="bg-sky-50 p-4 sm:p-6 rounded-lg border border-sky-200">
      <p className="text-lg font-medium text-gray-800 mb-4">{question}</p>
      {image && (
        <div className="my-4 flex justify-center">
          <img 
            src={image} 
            alt="Ilustração da pergunta" 
            className="rounded-md shadow-sm max-w-full h-auto max-h-60 object-contain"
            loading="lazy"
          />
        </div>
      )}
      <div className="space-y-3">
        {options.map((option, index) => {
          const isSelected = selectedAnswer === option;
          const isCorrect = option === correctAnswer;
          
          let buttonClass = "w-full text-left p-3 rounded-lg border-2 transition-all duration-150 ease-in-out ";
          if (showAnswer) {
            if (isCorrect) {
              buttonClass += "bg-green-100 border-green-500 text-green-700 font-semibold";
            } else if (isSelected && !isCorrect) {
              buttonClass += "bg-red-100 border-red-500 text-red-700";
            } else {
              buttonClass += "bg-gray-100 border-gray-300 text-gray-600 opacity-70";
            }
          } else {
             buttonClass += isSelected 
              ? "bg-sky-200 border-sky-500 ring-2 ring-sky-500" 
              : "bg-white border-sky-300 hover:bg-sky-100 hover:border-sky-400";
          }

          return (
            <button
              key={index}
              onClick={() => onAnswerSelect(option)}
              disabled={showAnswer}
              className={buttonClass}
            >
              {option}
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <div className={`mt-4 p-3 rounded-md text-sm
          ${selectedAnswer === correctAnswer ? 'bg-green-50 border-green-300 border text-green-700' : 'bg-red-50 border-red-300 border text-red-700'}`}
        >
          <p className="font-semibold mb-1">
            {selectedAnswer === correctAnswer ? 'Resposta Correta!' : 'Resposta Incorreta.'}
          </p>
          {selectedAnswer !== correctAnswer && <p>A resposta correta é: <strong>{correctAnswer}</strong></p>}
          <p className="mt-2">{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestionCard;
    