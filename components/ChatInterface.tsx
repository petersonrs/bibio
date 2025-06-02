
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse, Part, Content } from '@google/genai';
import { ChatMessage, GroundingChunk } from '../types';
import { GEMINI_MODEL_NAME } from '../constants';
import { PaperAirplaneIcon, SparklesIcon, LinkIcon } from './icons'; // Assuming icons.tsx exists
import LoadingSpinner from './LoadingSpinner';

interface ChatInterfaceProps {
  defaultSystemPrompt: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ defaultSystemPrompt }) => {
  const [userInput, setUserInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [geminiChat, setGeminiChat] = useState<Chat | null>(null);
  const [apiKeyExists, setApiKeyExists] = useState<boolean>(false);

  useEffect(() => {
    if (process.env.API_KEY) {
      setApiKeyExists(true);
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const newChat = ai.chats.create({
          model: GEMINI_MODEL_NAME,
          config: {
            systemInstruction: defaultSystemPrompt,
          },
          history: [] // Start with empty history for this session
        });
        setGeminiChat(newChat);
        setChatHistory([
          { 
            id: Date.now().toString(), 
            sender: 'ai', 
            text: 'Olá! Como posso ajudar com suas dúvidas sobre transporte ativo e passivo em biologia?', 
            timestamp: new Date() 
          }
        ]);
      } catch (e) {
        console.error("Error initializing Gemini chat:", e);
        setError("Erro ao inicializar o chat com a IA. Verifique a configuração da API Key.");
        setApiKeyExists(false);
      }
    } else {
      setError("API_KEY do Gemini não encontrada. Configure-a no ambiente.");
      setApiKeyExists(false);
    }
  }, [defaultSystemPrompt]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSendMessage = useCallback(async () => {
    if (!userInput.trim() || isLoading || !geminiChat) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userInput,
      timestamp: new Date(),
    };
    setChatHistory(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const stream = await geminiChat.sendMessageStream({ message: userMessage.text });
      let aiResponseText = '';
      let sources: GroundingChunk[] | undefined = undefined;

      // Prepare a placeholder for the AI's streaming response
      const aiMessageId = (Date.now() + 1).toString();
      const initialAiMessage: ChatMessage = {
        id: aiMessageId,
        sender: 'ai',
        text: '',
        timestamp: new Date(),
        sources: undefined,
      };
      setChatHistory(prev => [...prev, initialAiMessage]);

      for await (const chunk of stream) { // chunk is GenerateContentResponse
        aiResponseText += chunk.text;
        if (chunk.candidates && chunk.candidates[0]?.groundingMetadata?.groundingChunks) {
             sources = chunk.candidates[0].groundingMetadata.groundingChunks;
        }
        
        // Update the AI message in chatHistory as it streams
        setChatHistory(prev => prev.map(msg => 
            msg.id === aiMessageId ? { ...msg, text: aiResponseText, sources: sources } : msg
        ));
      }
      
    } catch (e: any) {
      console.error('Error sending message to Gemini:', e);
      setError(`Erro ao comunicar com a IA: ${e.message || 'Erro desconhecido'}`);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: `Desculpe, ocorreu um erro: ${e.message || 'Não foi possível processar sua solicitação.'}`,
        timestamp: new Date(),
      };
      setChatHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [userInput, isLoading, geminiChat]);

  if (!apiKeyExists) {
    return (
      <div className="p-4 text-center text-red-600 bg-red-50 rounded-md m-4">
        <h3 className="font-semibold text-lg mb-2">Erro de Configuração</h3>
        <p>{error || "A chave da API do Gemini (API_KEY) não foi encontrada. Por favor, configure-a nas variáveis de ambiente para usar o assistente de IA."}</p>
        <p className="text-sm mt-2">Esta funcionalidade requer uma API Key válida do Google Gemini.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div ref={chatContainerRef} className="flex-grow p-4 space-y-4 overflow-y-auto">
        {chatHistory.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] p-3 rounded-xl shadow
                ${msg.sender === 'user' 
                  ? 'bg-sky-500 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-200'}`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-sky-200' : 'text-gray-400'} text-right`}>
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              {msg.sender === 'ai' && msg.sources && msg.sources.length > 0 && (
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <p className="text-xs font-semibold text-gray-600 mb-1">Fontes:</p>
                  <ul className="space-y-1">
                    {msg.sources.map((source, index) => {
                      if (source.web && source.web.uri) {
                        let displayText = source.web.title;
                        if (!displayText) {
                          try {
                            displayText = new URL(source.web.uri).hostname;
                          } catch (e) {
                            displayText = source.web.uri.length > 50 ? source.web.uri.substring(0,47) + "..." : source.web.uri;
                            console.warn(`Could not parse hostname from URI: ${source.web.uri}`, e);
                          }
                        }
                        if (!displayText) {
                           displayText = "Fonte";
                        }

                        return (
                          <li key={`${msg.id}-source-${index}`} className="text-xs">
                            <a
                              href={source.web.uri}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sky-600 hover:text-sky-800 hover:underline flex items-center"
                            >
                              <LinkIcon className="w-3 h-3 mr-1 flex-shrink-0" />
                              {displayText}
                            </a>
                          </li>
                        );
                      }
                      // Optionally handle source.retrievedContext here
                      return null;
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-3 rounded-lg shadow bg-white text-gray-800 rounded-bl-none border border-gray-200 flex items-center">
              <LoadingSpinner className="w-5 h-5 text-sky-500 mr-2" />
              <span>A IA está digitando...</span>
            </div>
          </div>
        )}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <SparklesIcon className="w-6 h-6 text-sky-500 flex-shrink-0" />
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
            placeholder="Pergunte sobre transporte celular..."
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition-shadow"
            disabled={isLoading || !apiKeyExists}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !userInput.trim() || !apiKeyExists}
            className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 disabled:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            aria-label="Enviar mensagem"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
