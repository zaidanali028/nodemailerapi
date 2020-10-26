## Just a personal mailing telmplate for a contact form built with node js
## You can clone and try though,I just contributed to open source!
# Allow Your email account to allow less secured apps to send emails to your gmail

* Link=> https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4OW0nvc6V3e8tBjz3kF-9Oi8aDXeMc_3b3_ZHaVfL4eQsauT2rr2j-0eScm0uJc5uVpoCCmUNdbyGW6QmM3eONC8VfQhQ


### SETUP
```
> $ npm i (Run This Command To Install The Packages In The package.json )

```
> Open models/send.js file and modify it with your details by configuring a .env file in the root of your porject's directory.

>Add these fields in your ```.env``` file
```
    GMAIL_USER = your e-mail
    GMAIL_PASS =your password
```
> I have already required .env moduel for you in models/send line 1
```
    require('dotenv').config()

```
>Run npm start to test this API.Use Postman in testing
>Use x-www-form-urlencoded in the body section of postman
>Define sender'name and give it name value
>Define sender's email and give it a value of email
>And lastly,define sender's message and give it a value of message

## API ROUTES
# GET
> /api/sendmail/
# POST
>/api/sendmail/contact
```
    ** AN EXAMPLE TO GET YOU STARTED **
    name   zaidanali
    email  developersavenue@gmail.com
    message Hello I am a subscriber to your website who sent you am email
```


#### CHEESE!
