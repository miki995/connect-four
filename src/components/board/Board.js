import React, { Component } from "react";
// css
import './Board.css'


export default class Board extends Component {

    rowsNumber = 7;
    columnsNumber = 6;
    columnsArray = new Array(this.columnsNumber).fill(null);
    initialBoardState = new Array(this.rowsNumber).fill(this.columnsArray);

    state = {
        boardState: this.initialBoardState,
        player: 'Red',
        winner: ''
    };

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
                <div className='Board'>{columns}</div>
            </div>
        )
    }
}
