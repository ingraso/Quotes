import React from "react";
import { QuoteProps } from "../../models/IQuoteProps";
import "../../styles/quotes.css";


export const Quote = (props: QuoteProps) => {
  const {quoted, content, context, author} = props;
  const timestamp = props.timestamp.split("T");
  return (
    <div className="quote">
      Apparently <b>{quoted}</b> said:
      <h3>{content}</h3>
      {context ? <p className="italic">Context: {context}</p> : ""}
      Documented {timestamp[0]} at {timestamp[1]} <br />
      by {author}
    </div>
  );
};
