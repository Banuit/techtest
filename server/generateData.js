var faker = require('faker');

var database = { users: []};

for (var i = 1; i<= 300; i++) {
  let genders = [ 'female' , 'male' ];
  database.users.push({
    id: i,
    fname: faker.name.firstName(),
    lname: faker.name.lastName(),
    
    email: faker.internet.email(),
    mobile: faker.phone.phoneNumber(),
    gender : faker.random.arrayElement(genders),
    address: faker.address.country(),
    password: faker.internet.password()
  });
}

console.log(JSON.stringify(database));
