const {userValidator} = require('./validators/userValidator')
const UserFactory = require('./factories/UserFactory')
const UserRepository = require('./repositories/UserRepository')
const bcrypt = require('bcrypt')

class Application {
    constructor() {
        this.name = 'Zoom'
        this.version = '1.0.0'
        this.user = null
    }

    registrar(email, password) {
        userValidator(email, password)
        
        // encriptarlo sha-512
        password = bcrypt.hashSync(password, 10)
        
        // construyo el objeto user = Factory
        const user = UserFactory.make({email, password})
        
        // guardarlo en la base de datos = Repository
        const repo = new UserRepository
        repo.create(user)

        // devolver la instancia del usuario guardado
        return user
    }

    login(email, password) {
        // validaciones
        userValidator(email,password);
        const user = new UserRepository;
        const onlineUser = user.findUser(email,password);
        this.user = onlineUser;
        
        return "Usuario Logeado: " + this.user.getEmail() + " "+ this.user.getId();

    }

    signOut() {
        this.user = null
    }
}

module.exports = Application