import { useState } from 'react';
import { FaQuoteLeft, FaTwitter } from 'react-icons/fa';
import './App.css';
import quotes from './assets/quotes.json';

//created an object that is to be expected.
interface Quote {
  quote: string;
  author: string;
}

//will return a type Quote object
const quoteGenerator = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

//will return a type Quote object
const colorGenerator = (): string => {
  const red = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

function App() {
  const [quote, setQuote] = useState<Quote>(quoteGenerator());
  const [randomColor, setRandomColor] = useState<string>(colorGenerator());

  const newQuote = () => {
    setQuote(quoteGenerator());
    setRandomColor(colorGenerator());
  }

  const tweetUrl = (): string => {
    const tweet = `" ${quote.quote} " - ${quote.author}`;
    return `https://twitter.com/intent/post?text=${encodeURIComponent(tweet)}`;
  }

  return (
    <>
      <div className="background" style={{backgroundColor: randomColor}}>
        <div id="quote-box">

          <div className="quote-content">
            <h2 id="text">
              <FaQuoteLeft size="30"/> 
                {quote.quote}
            </h2>

            <h5 id="author"> - {quote.author}</h5>
          </div>
          
          <div className="buttons">

            <a href={tweetUrl()} target="_blank" id="tweet-quote"
              style={{backgroundColor: "black", paddingRight:"15px", paddingLeft: "15px", paddingBottom:"5px"}}>
              <FaTwitter style={{color:"white"}}/>
            </a>

            <button onClick={newQuote} id="new-quote">
              New Quote
            </button>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default App
