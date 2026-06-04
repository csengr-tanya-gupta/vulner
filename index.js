const defaultsDeep = require('lodash/defaultsDeep');
const minimist = require('minimist');
const axios = require('axios');

// Parse command line arguments using minimist (secure in >= 1.2.6)
const args = minimist(process.argv.slice(2));
console.log('Parsed arguments:', args);

// Secure defaultsDeep example (secure in >= 4.17.21)
// The library prevents prototype pollution by default
const userPayload = JSON.parse('{"__proto__": {"polluted": "Yes, polluted!"}}');
const config = {};
defaultsDeep(config, userPayload);

console.log('\n--- Prototype Pollution Check ---');
console.log('config.polluted:', config.polluted);
console.log('({}).polluted:', ({}).polluted); // This prints undefined as the attack is mitigated by lodash
console.log('---------------------------------\n');

// Secure axios request (secure in >= 0.21.1 / >= 1.6.0)
axios.get('https://api.github.com/users/octocat')
  .then(response => {
    console.log(`GitHub User: ${response.data.name}`);
  })
  .catch(error => {
    console.error('Error fetching details:', error.message);
  });
