// App.js

import React from 'react';
import './App.css';
import FloorPlan from './components/FloorPlan/FloorPlan';
import RoomManagement from './components/RoomManagement/RoomManagement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Floor Management Application</h1>
      </header>
      <main>
        <RoomManagement />
        <FloorPlan />
      </main>
    </div>
  );
}

export default App;
