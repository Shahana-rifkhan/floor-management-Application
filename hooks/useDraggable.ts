import { useState } from 'react';

export const useDraggable = (initialPosition: { x: number; y: number }) => {
    const [position, setPosition] = useState(initialPosition);

    const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
        const x = e.clientX - e.currentTarget.offsetWidth / 2;
        const y = e.clientY - e.currentTarget.offsetHeight / 2;
        setPosition({ x, y });
    };

    return { position, onDrag };
};
