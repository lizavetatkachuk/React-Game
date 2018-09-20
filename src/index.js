import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
class Square extends React.Component
{
    render(props)
    {
        <button>
           <div> {this.props.value} </div>
        </button>
    }
}
class Board extends React.Component
{
renderSquare(i)
{
    return <Square value={i}/>
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
    return
    (
        <div>
            <Board/>
        </div>
    )
    }

}
ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
