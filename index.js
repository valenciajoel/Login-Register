// Importación de la clase App
const App = require('./src/App')

// Instancia de la clase App
const app = new App

try {
    /*
    const result = app.registrar(
        'cosme@fulanito.fox',   // email
        'secretoo'             // password
    )

    console.log(result)
    */

    const result = app.login("cosme@fulanito.fox",'secretoo')
    console.log(result);
} catch (e) {
    console.log(e.message)
}
