const {google} = require('googleapis');

const oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

    oAuth2Client.setCredentials(token);