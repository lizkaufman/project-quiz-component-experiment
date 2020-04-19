import React, { useState } from 'react';
import './App.css';

import Quiz from '../Quiz/index';

function App() {
  //state that holds the highest-counted category at end of quiz:
  const [highestCat, setHighestCat] = useState('');
  //state to check if quiz is done:
  const [quizOver, setQuizOver] = useState(false);

  return (
    <div className="App">
      {!quizOver && (
        <Quiz setHighestCat={setHighestCat} setQuizOver={setQuizOver} />
      )}

      {highestCat === 'animals' && (
        <h1>Replace me with the component for the animals category page!</h1>
      )}

      {highestCat === 'environment' && (
        <h1>
          Replace me with the component for the environment category page!
        </h1>
      )}

      {highestCat === 'localGroups' && (
        <h1>
          Replace me with the component for the localGroups category page!
        </h1>
      )}

      {highestCat === 'events' && (
        <h1>Replace me with the component for the events category page!</h1>
      )}
    </div>
  );
}

export default App;
