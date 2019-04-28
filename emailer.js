const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ionescuvlad2005@gmail.com',
        pass: 'Geminior1!'
    }
});

const mailOptions = {
    from: 'viktorpopescu88@gmail.com',
    to: 'e_shedevil_t@yahoo.com, viktorpopescu@yahoo.com',
    subject: 'This email was written in code ! muhahaha',
    text: 'you are now my friend.'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
