// FILL THE FORM, DELETE THE ELEMENTS AND INVOKE THE SEND FUNCTION 
const fillAndSend = () => {
	// grab the values from the forms
	const inputValue1 = document.getElementById('client-name-input').value;
	const inputValue2 = document.getElementById('company-name-input').value;
	const inputValue3 = document.getElementById('client-address-input').value;
	const inputValue5 = document.getElementById('client-project-input').value;
	const inputValue6 = document.getElementById('client-estimate-input').value;

	// populate the emails array with the provided email(s)
	let emailsList = document.getElementsByClassName('client-email-input');
	let emailsArray = [];
	let isEmailValid = false;
	let wrongEmail = '';
	for (i = 0; i < emailsList.length; i++) {
		// check, whether the email values have "@" and "." symbols in them
		if (!emailsList[i].value.includes("@") || !emailsList[i].value.includes(".")) {
			isEmailValid = false;
			wrongEmail = emailsList[i].value;
			break;
		}
		else {
			isEmailValid = true;
			emailsArray.push(emailsList[i].value);
		};
	};

	// check, whether the grabbed values are not empty
	if (inputValue1 && inputValue2 && inputValue3 && inputValue5 && inputValue6) {
		if (isEmailValid) {
			emailsString = emailsArray.toString();
			// remove unwanted elements from the email's body
			const elements = document.querySelectorAll('.remove-on-send');
			elements.forEach(i => { i.remove(); });

			// fill the email's body with the info from the forms
			document.getElementById('client-name').innerHTML = inputValue1;
			document.getElementById('client-company').innerHTML = "(" + inputValue2 + ")";
			document.getElementById('client-address').innerHTML = "Address: " + inputValue3;
			document.getElementById('client-project').innerHTML = inputValue5;
			document.getElementById('client-estimate').innerHTML = inputValue6;

			// show the "review and proceed" button
			document.getElementById('proceed-div').style.display = 'block';

			// send email function (self-invoking)
			(function sendEmail() {
				Email.send({
					SecureToken: '9410fea9-caec-4800-9d73-faa1c7a96f66',
					To: [emailsString],
					From: 'testing.websoft@gmail.com',
					Subject: "Estimate / Work order",
					Body: document.getElementById('email-body').innerHTML,
				}).then(message => alert("The email has been sent to " + emailsString));
			})();

		} else {
			alert(wrongEmail + " is not a valid email");
			emailsString = '';
			emailsArray = [];
		};

	} else { window.alert("Please fill in ALL required fields."); };
};