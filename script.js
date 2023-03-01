/* FILL THE FORM, DELETE THE ELEMENTS AND INVOKE THE SEND FUNCTION */
const fillAndSend = () => {
	let inputValue1 = document.getElementById('client-name-input').value;
	let inputValue2 = document.getElementById('company-name-input').value;
	let inputValue3 = document.getElementById('client-address-input').value;
	let inputValue4 = document.getElementById('client-email-input').value;
	let inputValue5 = document.getElementById('client-project-input').value;
	let inputValue6 = document.getElementById('client-estimate-input').value;

	if (inputValue1 && inputValue2 && inputValue3 && inputValue5 && inputValue6) {
		document.getElementById('side-heading-div').remove();
		document.getElementById('send-button-div').remove();

		document.getElementById('client-name').innerHTML = inputValue1;
		document.getElementById('client-name-input').remove();

		document.getElementById('client-company').innerHTML = "(" + inputValue2 + ")";
		document.getElementById('company-name-input').remove();

		document.getElementById('client-address').innerHTML = "Address: " + inputValue3;
		document.getElementById('client-address-input').remove();

		document.getElementById('client-email').innerHTML = inputValue4;
		document.getElementById('client-email-input').remove();

		document.getElementById('client-project').innerHTML = inputValue5;
		document.getElementById('project-required-field').remove();
		document.getElementById('client-project-input').remove();

		document.getElementById('client-estimate').innerHTML = inputValue6;
		document.getElementById('estimate-required-field').remove();
		document.getElementById('client-estimate-input').remove();

		/* send email function (self-invoking) */
		(function sendEmail() {
			let inputValue = document.getElementById('client-email').innerHTML;
			if (inputValue) {
				document.getElementById('client-email').remove();
				Email.send({
					SecureToken: '9410fea9-caec-4800-9d73-faa1c7a96f66',
					To: inputValue, // in order to send to multiple email addresses, make an array[]
					From: "testing.websoft@gmail.com",
					Subject: "Estimate / Work order",
					Body: document.getElementById('email-body').innerHTML,
				}).then(message => alert("The email has been sent to " + inputValue));
			};
		})();
	} else { window.alert("Please fill in ALL required fields."); };
};

/* PREVENT PAGE REFRESH ON SUBMIT */
const emailForm = document.getElementById('email-form');
const preventPageRefresh = (event) => {
	event.preventDefault();
};
emailForm.addEventListener('submit', preventPageRefresh);