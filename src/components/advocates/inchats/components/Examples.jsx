// Examples.js
import React from 'react';
import { Icons } from './Icons';

const Examples = ({ onExampleClick }) => {
  const questions = new Array(9).fill(
    'How do I get started with Market!N !NChat?'
  );

  return (
    <div className="p-8 text-center">
      <Icons.ChatBubble className="mx-auto text-3xl" />
      <h2 className="text-lg font-semibold my-2">Examples</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {questions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => onExampleClick(q)}
            className="bg-white px-4 py-2 rounded shadow-sm hover:bg-gray-100"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Examples;