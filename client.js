const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
    
  });

  conn.on('connect', () => {
    conn.write("Name: MVC");
  });
  
  conn.on('connect', () => {
    console.log("Succesfully connected to game server");
  });

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

const connectObj = {connect};

module.exports = connectObj;