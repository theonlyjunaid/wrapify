// const accountSid = 'AC926f2a1113e8e1246108785a2e761765';
// const authToken = '9b479d64aaa4bab1d1592c20083a2043';
// const twilio = require('twilio');
// const client = new twilio(accountSid, authToken);

// export default async (req, res) => {
// client.messages
//     .create({
//         body: "me junaid  mzart ke liye try kr rha tha",
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:+919069084506'
//     })
//     .then(message => console.log(message.sid))
//     .done();


//     client.messages
//         .create({
//             body: 'hello',
//             messagingServiceSid: 'MGd9371b5732b368f033840ff447de5944',
//             to: '+919069084506'
//         })
//         .then(message => console.log(message.sid))
//         .done();
//     res.status(200).json({ message: 'success' });
// }
