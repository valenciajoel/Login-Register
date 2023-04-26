const User = require('../../src/models/User')
const UserRepository = require('../../src/repositories/UserRepository')
const repo = new UserRepository

var user = repo.findById(1)
var userId = user.getId()

console.assert(
    userId == 1,
    'Se esperaba id 1 y devolvio ' + userId
)

console.assert(
    user instanceof User,
    'Se esperaba User y devolvio ' + typeof user
)

console.assert(
    !(user instanceof Date),
    'Se esperaba User y devolvio Date'
)

/** segundo test */
try {
    var user = repo.findById("ABC")
} catch (e) {
    console.assert(e.message == 'Se esperaba id numerico')
}

try {
    var user = repo.findById(6)
} catch (e) {
    console.assert(e.message == 'El usuario no se encontro')
}

