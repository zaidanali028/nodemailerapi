require('dotenv').config()
const express=require('express')
const router=express.Router()
var smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer')

//These varable's value has to be configured by you in your .env file
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS
router.get('/',(req,res)=>{
  res.send('{Welcome to my contactemail}')
})

// POST route from contact form
router.post('/contact', (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport(smtpTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
      }
    }))
  
    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', 
      to: GMAIL_USER,
      subject: 'New email from Developers Avenue Official',
      text: `A new subscriber with name ${req.body.name} 
      And an email of ==>(${req.body.email}) Said: ${req.body.message}
       Damm! I love programming :)`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.send('error delivering your message') // Show a page indicating failure
      }
      else {
        res.send('successfully-delivered your message') // Show a page indicating success
      }
    })
  })
module.exports=router