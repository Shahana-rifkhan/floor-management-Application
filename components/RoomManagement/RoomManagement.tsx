import React from 'react';
import { useFloor } from '../../context/FloorContext';

const RoomManagement = () => {
    const { rooms, setRooms, setCurrentRoom } = useFloor();

    const addRoom = () => {
        const newRoom = {
            id: `room-${rooms.length + 1}`,
            name: `Room ${rooms.length + 1}`,
            tables: [],
        };
        setRooms([...rooms, newRoom]);
        setCurrentRoom(newRoom);
    };

    return <button onClick={addRoom}>Add Room</button>;
};

export default RoomManagement;
