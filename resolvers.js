export default {
    Query: {
        hi: () => 'Hi',
        user: () => {
            return {
                id: 1,
                name: "Amel Muminovic",
                age: 24,
                gpa: 8.6,
                grades: [10, 10, 5, 7, 8]
            }
        }
    },
};
