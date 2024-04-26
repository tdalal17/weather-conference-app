const bcrypt = require('bcrypt');

const plainPassword = 'Tanay12345@';

bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }
  console.log('Hashed Password:', hashedPassword);
});