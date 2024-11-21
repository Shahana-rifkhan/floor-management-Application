import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import App from './App';
import { FloorProvider } from './context/FloorContext';

ReactDOM.render(
    <FloorProvider>
        <App />
    </FloorProvider>,
    document.getElementById('root')
);
