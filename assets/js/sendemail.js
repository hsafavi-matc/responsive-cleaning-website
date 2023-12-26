const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.sendEmail = async (event) => {
    let data = JSON.parse(event.body);

    var params = {
        Destination: {
            ToAddresses: ['angelsfinecleaning@gmail.com'] // Use environment variable
        },
        Message: {
            Body: {
                Text: { Data: 'Name: ' + data.name + '\nEmail: ' + data.email + '\nMessage: ' + data.message }
            },
            Subject: { Data: 'Contact Form Submission' }
        },
        Source: 'angelsfinecleaning@gmail.com' // Use environment variable
    };

    try {
        await ses.sendEmail(params).promise();
        return {
            statusCode: 200, 
            body: JSON.stringify({ message: 'Email sent successfully' }),
            headers: {
                'Access-Control-Allow-Origin': '*', // If using CORS
                'Content-Type': 'application/json'
            }
        };
    } catch (e) {
        console.error(e);
        return {
            statusCode: 500, 
            body: JSON.stringify({ error: 'Failed to send email' }),
            headers: {
                'Access-Control-Allow-Origin': '*', // If using CORS
                'Content-Type': 'application/json'
            }
        };
    }
};
