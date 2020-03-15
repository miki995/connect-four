import { Component } from "react";
// css
import './Board.css'


export default class Board extends Component {

    rowsNumber = 7;
    columnsNumber = 6;


    state = {
        player: 'Red',
        winner: ''
    };

    render() {


        return (
            <div>
                {this.state.winner && <div className='Winner'>The winner is player: {this.state.winner}</div>}
                <div className='Board'>
                    <div>
                        Column
                    <div>field</div>
                    </div>
                </div>
            </div>
        )
    }


}
