import React from "react";
import { QuoteProps } from "../../models/IQuoteProps";
import "../../styles/quotes.css";


export const Quote = (props: QuoteProps) => {
  const {quoted, content, context, author} = props;
  const timestamp = props.timestamp.split("T");

  const beginningList = [
    "Apparently",
    "Did you know that",
    "I heard that",
    "Someone mentioned that",
    "OMG!",
  ];

  const getQuoteBeginning = () => {
    return beginningList[Math.floor(Math.random() * beginningList.length)];
  };

  return (
    <div className="quote">
      {getQuoteBeginning()} <b>{quoted}</b> said:
      <h3>{content}</h3>
      {context ? <p className="italic">Context: {context}</p> : ""}
      Documented {timestamp[0]} at {timestamp[1]} <br />
      by {author}
    </div>
  );
};
