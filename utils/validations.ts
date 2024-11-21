export const validateTableName = (name: string): string | null => {
    if (!name) return "Table name is required.";
    if (name.length < 3) return "Table name must be at least 3 characters.";
    return null;
};

export const validateCovers = (min: number, max: number): string | null => {
    if (min <= 0 || max <= 0) return "Covers must be greater than 0.";
    if (min > max) return "Min covers cannot exceed max covers.";
    return null;
};
