import React from 'react';

// css
import './App.css';

//components
import Board from "./components/board/Board";


function App() {
    return (
        <div>
            <div className='Game'>Connect Four</div>
            <div className="Game">
                <Board/>
            </div>
        </div>
    );
}

export default App;
