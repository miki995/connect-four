import React, { Component } from "react";
// css
import './Board.css'
import Column from "../column/Column";
import { checkIsWinn } from "../../help[ers/winner/Winner.helper";

export default class Board extends Component {

    rowsNumber = 10;
    columnsNumber = 10;
    columnsArray = new Array(this.columnsNumber).fill(null);
    initialBoardState = new Array(this.rowsNumber).fill(this.columnsArray);

    initialState = {
        boardState: this.initialBoardState,
        player: 'Red',
        winner: '',
        gameTie: false
    };

    state = this.initialState;

    next(columnId) {

        if (this.state.winner !== '') {
            return;
        }

        const boardState = this.state.boardState.map(arr => arr.slice());

        if (boardState[columnId].indexOf(null) === -1) {
            return;
        }

        let newColumn = boardState[columnId].reverse();
        newColumn[newColumn.indexOf(null)] = this.state.player;
        newColumn.reverse();

        const player = (this.state.player === 'Red') ? 'Yellow' : 'Red';

        this.setState({
            player,
            boardState
        })
    }

    componentDidUpdate() {

        let winner = checkIsWinn(this.state.boardState);

        if (this.state.winner !== winner) {
            this.setState({winner})
        }

        if (this.state.winner === '' && this.checkIfGameTie() && !this.state.gameTie) {

            this.setState({
                gameTie: true
            })
        }
    }

    checkIfGameTie() {

        return this.state.boardState.every(column => !column.some(field => field === null))
    }

    resetGame() {
        this.setState(this.initialState);
    }

    render() {

        const winnerColor = (this.state.winner === 'Red') ? 'Red' : 'Yellow';
        const color = !this.state.winner ? winnerColor : null;

        const columns = [...Array(this.state.boardState.length)].map((x, index) =>
            <Column
                key={index}
                fields={this.state.boardState[index]}
                color={color}
                handleClick={() => this.next(index)}
            />
        );


        return (
            <div>
                {this.state.winner && <div className='Winner'>The winner is player: {this.state.winner}</div>}
                {this.state.gameTie && <div className='Winner'>The game is tie : <button onClick={() => this.resetGame()}>Reset</button></div>}
                <div className='Board'>{columns}</div>
            </div>
        )
    }
}
