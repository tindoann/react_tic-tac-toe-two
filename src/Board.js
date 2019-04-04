class Board extends React.Component {
  // Each time a player moves, xIsNext(boolean) will be flipped to determine which player goes next and the game's state will be saved. 
    constructor(props) {
      super(props); 
      this.state = { 
        squares: Array(9).fill(null), 
        xIsNext: true, 
      }; 
    }

    handleClick(i) {
      const squares = this.state.squares.slice(); 
      // added to original 

      if (calculateWinner(squares) || squares[i]) {
        return; 
      }
      square[i] = this.state.xIsNext ? 'X' : 'O'; 
      this.setState({
        squares: squares, 
        xIsNext: !this.state.xIsNext,
      }); 
    }

    renderSquare(i) {
        return (
          <Square value={this.state.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
        ); 
      }

  // display which player's turn it is 
    
    render() {
      const winner = calculateWinner(this.state.squares); 
      let status; 
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : '0'); 
      }   

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

  /*
  // show which player's turn is next and show when ghe game is won and there are no more turns left. 
  // Given an array of 9 squares, this function will heck for winner and return X, O, or null. 
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]; 
    for (let i = 0; i < lines.length; i++)
      const [a, b, c] = lines[i]; 
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; 
      }
    }
    return null; 
  }

  // Keeping the state of all squares in the Board component will allow it to determine the winner in the future. 

  // Functional components are a simpler way to write component tha tonly contain a render method and don't have their state. 

  /* There are two approaches to changing data. The first approach is to mutate the data by directly 
  changing the data's values. The second appoach is to replace the data with new copy which the desired changes.  */

  /* immutable data can deasily determine if changes have been made which helps to determine when a component requires re-rendering. */

/* 

  const winner = calculateWinner(this.state.squares); 
    let status; 
    if (winner) {
      status = 'Winner: ' + winner; 
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); 
    }
*/

// helper function 

/* 


}