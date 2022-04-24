// Atividade 1 - https://github.com/stebsnusch/basecamp-javascript/tree/main/colecoes

function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value == 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Wesley', 'Admin');
users.set('Stephany', 'Admin');
users.set('Jorge', 'User');
users.set('Natália', 'Admin');

console.log(getAdmins(users));

// Atividade 2

const numbers = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValues(array) {
    const mySet = new Set(array);
    return [...mySet]; // Spread 
}

console.log(uniqueValues(numbers));