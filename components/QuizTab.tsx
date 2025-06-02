
import React, { useState, useEffect, useCallback } from 'react';
import { BIOLOGY_QUIZ_QUESTIONS, AI_ASSISTANT_SYSTEM_PROMPT } from '../constants';
import { QuizQuestionType } from '../types';
import { shuffleArray } from '../utils/arrayUtils';
import QuizQuestionCard from './QuizQuestionCard';
import ChatInterface from './ChatInterface';
import { ChatBubbleLeftEllipsisIcon, ArrowPathIcon } from './icons';

interface QuizTabProps {
  onToggleChat: () => void;
}

const QuizTab: React.FC<QuizTabProps> = ({ onToggleChat }) => {
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizOver, setQuizOver] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const loadQuestions = useCallback(() => {
    const shuffledQuestions = shuffleArray(BIOLOGY_QUIZ_QUESTIONS);
    // Optionally shuffle options for each question
    const questionsWithShuffledOptions = shuffledQuestions.map(q => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setQuestions(questionsWithShuffledOptions.slice(0, 10)); // Take first 10 questions for a shorter quiz
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setQuizOver(false);
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const handleAnswerSelect = useCallback((answer: string) => {
    if (showAnswer) return; // Prevent changing answer after it's shown
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
  }, [showAnswer, questions, currentQuestionIndex]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setQuizOver(true);
    }
  }, [currentQuestionIndex, questions.length]);

  const handleRestartQuiz = useCallback(() => {
    loadQuestions();
  }, [loadQuestions]);

  const toggleChatInterface = useCallback(() => {
    setIsChatVisible(prev => !prev);
  },[]);

  if (questions.length === 0) {
    return <div className="text-center p-8 text-gray-600">Carregando quiz...</div>;
  }

  if (quizOver) {
    return (
      <div className="container mx-auto p-4 max-w-md text-center">
        <div className="bg-white p-6 rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-sky-700 mb-4">Quiz Finalizado!</h2>
          <p className="text-xl text-gray-700 mb-6">
            Sua pontuação: <strong className="text-sky-600">{score}</strong> de {questions.length}
          </p>
          <div className="space-y-3">
            <button
              onClick={handleRestartQuiz}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-lg shadow transition duration-150 ease-in-out flex items-center justify-center"
            >
              <ArrowPathIcon className="w-5 h-5 mr-2" />
              Reiniciar Quiz
            </button>
            <button
              onClick={toggleChatInterface}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-lg shadow transition duration-150 ease-in-out flex items-center justify-center"
            >
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" />
              Perguntar à IA
            </button>
          </div>
        </div>
        {isChatVisible && (
             <div className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-2 sm:p-4">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg h-[90vh] max-h-[700px] flex flex-col overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b bg-sky-50">
                        <h2 className="text-xl font-semibold text-sky-700">Assistente IA - Biologia Celular</h2>
                        <button onClick={toggleChatInterface} className="text-gray-500 hover:text-gray-800 transition-colors">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <ChatInterface defaultSystemPrompt={AI_ASSISTANT_SYSTEM_PROMPT} />
                </div>
            </div>
        )}
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-2 sm:p-4 max-w-xl">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-sky-700">Pergunta {currentQuestionIndex + 1} de {questions.length}</h2>
          <p className="text-lg font-medium text-sky-600">Pontuação: {score}</p>
        </div>
        <QuizQuestionCard
          questionData={currentQuestion}
          onAnswerSelect={handleAnswerSelect}
          selectedAnswer={selectedAnswer}
          showAnswer={showAnswer}
        />
        {showAnswer && (
          <button
            onClick={handleNextQuestion}
            className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg shadow transition duration-150 ease-in-out"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
          </button>
        )}
      </div>
       <div className="mt-6 text-center">
          <button
              onClick={toggleChatInterface}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-150 ease-in-out flex items-center justify-center mx-auto"
            >
              <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-2" />
              Tem dúvidas? Pergunte à IA!
          </button>
      </div>
       {isChatVisible && (
             <div className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-2 sm:p-4">
                <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg h-[90vh] max-h-[700px] flex flex-col overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b bg-sky-50">
                        <h2 className="text-xl font-semibold text-sky-700">Assistente IA - Biologia Celular</h2>
                        <button onClick={toggleChatInterface} className="text-gray-500 hover:text-gray-800 transition-colors">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                    <ChatInterface defaultSystemPrompt={AI_ASSISTANT_SYSTEM_PROMPT} />
                </div>
            </div>
        )}
    </div>
  );
};

export default QuizTab;
    