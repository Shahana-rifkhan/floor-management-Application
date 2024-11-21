import React from 'react';
import { useFloor } from '../../context/FloorContext';

const RoomList = () => {
    const { rooms, setCurrentRoom } = useFloor();

    return (
        <div>
            <h3>Rooms</h3>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id} onClick={() => setCurrentRoom(room)}>
                        {room.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
