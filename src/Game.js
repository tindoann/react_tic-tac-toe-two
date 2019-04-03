class Game extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }], 
      xIsNext: true
    }; 
  }

  handleClick(i) {
    const history = this.state.history; 
    const current = history[history.length - 1]; 
    const squares = current.squares.slice(); 
    if (calculateWinner(squares) || squares[i]) {
        return; 
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'; 
    this.setState({
      history: history.concat([{
        squares: squares
      }]), 
      xIsNext: !this.state.xIsNext,
    }); 
  }

  render() {
    const history = this.state.history; 
    const current = history[history.length - 1]; 
    const winner = calculateWinner(current.square); 

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start'; 
    return ( 
      <li key={move}>
        <button onClick{() => this.jumpTo(move)}>{desc}</button>
      </li>
      ); 
    }); 

    let status; 
    if (winner) {
      status = 'Winner: ' + winner; 
    } else {
      status = 'Next player: ' + (this.state.IsNext ? 'X' : 'O'); 
    }
 
// If 2 keys match, the corresponding component is moved. Keys tell React
// about the identity of each component which allow React to maintain state between re-renders. 
// If a component's key changes, the component will be destroyed and re-created with a new state. 

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>(moves}</ol>
        </div>
      </div>
    ); 
  }
}

ReactDOM.render(
  <Game />, 
  document.getElementById('root')
); 

