
import React from 'react';
import { INFO_TAB_CONTENT } from '../constants';
import { InfoSection } from '../types'; // Corrected import path

const InfoSectionCard: React.FC<{ section: InfoSection; level?: number }> = ({ section, level = 0 }) => {
  const headingClass = level === 0 ? "text-2xl font-semibold text-sky-700 mb-3" :
                       level === 1 ? "text-xl font-medium text-sky-600 mt-4 mb-2" :
                       "text-lg font-medium text-sky-500 mt-3 mb-1";

  return (
    <div className={`p-4 mb-4 bg-white rounded-lg shadow ${level > 0 ? 'ml-4 border-l-2 border-sky-200 pl-4' : ''}`}>
      <h3 className={headingClass}>{section.title}</h3>
      <p className="text-gray-700 leading-relaxed">{section.description}</p>
      {section.image && (
        <div className="my-3 flex justify-center">
          <img 
            src={section.image} 
            alt={section.title} 
            className="rounded-md shadow-sm max-w-full h-auto md:max-w-sm"
            loading="lazy"
          />
        </div>
      )}
      {section.example && (
        <p className="text-sm text-gray-600 mt-2">
          <strong className="font-medium text-gray-800">Exemplo:</strong> {section.example}
        </p>
      )}
      {section.subSections && section.subSections.map((sub, index) => (
        <InfoSectionCard key={index} section={sub} level={level + 1} />
      ))}
    </div>
  );
};

const InfoTab: React.FC = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      {INFO_TAB_CONTENT.map((category, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-3xl font-bold text-sky-800 mb-6 pb-2 border-b-2 border-sky-300">
            {category.title}
          </h2>
          {category.sections.map((section, sIndex) => (
            <InfoSectionCard key={sIndex} section={section} />
          ))}
        </section>
      ))}
       <div className="mt-8 p-4 bg-sky-50 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-sky-700 mb-2">Entendeu tudo?</h3>
        <p className="text-gray-700">
          Agora que você revisou os conceitos de transporte ativo e passivo, que tal testar seus conhecimentos? 
          Vá para a aba <strong className="text-sky-600">Quiz</strong> e veja como você se sai! Se tiver dúvidas, 
          use o assistente de IA na aba Quiz para perguntar sobre o tema.
        </p>
      </div>
    </div>
  );
};

export default InfoTab;
