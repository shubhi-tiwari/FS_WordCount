import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        rows="6"
        cols="50"
        placeholder="Enter your text here..."
        onChange={handleChange}
        value={text}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default WordCounter;