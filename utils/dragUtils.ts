export const calculateNewPosition = (
    currentX: number,
    currentY: number,
    offsetX: number,
    offsetY: number
): { x: number; y: number } => {
    return {
        x: currentX + offsetX,
        y: currentY + offsetY,
    };
};

export const isPositionValid = (
    position: { x: number; y: number },
    boundary: { width: number; height: number }
): boolean => {
    return (
        position.x >= 0 &&
        position.y >= 0 &&
        position.x <= boundary.width &&
        position.y <= boundary.height
    );
};
