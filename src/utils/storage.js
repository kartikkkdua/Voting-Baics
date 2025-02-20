export const saveToStorage = (data) => {
    localStorage.setItem("votes", JSON.stringify(data));
};

export const loadFromStorage = () => {
    const savedData = localStorage.getItem("votes");
    return savedData
        ? JSON.parse(savedData)
        : [];
};
