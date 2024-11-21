import React, { createContext, useContext, useState, ReactNode } from 'react';

type Table = {
    id: string;
    name: string;
    position: { x: number; y: number };
    minCovers: number;
    maxCovers: number;
};

type Room = {
    id: string;
    name: string;
    tables: Table[];
};

type FloorContextType = {
    rooms: Room[];
    currentRoom: Room | null;
    setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
    setCurrentRoom: React.Dispatch<React.SetStateAction<Room | null>>;
};

const FloorContext = createContext<FloorContextType | undefined>(undefined);

export const FloorProvider = ({ children }: { children: ReactNode }) => {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [currentRoom, setCurrentRoom] = useState<Room | null>(null);

    return (
        <FloorContext.Provider value={{ rooms, currentRoom, setRooms, setCurrentRoom }}>
            {children}
        </FloorContext.Provider>
    );
};

export const useFloor = () => {
    const context = useContext(FloorContext);
    if (!context) {
        throw new Error('useFloor must be used within a FloorProvider');
    }
    return context;
};
