import React, { useState } from 'react';
import '../assets/styles/QuotesPage.css';

const quotesArr = [
  {
    quote:
      'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding',
    author: 'William Paul Thurston',
  },
  {
    quote:
      'It is impossible to be a mathematician without being a poet in soul.',
    author: 'Sofia Kovalevskaya',
  },
  {
    quote:
      'Mathematics is the most beautiful and most powerful creation of the human spirit.',
    author: 'Stefan Banach',
  },
  {
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein',
  },
  {
    quote: 'Mathematics is the language in which God has written the universe.',
    author: 'Galileo Galilei',
  },
  {
    quote:
      'The essence of mathematics is not to make simple things complicated, but to make complicated things simple.',
    author: 'S. Gudder',
  },
  {
    quote:
      'Mathematics is a way of thinking and a way of life, not just a subject to be studied.',
    author: 'Paul Lockhart',
  },
  {
    quote:
      "In mathematics, you don't understand things. You just get used to them.",
    author: 'John von Neumann',
  },
  {
    quote:
      'If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.',
    author: 'John Louis von Neumann',
  },
  {
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester',
  },
];

const QuotesPage = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesArr.length);
    setQuoteIndex(randomIndex);
  };

  return (
    <div className="quoteContent">
      <p className="quotes">{quotesArr[quoteIndex].quote}</p>
      <p className="author">
        -
        {quotesArr[quoteIndex].author}
      </p>
      <button className="randomBtn" onClick={handleRandomQuote} type="button">
        Random Quote
      </button>
    </div>
  );
};

export default QuotesPage;
