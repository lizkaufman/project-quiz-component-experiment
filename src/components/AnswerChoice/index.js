import React from 'react';

function AnswerChoice({ answerChoice, category }) {
  return <li>{answerChoice[category]}</li>;
}

export default AnswerChoice;
