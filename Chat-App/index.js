const http = require('http');
const express = require('express');
const path = require('path');
const {Server} = require('socket.io');
const sqlite = require('sqlite3')
const {open} = require('sqlite')


const app = express();
const server = http.createServer(app);

async function main(){
    const db = await open({
        filename : 'chat.db',
        driver : sqlite.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS messages (
             id INTEGER PRIMARY KEY AUTOINCREMENT,
              client_offset TEXT UNIQUE,
              content TEXT
        )
        `)
}

// socket.io
const io = new Server(server, {
    connectionStateRecovery: {}
  });

io.on('connection', async(socket) =>{
    socket.on('user-message', async(msg, clientOffset , callback) => {
        let result ;
        try{
           result = await db.run('INSERT INTO messages (content, client_offset) VALUES (?, ?)', msg, clientOffset);
        }catch(e){
            if (e.errno === 19 /* SQLITE_CONSTRAINT */ ) {
                // the message was already inserted, so we notify the client
                callback();
              } else {
                // nothing to do, just let the client retry
              }
            
              return;
            }
            io.emit('user-message', msg, result.lastID);
            callback();
        });
    
    if (!socket.recovered) {
        // if the connection state recovery was not successful
        try {
          await db.each('SELECT id, content FROM messages WHERE id > ?',
            [socket.handshake.auth.serverOffset || 0],
            (_err, row) => {
              socket.emit('chat message', row.content, row.id);
            }
          )
        } catch (e) {
          
        }
      }
});



app.use(express.static(path.resolve('./public')));

app.get('/', (req, res) => {
   return res.sendFile(path.resolve("./public/index.html "));
}); 

server.listen(9000, () => console.log("Server is running on port 9000")); 
