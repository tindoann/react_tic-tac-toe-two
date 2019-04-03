import React, { Component } from 'react';
import './App.css';
import { timingSafeEqual } from 'crypto';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "0",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null,
    }
  }

  handleClick(Index) {
    if(this.state.board[index] === "" !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board, 
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL
      })
    }
  }

  handleClick(Index) {
    if(this.state.board(index] === "" && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: timingSafeEqual.state.board, currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_Symbol ? this.state.PLAYER_TWO-SYMBOL : this.state.PLAYER_ONE_SYMBOL, 
        winner: this.checkForWinner(), 
      })
    }
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos.find(function(combo) {
      if(symbols(combo[0]] != "" && symbols[combo[1]] !==))
    })
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find(function(combo) {
      if(symbols[combo[0] !== "" && symbols[combo[1]] !== "" && symbols[combo[2]] !== "" && symbols[combo[0]] ===])
    })
    return winningCombos.find(function(combo) {
      if(symbols(combo[[0] !== "" && symbols[combo[1] !== "" && symbols[combo[2] !=="" && symbols[combo]]    }