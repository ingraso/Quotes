import React from "react";
import { Quote } from "./components/atoms/Quote";
import { AddQuoteForm } from "./components/atoms/AddQuoteForm";
import * as quoteData from "./utils/testdata.json";

function App() {
  const qoutes = [
    quoteData.quote1,
    quoteData.quote2,
    quoteData.quote3,
    quoteData.quote4,
    quoteData.quote5,
  ];
  return (
    <>
      <AddQuoteForm />
      <div id="quote-container">
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
    </>
  );
}

export default App;
