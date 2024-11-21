import React from 'react';
import { useFloor } from '../../context/FloorContext';

const Statistics = () => {
    const { currentRoom } = useFloor();

    const totalTables = currentRoom?.tables.length ?? 0;
    const totalMinCovers = currentRoom?.tables.reduce((acc, t) => acc + t.minCovers, 0) ?? 0;
    const totalMaxCovers = currentRoom?.tables.reduce((acc, t) => acc + t.maxCovers, 0) ?? 0;

    return (
        <div style={{ position: 'absolute', bottom: 10, right: 10, backgroundColor: '#fff', padding: '10px' }}>
            <p>Total Tables: {totalTables}</p>
            <p>Min Covers: {totalMinCovers}</p>
            <p>Max Covers: {totalMaxCovers}</p>
        </div>
    );
};

export default Statistics;
