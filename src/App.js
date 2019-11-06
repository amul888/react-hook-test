import React, { Component} from "react";
import hookActions from "./actions/hookActions";
// import "./App.css";

function reducer(state, action){
  switch(action.type){
    case "setSecretWord":
      return {...state, secretWord:action.payload}
      default:
        throw new Error(`invaild action type: ${action.type}`)
  }
}
function App(){
  const [state,dispatch] = React.useReducer(
    reducer,
    {secretWord: null}
  )

  const setSecretWord = (secretWord)=> 
      dispatch({type:"setSecretWord", payload:secretWord})
    
      React.useEffect(
        () => {hookActions.getSecretWord(setSecretWord)},
        []
      )
      return(
      <div data-test="component-app">
        Amul
        </div>
        
    );
}

export default App;