import React from 'react';
import Counter from "./components/Counter";

function App() {
  return (
    <React.Fragment>
      <h2>How to connect component to redux</h2>

      <p>
        Install redux: yar add redux
        Install react-redux: yarn add react-redux<br/>
        Create your actions, reducers and components folders<br/>
        Import the following into index.js<br/>
          import [ createStore } from 'redux';<br/>
          import [ Provider } from 'react-redux'; //connects react to redux<br/>



      </p>
      <Counter />
    </React.Fragment>
  );
}

export default App;
