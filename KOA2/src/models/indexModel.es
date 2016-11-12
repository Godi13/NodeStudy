let db = require('mysql-promise')();

db.configure({
  "host": "localhost",
  "user": "root",
  "password": "",
  "database": "PHPtest"
});

const indexModel = {
  data(num) {
    let snum = num;
    return (async() => {
      var promise = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(++snum);
          //reject(error);
        }, 1000);
      });
      const result = new Promise((resolve, reject) => {
        db.query('UPDATE num SET num = ? where id=1', [promise]).then((result) => {
          const err = result[0]['changedRows'];
          console.log(err);
          if (err == 0) {
            reject({
              msg: "no"
            });
          } else {
            resolve({
              msg: "ok"
            });
          }
        });
      });
      return result;
    })();
  }
}
export default indexModel;
