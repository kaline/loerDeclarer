const config = require('./config');
const accountSid = 'AC592087f8018fdcd6335da04b647b8d2c';
const authToken = 'ffc3eb992ef5df68bfac64b9440ff8eb';
const client = require('twilio')(accountSid, authToken);
console.log(authToken)

const cron = require('node-cron');
const message = require('./message')
let currentMessage = 0;

function sendMessage(){

  client.messages
  .create({
      body: message[currentMessage],
      from: '+13342185272',
      to: '+5551994440375'
  })
  .then(message => {
    currentMessage++;
    console.log(message)

  })

}
   




cron.schedule('0 * * * *', () =>{
    sendMessage();
});

