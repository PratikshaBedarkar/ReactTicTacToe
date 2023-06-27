import Square from "./Square";
import styles from "./Board.module.css";
import { useState } from "react";
const Board = () => {
  function findWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function squareClickHandler(i) {
    if (findWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setSquares(newSquares);
    setXIsNext((prevState) => !prevState);
  }

  const winner = findWinner(squares);
  let state;
  if (winner) {
    state = "Winner is: " + winner;
  } else {
    state = "Next turn: " + (xIsNext ? "X" : "O");
  }
  return (
    <div className={styles.container}>
      <h2>Tic Tac Toe</h2>
      <div className={styles.row}>
        <Square
          value={squares[0]}
          onSquareClick={() => squareClickHandler(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => squareClickHandler(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => squareClickHandler(2)}
        />
      </div>
      <div className={styles.row}>
        <Square
          value={squares[3]}
          onSquareClick={() => squareClickHandler(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => squareClickHandler(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => squareClickHandler(5)}
        />
      </div>
      <div className={styles.row}>
        <Square
          value={squares[6]}
          onSquareClick={() => squareClickHandler(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => squareClickHandler(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => squareClickHandler(8)}
        />
      </div>
      <div className={`${styles.state} ${winner? styles.winner:''}`}>{state}</div>
    </div>
  );
};

export default Board;
