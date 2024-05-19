function createUserProfiles(originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    return originalNames.map((name, index) => {
        return {
            id: index + 1,
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage:
const originalNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "david", "EVE"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);
/*
[
  { id: 1, originalName: 'Alice', modifiedName: 'ALICE' },
  { id: 2, originalName: 'Bob', modifiedName: 'bob' },
  { id: 3, originalName: 'Charlie', modifiedName: 'CHARLIE' },
  { id: 4, originalName: 'David', modifiedName: 'david' },
  { id: 5, originalName: 'Eve', modifiedName: 'EVE' }
]
*/
