export default `
    type Query {
        hi: String,
        user: Person
    }
    type Person {
        id: Int!,
        name: String!,
        age: Int,
        gpa: Float,
        grades: [Int]
    }
`;
