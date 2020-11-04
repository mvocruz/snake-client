const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542,
    
  });
  
  conn.on('connect', () => {
    console.log("Succesfully connected to game server");
    conn.write("Name: MVC");
    setInterval(() => {
      conn.write("Move: up");
    },250)
    
    // conn.write("Move: up");
    // conn.write("Move: up");
    // conn.write("Move: up");
  });

  conn.on('data', () => {
    console.log("you ded cuz you idled");
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
};

module.exports = {connect};

