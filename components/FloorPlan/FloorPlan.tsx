import React from 'react';
import DraggableTable from './DraggableTable';
import Statistics from './Statistics';
import { useFloor } from '../../context/FloorContext';

const FloorPlan = () => {
    const { currentRoom } = useFloor();

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', border: '1px solid #ccc' }}>
            {currentRoom?.tables.map((table) => (
                <DraggableTable key={table.id} table={table} />
            ))}
            <Statistics />
        </div>
    );
};

export default FloorPlan;
