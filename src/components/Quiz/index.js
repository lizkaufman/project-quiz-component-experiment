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

//TODO: Create function to count choices after all questions are answered and return category with the highest total

//---MAPCEPTION:---

//TODO: Render list of each question (map over question array and render value of each object)
//TODO: Within map function of question, access the dummyAnswers array, picks the object with the right question number key, and then maps over the answer choices array, rendering each value
//TODO: Once the map functions above are working, add a questionNumber state and conditional render to show one question at a time

// **********************************************************

import React, { useState } from 'react';

import QuestionDisplay from '../QuestionDisplay/index';

const questions = [
  `1. What's your idea of a great way to spend a Saturday?`,
  `2. It's film night! What are you watching?`,
  `3. Let's have a dance. What's the soundtrack?`,
  '4. If you could teleport anywhere right now, where would you go?',
  '5. What annoys you the most?',
];

//CATEGORIES FOR EACH ANSWER ARRAY:
//index 0 = animals
//index 1 = environment
//index 2 = localGroups
//index 3 = events

const answers = [
  [
    'Spending some quality time with my pet',
    'A scenic stroll at a national park, with the occasional stop to pick up litter',
    'A picnic lunch in the park and then an afternoon tending a community garden',
    'A cool new music festival with my friends',
  ],

  ['Marley and Me', 'Planet Earth', 'The Full Monty', 'This Is Spinal Tap'],

  ['Who Let the Dogs Out?', 'Under the Sea', 'YMCA', 'Cabaret'],

  [
    'In the Sierra Madre mountains, taking in the spectacle of the monarch butterfly migration',
    'A breathtaking kayak down the Norwegian fjords',
    'Dressed to the nines a glamorous charity ball',
    'Down the front at the Glastonbury Pyramid stage',
  ],

  [
    'People forgetting that a pet is for life, not just for Christmas',
    'Seeing someone drop chewing gum on the ground when the bin is. Right. There!',
    'Seeing empty storefronts where there used to be cool local spots',
    'Tall people blocking my view at an absolute dream gig',
  ],
];

function Quiz() {
  const [results, setResults] = useState([]);

  function addAnswer() {
    let newAnswer = '';
    setResults([...results, newAnswer]);
  }

  return (
    <div>
      {questions.map((question, i) => (
        <QuestionDisplay question={question} answers={answers} i={i} key={i} />
      ))}
    </div>
  );
}

export default Quiz;
