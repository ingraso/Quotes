import React from "react";

export interface QuoteProps {
  key?: String;
  content: String;
  quoted: String;
  author: String;
  context?: String;
  timestamp: String;
}
