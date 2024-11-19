# HTML emails
(The code is outdated)
Send HTML-styled emails with this online app.
It is pre-built for quotes, proposals, work-orders, etc...

[Published app |==>](https://html-quotes.netlify.app/)

## Technologies used
### `Vanilla JavaScript`
Used for hiding/showing elements, changing CSS styles and iterating through components.

### `CSS`
The regular CSS is used for the web-view. In-line CSS is used for the email-client view.
Note: different email clients interpret the CSS differently.

### `HTML`
HTML-emails are usually developed using tables (a lot of tables) and archaic-looking in-line CSS styling.

### `@media`
Media queries are set for all devices.

## Integrations
### `SmtpJS` + `Elastic Email`
This integration allows to grab the inner HTML and put it into the email's body.
Elastic Email also provide email tracking and metrics.

### `FormSubmit`
That integration, as the name suggests, provides easy form-submission functionality and automated replies.

## How it works
1. Fill all required fields in the form.
2. If you want to test it - in the "client's email" field, type the email address you have access to.
3. Click "send email" button.

This is it.
If you want to test it further:

1. Check your inbox or spam folder.
2. The message will be sent from my test email address.
3. In the received email, you will see the "review and proceed" button (it was not visible on the web).
4. If clicked - you will be redirected to the policy agreement page.
5. Once there, you could click "I agree" button - and get the corresponding automated email message...
...and I will get the automated notification regarding the agreement.

This app can be used to send HTML emails to any existing addresses. The sender's email can be changed only in the code and requires the integrations setup (see above).