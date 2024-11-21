import React from 'react';
import FloorPlan from './components/FloorPlan/FloorPlan';
import RoomManagement from './components/RoomManagement/RoomManagement';
import RoomList from './components/RoomManagement/RoomList';
import Header from './components/Common/Header';

const App = () => {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex', padding: '20px' }}>
                <div style={{ marginRight: '20px' }}>
                    <RoomManagement />
                    <RoomList />
                </div>
                <FloorPlan />
            </div>
        </div>
    );
};

export default App;
