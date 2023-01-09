

// database
const db = require("./models");
const Role = db.role;
const User = db.user;
// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Database with { force: true }');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "device"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}