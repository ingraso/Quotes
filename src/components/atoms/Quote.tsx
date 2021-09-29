import React from "react";
import "../../styles/quotes.css";

interface QuoteProps {
  content: String;
  quoted: String;
  author: String;
  context?: String;
  timestamp: String;
}

export const Quote = (props: QuoteProps) => {
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
      {getQuoteBeginning()} <b>{props.quoted}</b> said:
      <h3>{props.content}</h3>
      {props.context ? <p className="italic">Context: {props.context}</p> : ""}
      Documented {timestamp[0]} at {timestamp[1]} <br />
      by {props.author}
    </div>
  );
};
