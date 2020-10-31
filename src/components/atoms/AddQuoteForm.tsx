import React from "react";

const submitForm = () => {
  console.log("You really hoped this was submitted? :lolz:");
};

export const AddQuoteForm = () => {
  return (
    <div className="add-quotes">
      <h2>Document a new (and spicy?) quote below!</h2>
      <form onSubmit={submitForm}>
        <label>Quoted*</label>
        <input name="quoted" type="text" placeholder="Karoline Sæbø" required />

        <label>Content*</label>
        <input
          name="content"
          type="text"
          placeholder="Men apropos oss, som ikke er dumme i hodet, MMI?"
          required
        />

        <label>Context</label>
        <input
          name="context"
          type="text"
          placeholder="Prøver å få gruppa til å jobbe med MMI"
        />

        <input type="submit" value="Add quote" />
      </form>
    </div>
  );
};
