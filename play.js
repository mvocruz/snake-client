const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const connectObj = connect();

setupInput(connectObj);
