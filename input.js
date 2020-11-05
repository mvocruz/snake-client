let connection;

const setupInput = function(conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = (conn) => {
    
    stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write('Move: up')
    }   
    if (key === 'a') {
      conn.write('Move: left')
    }
    if (key === 's') {
      conn.write('Move: down')
    }
    if (key === 'd') {
      conn.write('Move: right')
    }
    if (key === '\u0003') {
    process.exit();
  };
  });
}
  handleUserInput(conn);
  return stdin;
}
// setupInput();

module.exports = {setupInput};