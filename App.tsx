
import React, { useState, useCallback } from 'react';
import InfoTab from './components/InfoTab';
import QuizTab from './components/QuizTab';
import { Tab } from './types';
import { BookOpenIcon, QuestionMarkCircleIcon, ChatBubbleLeftEllipsisIcon } from './components/icons'; // Assuming icons.tsx is created

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Info);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleTabChange = useCallback((tab: Tab) => {
    setActiveTab(tab);
  }, []);

  const toggleChat = useCallback(() => {
    setIsChatOpen(prev => !prev);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      <header className="bg-sky-700 text-white p-4 shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-center">Biologia: Transporte Celular</h1>
      </header>

      <main className="flex-grow overflow-y-auto pb-20 md:pb-4 pt-4">
        {activeTab === Tab.Info && <InfoTab />}
        {activeTab === Tab.Quiz && <QuizTab onToggleChat={toggleChat} />}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg md:hidden">
        <div className="flex justify-around">
          <TabButton
            label="Info"
            icon={<BookOpenIcon className="w-6 h-6 mb-1" />}
            isActive={activeTab === Tab.Info}
            onClick={() => handleTabChange(Tab.Info)}
          />
          <TabButton
            label="Quiz"
            icon={<QuestionMarkCircleIcon className="w-6 h-6 mb-1" />}
            isActive={activeTab === Tab.Quiz}
            onClick={() => handleTabChange(Tab.Quiz)}
          />
        </div>
      </nav>
      
      {/* Desktop Tab Navigation */}
      <nav className="hidden md:flex justify-center p-3 bg-sky-600 shadow-md sticky top-16 z-40">
         <button
            onClick={() => handleTabChange(Tab.Info)}
            className={`px-6 py-2 mx-2 rounded-lg text-sm font-medium transition-colors duration-150 ease-in-out
                        ${activeTab === Tab.Info ? 'bg-sky-800 text-white shadow-md' : 'bg-white text-sky-700 hover:bg-sky-100'}`}
          >
            <BookOpenIcon className="w-5 h-5 inline mr-2" />
            Informações
          </button>
          <button
            onClick={() => handleTabChange(Tab.Quiz)}
            className={`px-6 py-2 mx-2 rounded-lg text-sm font-medium transition-colors duration-150 ease-in-out
                        ${activeTab === Tab.Quiz ? 'bg-sky-800 text-white shadow-md' : 'bg-white text-sky-700 hover:bg-sky-100'}`}
          >
            <QuestionMarkCircleIcon className="w-5 h-5 inline mr-2" />
            Quiz
          </button>
      </nav>

      {isChatOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg h-[80vh] max-h-[600px] flex flex-col">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold text-sky-700">Assistente IA</h2>
                    <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                {/* ChatInterface will be imported and used here once created */}
                {/* For now, a placeholder: */}
                <div className="p-4 flex-grow overflow-y-auto">
                   <p className="text-center text-gray-500">O ChatInterface será carregado aqui.</p>
                   <p className="text-sm text-gray-400 mt-2">Lembre-se: A chave API do Gemini (process.env.API_KEY) deve estar configurada no ambiente de execução.</p>
                </div>
                {/* Placeholder for where ChatInterface component will go */}
                {/* <ChatInterface defaultPromptTopic="transporte ativo e passivo da biologia" /> */}
            </div>
        </div>
      )}

    </div>
  );
};


interface TabButtonProps {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, icon, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center p-3 text-xs font-medium transition-colors duration-150 ease-in-out
                  ${isActive ? 'text-sky-600 border-t-2 border-sky-600 bg-sky-50' : 'text-gray-600 hover:bg-gray-100'}`}
    >
      {icon}
      {label}
    </button>
  );
};


export default App;
    