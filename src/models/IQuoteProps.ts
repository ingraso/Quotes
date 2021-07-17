import React from "react";

export interface QuoteProps {
  content: String;
  quoted: String;
  author: String;
  context?: String;
  timestamp: String;
}