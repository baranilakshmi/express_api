const fs = require("fs");
const PATH = "./data.json"

class Posts {
   
    get() {
        return this.readData();
    }

   readData() {
       try {
           return JSON.parse(fs.readFileSync(PATH, 'utf8'));
       }catch (e) {
           console.log(e);
           return `error in json data ${e}`;
       }
   }
   

add(newpost) {
    const data = this.readData();
    data.results.unshift(newpost);
    this.storedata(data);
}

storedata(data) {
    try {
        fs.writeFileSync(PATH, JSON.stringify(data));
    }
    catch (e) {
        console.log(e);
    }
}
}

module.exports = Posts;