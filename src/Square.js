import { METHODS } from "http";

/* class Square extends React.Component {
  //add a constructor to the class to initialize the state
  constuctor(props) {
    super(props); 
    this.state = {
      value: null,
    }; 
  }
*/ 

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  ); 
}
  

/* By calling this.setState from an onClick handler in the Square's render method, we 
tell React to re-render that Square whenever its <button> is clicked. After the update, 
the Square's this.state.value will be 'X', so we'll see the X on the game board. </button>
*/

/* functional component are a simpler way to write components that only contain a render method and don't have their own state. 

Instead of defining a class which extends React.Component, we can write a function that takes props as input and 
return what should be rendered. 
