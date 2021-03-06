const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send( {
        to: email,
        from : 'sivachdhry@gmail.com',
        subject: 'Thanks for joining us!',
        text : `Welcome to the app, ${name}, Let me know how you get along with the app.`

    })
}

const sendCancelationEmail = (email, name) => {
     sgMail.send ({
         to:email,
         from : 'sivachdhry@gmail.com',
         subject : 'Sorry to see you go!',
         text : `Goodbye, ${name}. I hope to see you soon.`
     }) 
}

module.exports = {
      sendWelcomeEmail,
      sendCancelationEmail
}