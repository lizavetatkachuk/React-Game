import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
class Square extends React.Component
{
    render(props)
    {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }

}
class Board extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            squares: Array(9).fill(null)
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }
renderSquare(i)
{
    return <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)}/>
}
render()
{
    const status = "Next player : X";
    return (
    <div>
        <div >{status}</div>
        <div >
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div >
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div >
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
    </div>
    )
}
}
class Game extends React.Component
{
render(){
    return(
    <div className="game">
        <Board/>

        <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
        </div>
    </div>
    )
}
}
ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
