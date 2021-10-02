import React from "react";
import Header from "./components/atoms/Header";
import "./styles/index.css";
import { AddQuoteForm } from "./components/atoms/AddQuoteForm";
import { BrowserRouter, Route } from "react-router-dom";
import QuoteContainer from "./components/atoms/QuoteContainer";
import RandomQuote from "./components/atoms/RandomQuote";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Route path="/addQuote" exact component={AddQuoteForm} />
        <Route path="/" exact component={QuoteContainer} />
        <Route path="/random" exact component={RandomQuote} />
      </BrowserRouter>
    );
  }
}

export default App;
