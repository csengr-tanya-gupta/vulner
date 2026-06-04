const defaultsDeep = require('lodash/defaultsDeep');
const minimist = require('minimist');
const axios = require('axios');

// Parse command line arguments using minimist (vulnerable to prototype pollution in v1.2.0)
const args = minimist(process.argv.slice(2));
console.log('Parsed arguments:', args);

// Vulnerable defaultsDeep example (vulnerable to prototype pollution in lodash v4.17.15)
const userPayload = JSON.parse('{"__proto__": {"polluted": "Yes, polluted!"}}');
const config = {};
defaultsDeep(config, userPayload);

console.log('\n--- Prototype Pollution Check ---');
console.log('config.polluted:', config.polluted);
console.log('({}).polluted:', ({}).polluted); // If polluted, this will print "Yes, polluted!"
console.log('---------------------------------\n');

// Simple axios request (vulnerable to SSRF / header injection in axios v0.19.0)
axios.get('https://api.github.com/users/octocat')
  .then(response => {
    console.log(`GitHub User: ${response.data.name}`);
  })
  .catch(error => {
    console.error('Error fetching details:', error.message);
  });
