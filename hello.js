const b = require('bcrypt');

console.log(b.hashSync('password', b.genSaltSync()));
