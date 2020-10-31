import React from "react";
import { Quote } from "./Quote";
import * as quoteData from "../../utils/testdata.json";

const QuoteContainer = () => {
  const qoutes = [
    quoteData.quote1,
    quoteData.quote2,
    quoteData.quote3,
    quoteData.quote4,
    quoteData.quote5,
  ];

  return (
    <div id="quoteContainer">
      {qoutes.map((quote) => {
        return (
          <Quote
            key={quote.id}
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
