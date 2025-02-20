export const saveToStorage = (data) => {
    localStorage.setItem("votes", JSON.stringify(data));
};

export const loadFromStorage = () => {
    const savedData = localStorage.getItem("votes");
    return savedData
        ? JSON.parse(savedData)
        : [{ id: 1, name: "Candidate A", votes: 0 },
            { id: 2, name: "Candidate B", votes: 0 },
            { id: 3, name: "Candidate C", votes: 0 },];
};
