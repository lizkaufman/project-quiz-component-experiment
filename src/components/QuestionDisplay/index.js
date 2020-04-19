import React from 'react';

//PLAN FOR QUESTION DISPLAY COMPONENT:
//TODO: needs to take in the question string from the .map function along with the index and the answers array ✅
//TODO: then use this index to access the right answer set array within the answers array for the question
//TODO: then render an AnswerChoice component, using each category key from each answer object to pass the value down
//TODO: needs to pass down a function to each answer choice to be clickable and collect the category (key)

import AnswerChoice from '../AnswerChoice/index';

function QuestionDisplay({ question, answers, i }) {
  return (
    <div>
      <h2>{question}</h2>
      <ul>
        <AnswerChoice answerChoice={answers[i]} category={0} />
        <AnswerChoice answerChoice={answers[i]} category={1} />
        <AnswerChoice answerChoice={answers[i]} category={2} />
        <AnswerChoice answerChoice={answers[i]} category={3} />
      </ul>
    </div>
  );
}

export default QuestionDisplay;
