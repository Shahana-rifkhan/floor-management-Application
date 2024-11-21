import { useMemo } from 'react';
import { Room } from '../context/FloorContext';

export const useTableStatistics = (room: Room | null) => {
    const statistics = useMemo(() => {
        if (!room) return { totalTables: 0, totalMinCovers: 0, totalMaxCovers: 0 };

        const totalTables = room.tables.length;
        const totalMinCovers = room.tables.reduce((acc, t) => acc + t.minCovers, 0);
        const totalMaxCovers = room.tables.reduce((acc, t) => acc + t.maxCovers, 0);

        return { totalTables, totalMinCovers, totalMaxCovers };
    }, [room]);

    return statistics;
};
