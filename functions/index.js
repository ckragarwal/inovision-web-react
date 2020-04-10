const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
exports.getInTouch = functions.https.onRequest(async (request,response) => {
    var data = request.body;
    console.log('data',data);
    console.log('request',request)
    console.log('request body',request.body)
    const gmailid = ''; //enter email id
    const gmailPassword = ''; //enter app password here
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailid,
            pass: gmailPassword
        }
    });
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers","Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    if(data.clientName && data.clientEmail && data.clientMessage) {
        var mailOptions = {
            from: gmailid,
            to: 'inovision.assistance@gmail.com',
            subject: `Contact Request from ${data.clientName}`,
            text: `Name :- ${data.clientName}\nEmail :- ${data.clientEmail} \nMessage :- ${data.clientMessage}`
        }
        await transporter.sendMail(mailOptions,(error, info) => {
            if(error) {
                console.log('error sending mail',error);
            }
            console.log('email send', info,info.response);
        });
        await admin.firestore().collection('ContactMessages').add(data).catch(e => {
            console.log('ERROR ADDING TO DATABASE ',e);
            response.send({
                code: 400,
                msg: 'Failed adding to database',
            });
        });
        response.send({
            code: 200,
            msg: 'Success'
        });
    }
    else{
        response.send({
            code: 501,
            msg: 'Details not found',
        })
    }
});
