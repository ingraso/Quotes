import React, { useState } from "react";
import { quotesRef } from "../../firebaseSetup";
import { QuoteProps } from "../../models/IQuoteProps";

export const AddQuoteForm = () => {
  const [content, setContent] = useState("");
  const [quoted, setQuoted] = useState("");
  const [author, setAuthor] = useState("Anonymous");
  const [context, setContext] = useState("");

  const submitForm = (e: React.FormEvent<EventTarget>) => {
    const Quote: QuoteProps = {
      content: content,
      quoted: quoted,
      author: author,
      context: context || undefined,
      timestamp: Date().valueOf(),
    };
    quotesRef.push(Quote);
    console.log("You really hoped this was submitted? :lolz:");
  };
  return (
    <div className="add-quotes">
      <h2>Document a new (and spicy?) quote below!</h2>
      <form onSubmit={submitForm}>
        <label>Quoted*</label>
        <input
          name="quoted"
          type="text"
          placeholder="Karoline Sæbø"
          required
          onChange={(e) => setQuoted(e.target.value)}
        />

        <label>Content*</label>
        <input
          name="content"
          type="text"
          placeholder="Men apropos oss, som ikke er dumme i hodet, MMI?"
          required
          onChange={(e) => setContent(e.target.value)}
        />

        <label>Context</label>
        <input
          name="context"
          type="text"
          placeholder="Prøver å få gruppa til å jobbe med MMI"
          onChange={(e) => setContext(e.target.value)}
        />

        <input type="submit" className="button" value="Add quote" />
      </form>
    </div>
  );
};
