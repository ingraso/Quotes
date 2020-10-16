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
  return (
    <div className="quote">
      Apparently <b>{props.quoted}</b> said:
      <h3>{props.content}</h3>
      {props.context ? <p className="italic">Context: {props.context}</p> : ""}
      Documented {timestamp[0]} at {timestamp[1]} <br />
      by {props.author}
    </div>
  );
};
