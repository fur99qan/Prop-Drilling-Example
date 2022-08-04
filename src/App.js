import { useState } from 'react';
import './App.css';

function App() {

  return (
    <ParentComponent />
  );
}

export default App;


function ParentComponent() {
  const [myState, setMyState] = useState("This is the state that I need to pass to the Child Component")
  return (
    <ChildComponent myState={myState} />
  )
}

function ChildComponent({ myState }) {
  return (
    <GrandChildComponent myState={myState} />
  )
}

function GrandChildComponent({ myState }) {
  return (
    <h1>{myState}</h1>
  )
}
