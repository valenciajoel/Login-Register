class User {
    #id
    #email
    #password

    setId(id) {
        this.#id = id
    }

    getId() {
        return this.#id
    }

    setEmail(email) {
        this.#email = email
    }

    getEmail() {
        return this.#email
    }

    setPassword(password) {
        this.#password = password
    }

    getPassword() {
        return this.#password
    }

    isSamePassword(pwd) {
        return pwd === this.#password
    }
}

module.exports = User
