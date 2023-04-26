const fs = require("fs");
class Repository {
  file;



  read() {
    let content = fs.readFileSync(this.file);
    return JSON.parse(content);
  }

  findById(id) {
        let content = this.read;
         return content.find((obj => obj.id == id));
  }

  save(data) {
    let content = this.read();

    data.id = Date.now();

    content.push(data);

    let json = JSON.stringify(content);

    fs.writeFileSync(this.file, json);

    return true;
  }
}

module.exports = Repository;
