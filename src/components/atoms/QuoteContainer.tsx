import React, { useEffect, useState } from "react";
import { Quote } from "./Quote";
import { QuoteProps } from "../../models/IQuoteProps";
import { quotesRef } from "../../firebaseSetup";

const QuoteContainer = () => {

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

  return (
    <div id="quoteContainer">
      {quotes.map((quote : QuoteProps) => {
        return (
          <Quote
            content={quote.content}
            quoted={quote.quoted}
            author={quote.author}
            context={quote.context}
            timestamp={quote.timestamp}
          />
        );
      })}
    </div>
  );
};

export default QuoteContainer;
