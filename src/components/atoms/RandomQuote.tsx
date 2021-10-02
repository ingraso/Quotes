import React, { useEffect, useState } from "react";
import { Quote } from "./Quote";
import { QuoteProps } from "../../models/IQuoteProps";
import { quotesRef } from "../../firebaseSetup";

const RandomQuote = () => {

  const [quotes, setQuotes] = useState<QuoteProps[]>([]);

  useEffect(() => {
    quotesRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
            newState.push({
                key: item,
                author: items[item].author,
                content: items[item].content,
                context: items[item].context,
                quoted: items[item].quoted,
                timestamp: items[item].timestamp
            });
        }
      setQuotes(newState)
    });
  },[])

  const getQuote = () => {
    if (quotes.length > 0){
      const quote = quotes[Math.floor(Math.random() * quotes.length)]
      return (<Quote
        content={quote.content}
        quoted={quote.quoted}
        author={quote.author}
        context={quote.context}
        timestamp={quote.timestamp}
    />)}
  }

  return (
    <div id="quoteContainer">
          {getQuote()}
    </div>
  );
};

export default RandomQuote;
