export const generateUniqueId = (): string => {
    return `id-${Math.random().toString(36).substr(2, 9)}`;
};

export const deepClone = (obj: any): any => {
    return JSON.parse(JSON.stringify(obj));
};
