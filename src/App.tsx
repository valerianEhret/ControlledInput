import React from 'react';
import './App.css';
import {Message} from "./Message";
import {PropsType} from "./state";

function App(props:PropsType) {

  return (
    <div className="App">
      <Message newStatus={props.state.newStatus}
               changeStatus = {props.changeStatus}
               nameNew={props.state.nameNew}
      />
    </div>
  );
}

export default App;
