// ********************** PLAN: *****************************

//---PSEUDOCODE:---

// const questions = [
//     {q1: "question one"},
//     {q2: "question two"},
//     {q3: "question three"}
//     ]

//     const answers = [
//     {q1: [{animals: x}, {environment: y}, {localGroups: z}, {events: a}]},
//     {q2: [{animals: x}, {environment: y}, {localGroups: z}, {events: a}]},
//     {q3: [{animals: x}, {environment: y}, {localGroups: z}, {events: a}]}
//     ]

//     //useReducer with a state to store the keys from each answer chosen at each question:
//     results = ["animals", "animals", "environment"]

//     //Function to count up each choice w/in the results array and spit out which has the most

//     //Conditionally render the appropriate category page!

//---THE GUTS:---

//TODO: Create dummy data

//TODO: Use useReducer hook; create state to store choice categories (empty array) - the keys from the answer objects
//TODO: Reducer function for onClick event when answer choice is clicked: should access the key of the answer object and set that to the end of the results array (with the rest of the array spread out)
//TODO: Hand reducer down through to answer choice

//TODO: Create function to count choices after all questions are answered and return category with the highest total

//---MAPCEPTION:---

//TODO: Render list of each question (map over question array and render value of each object)
//TODO: Within map function of question, access the dummyAnswers array, picks the object with the right question number key, and then maps over the answer choices array, rendering each value
//TODO: Once the map functions above are working, add a questionNumber state and conditional render to show one question at a time

// **********************************************************

import React, { useState, useReducer } from 'react';

import QuestionDisplay from '../QuestionDisplay/index';

import { questions, answers } from '../../libs/questionData';

//CATEGORIES FOR EACH ANSWER:
//0 = animals
//1 = environment
//2 = localGroups
//3 = events

const initialState = { quizResults: [] };

function reducer(state, action) {
  const { type } = action;
  console.log(action);
  switch (type) {
    case 'add-animal-choice':
      return { quizResults: [...state.quizResults, 'animals'] };
    case 'add-environment-choice':
      return { quizResults: [...state.quizResults, 'environment'] };
    case 'add-localGroups-choice':
      return { quizResults: [...state.quizResults, 'localGroups'] };
    case 'add-events-choice':
      return { quizResults: [...state.quizResults, 'events'] };
    default:
      return { quizResults: [state.quizResults] };
  }
}

function Quiz() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClick(category) {
    if (category === 0) {
      dispatch({ type: 'add-animal-choice' });
    }
    if (category === 1) {
      dispatch({ type: 'add-environment-choice' });
    }
    if (category === 2) {
      dispatch({ type: 'add-localGroups-choice' });
    }
    if (category === 3) {
      dispatch({ type: 'add-events-choice' });
    }
    console.log(state.quizResults);
  }

  return (
    <div>
      {questions.map((question, i) => (
        <QuestionDisplay
          question={question}
          answers={answers}
          i={i}
          key={i}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Quiz;
