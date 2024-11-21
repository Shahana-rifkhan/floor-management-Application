import React from 'react';
import { useDrag } from 'react-dnd';

type Table = {
    id: string;
    name: string;
    position: { x: number; y: number };
};

const DraggableTable = ({ table }: { table: Table }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'table',
        item: { id: table.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            style={{
                position: 'absolute',
                left: table.position.x,
                top: table.position.y,
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                padding: '8px',
                border: '1px solid #000',
                backgroundColor: '#fff',
            }}
        >
            {table.name}
        </div>
    );
};

export default DraggableTable;
