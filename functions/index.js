/* eslint-disable */


// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

var Mailchimp = require('mailchimp-api-v3')
var mailchimp = new Mailchimp(process.env.VUE_APP_MAILCHIMP_KEY)
    
exports.addSubscriber = functions.https.onCall((data, context) => {
  mailchimp.post('/lists/50246ee6cb/members', {
      merge_fields: {
        "FNAME": data.fname,
        "LNAME": data.lname
      },
      email_address: data.email,
      status: 'subscribed',
      tags: ["home_page"]
    })
    .then(function (results) {
      console.log("results: ", results)
    })
    .catch(function (err) {
      console.log("addSubError: ", err)
    })
})
