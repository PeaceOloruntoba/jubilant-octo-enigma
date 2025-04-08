// InputBox.js
import React, { useState } from 'react';
import { Icons } from './Icons';

const InputBox = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <div className="w-full px-4 py-2">
      <div className="flex items-center w-full max-w-4xl mx-auto bg-white rounded-md shadow-sm">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Let the magic begin, Ask a question"
          className="flex-grow px-4 py-2 outline-none rounded-l-md"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 text-xl text-gray-600 hover:text-black"
        >
          <Icons.Send />
        </button>
      </div>
    </div>
  );
};

export default InputBox;