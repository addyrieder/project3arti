import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App() {
    return (
        <div className="recording-indicator">
            <div className="circle-outer">
                <div className="circle-inner">
                    <p>I'm Listening...</p>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
