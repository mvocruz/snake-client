const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
    
  });
  
  conn.on('connect', () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: MVC");
  });

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });
  
  conn.setEncoding('utf8');

  return conn;
};

module.exports = {connect};

