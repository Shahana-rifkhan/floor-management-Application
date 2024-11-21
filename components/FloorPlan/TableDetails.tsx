import React from 'react';
import { useForm } from 'react-hook-form';
import { useFloor } from '../../context/FloorContext';

const TableDetails = ({ table }: { table: any }) => {
    const { register, handleSubmit } = useForm();
    const { currentRoom, setRooms } = useFloor();

    const onSubmit = (data: any) => {
        if (currentRoom) {
            const updatedTables = currentRoom.tables.map((t) =>
                t.id === table.id ? { ...t, ...data } : t
            );
            setRooms((prevRooms) =>
                prevRooms.map((room) =>
                    room.id === currentRoom.id ? { ...room, tables: updatedTables } : room
                )
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Table Name:</label>
            <input {...register('name')} defaultValue={table.name} />
            <label>Min Covers:</label>
            <input {...register('minCovers')} type="number" defaultValue={table.minCovers} />
            <label>Max Covers:</label>
            <input {...register('maxCovers')} type="number" defaultValue={table.maxCovers} />
            <button type="submit">Save</button>
        </form>
    );
};

export default TableDetails;
