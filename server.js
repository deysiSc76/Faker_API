const express = require('express');
const app = express();
const {faker} = require('@faker-js/faker');


class User {
    constructor() {
        this._id = faker.string.uuid();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.email = faker.internet.email();
        this.password= faker.internet.password();
        this.telefono = faker.phone.number();
    }
  }
  
  class Company {
      constructor() {
        this._id = faker.string.uuid();
        this.name = faker.company.name();
        this.location = {
            street : faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            postal: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
  } 

// http://localhost:8080/
app.get('/api/user/new', (req, res) => {
    console.log('New user created');
    res.json(new User());
    });
    app.get('/api/company/new', (req, res) => {
        res.json(new Company());
        }
    );
    app.get('/api/user/company', (req, res) => {
        res.json({user: new User(), company: new Company()});
        }
    );
app.listen(3000, () => {
    console.log('Server is running on port 8080');
});