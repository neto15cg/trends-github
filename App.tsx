import React from 'react';
import Main from './src/Main'

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;

  console.log(usingHermes)
  return (
    <Main/>
  );
};

export default App;
