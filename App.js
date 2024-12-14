import React from 'react';
import ReactDOM from 'react-dom';
import StockList from './components/StockList';
import SentimentAnalysis from './components/SentimentAnalysis';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Stock Analysis Tool</h1>
                <StockList />
                <SentimentAnalysis />
            </header>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));