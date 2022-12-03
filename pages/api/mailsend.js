const mailgun = require("mailgun-js");
const DOMAIN = 'www.mzart.in';
const mg = mailgun({
    apiKey: '4dc3c62ba33182c94c5a34d523f72430-f2340574-e5eb0edd', domain: DOMAIN });
const data = {
    from: 'Mz art <order@www.mzart.in>',
    to: 'junaidmalik_mc21a12_05@dtu.ac.in',
    subject: 'Hello',
    html: '<h1>Testing some Mailgun awesomness!</h1>'
};
mg.messages().send(data, function (error, body) {
    console.log(body);
});