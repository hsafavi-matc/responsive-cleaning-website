const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {
    let data = JSON.parse(event.body);
    
    var params = {
        Destination: {
            ToAddresses: ['angelsfinecleaning@gmail.com']
        },
        Message: {
            Body: {
                Text: { Data: 'Name: ' + data.name + '\nEmail: ' + data.email + '\nMessage: ' + data.message }
            },
            Subject: { Data: 'Contact Form Submission' }
        },
        Source: 'your_verified_email@yourdomain.com'
    };

    try {
        await ses.sendEmail(params).promise();
        return { statusCode: 200, body: 'Email sent successfully' };
    } catch (e) {
        return { statusCode: 500, body: 'Failed to send email' };
    }
};
