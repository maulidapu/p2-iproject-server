if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

exports.sendEmail = async (email) => {
    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Welcome to redFlag!',
        text: 'Get in touch with us!'
    };
    await transporter.sendMail(mailOptions);

}
