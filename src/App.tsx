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
      <div className="background " style={{backgroundColor: randomColor}}>
        <div id="quote-box">

          <div className="quote-content">
            <h2 id="text" style={{color: randomColor, textAlign:"center"}}>
              <FaQuoteLeft size="25" style={{marginRight: 10}}/>
                {quote.quote}
            </h2>

            <h6 id="author" style={{color: randomColor}}> - {quote.author}</h6>
          </div>
          
          <div className="buttons">

            <a href={tweetUrl()} target="_blank" id="tweet-quote" className="newTweet"
              style={{backgroundColor: randomColor, paddingRight:"15px", paddingLeft: "15px"}}>
              <FaTwitter style={{color:"white"}}/>
            </a>

            <button onClick={newQuote} id="new-quote" className="newQuote" style={{backgroundColor: randomColor, border:0}}>
              New Quote
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
