const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 8081 });
 

function zames(data) {
    console.log("Пришло сообщение о замесе:", data);
}
  


wss.on('connection', function(socket) {

  socket.on('message', function(msg) {
      try {
        msg = toObject(msg);
      }
      catch(e) {
          return;
      }

      switch(msg.type) {
            case "замес":
                zames(msg.data);
                break;

            case "взялПредмет":
                break;
      }
  });
 
});

//---------------------------

function toString(type, data) {
    return JSON.stringify({type, data});
}

function toObject(str) {
    return JSON.parse(str);
}