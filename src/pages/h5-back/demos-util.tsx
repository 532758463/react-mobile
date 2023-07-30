import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export const DemoBlock = ({ title, children }) => (
  <div style={{ padding: 16 }}>
    <h3>{title}</h3>
    {children}
  </div>
);

export const DemoDescription = ({ children }) => (
  <div style={{ opacity: 0.5 }}>{children}</div>
);

export const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
