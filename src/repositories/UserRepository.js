const User = require('../models/User')
const Factory = require('../factories/UserFactory');
const Repository = require('./Repository');
const bcrypt = require('bcrypt')

class UserRepository extends Repository{

    file = './users.json';

    byId(id) {
        if (isNaN(id)) {
            throw new Error('Se esperaba id numerico')
        }

        let user = this.findById(id);
        
        if (user === undefined) {
            throw new Error('El usuario no se encontro')
        }

        return Factory.make(user)
    }

    findUser(email,password){
        let content = this.read();
         let user =  content.find((obj => obj.email == email));
         if(user ===undefined){
            throw new Error('El usuario no se encontro');
         }else if(!bcrypt.compareSync(password, user.password)){
            throw new Error('La contraseña es invalida');
         }
         return Factory.make(user);
    }


    create(user) {
        if (user instanceof User) {
            
           this.save({
                email : user.getEmail(),
                password : user.getPassword(),
            });
            return;
        }

        throw new Error('Se requiere una instancia de User')
    }
}

module.exports = UserRepository