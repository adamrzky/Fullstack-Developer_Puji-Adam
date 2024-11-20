import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const QuoteList = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/quotes") 
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

 
  useEffect(() => {
    if (quotes.length > 0) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length); 
      }, 5000); 

      return () => clearInterval(interval); 
    }
  }, [quotes]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <p>Loading...</p> 
      ) : (
        <TransitionGroup>
          <CSSTransition
            key={quotes[currentQuoteIndex]?.c} 
            timeout={500} 
            classNames="quote-item-text"
          >
            <div className="quote-item p-4 bg-gray-100 rounded-lg shadow-md">
              <div
                dangerouslySetInnerHTML={{
                  __html: quotes[currentQuoteIndex]?.h,
                }} 
                className="quote-item-text"
              />
            </div>
          </CSSTransition>
        </TransitionGroup>
      )}
    </div>
  );
};

export default QuoteList;
