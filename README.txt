The student declares that, except where duly acknowledged, this project is entirely his/her own work

CODE GENERATION TOOLS

N/A

THIRD PARTY COMPONENTS

The majority of the code used for the login/registration functionality is taken from https://github.com/cornflourblue/mean-angular2-registration-login-example
and has been adapted to suit the needs of the system.

For details and documentation go to http://jasonwatmore.com/post/2017/02/22/mean-with-angular-2-user-registration-and-login-example-tutorial

All of the node modules used are third party, and each has its own license attached.

These can be seen in each folder marked "node_modules"

MODIFIED THIRD PARTY FILES

client/app/register/register.component.html   added email address field and validation relating to this

client/app/_models/users.ts    added email address to the user _models

app/server/services/user.service.js  added email to the update function

many of the Javascript files on the client app are generated by VS code, using the typescript that i coded.
