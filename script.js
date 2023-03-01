let counter = 0;	/* count the amount of saved form inputs */

/* hide tooltips */
const hideTooltips = () => {
	const tips = document.querySelectorAll('.tooltip');
	for (i = 0; i < tips.length; i++) {
		tips[i].classList.remove('tooltip');
	};
	const tooltipButtonElement = document.getElementById('hide-tooltip-button');
	tooltipButtonElement.remove();
};

/* fill the form function */
const saveElements = () => {
	let inputValue1 = document.getElementById('client-name-input').value;
	let inputValue2 = document.getElementById('company-name-input').value;
	let inputValue3 = document.getElementById('client-address-input').value;
	let inputValue4 = document.getElementById('client-email-input').value;
	let inputValue5 = document.getElementById('client-project-input').value;
	let inputValue6 = document.getElementById('client-estimate-input').value;

	if (inputValue1 && inputValue2 && inputValue3 && inputValue5 && inputValue6) {

		counter += 1;
		document.getElementById('client-name').innerHTML = inputValue1;
		const clientNameInputElement = document.getElementById('client-name-input');
		clientNameInputElement.remove();

		counter += 1;
		document.getElementById('client-company').innerHTML = "(" + inputValue2 + ")";
		const companyNameInputElement = document.getElementById('company-name-input');
		companyNameInputElement.remove();

		counter += 1;
		document.getElementById('client-address').innerHTML = "Address: " + inputValue3;
		const clientAddressInputElement = document.getElementById('client-address-input');
		clientAddressInputElement.remove();

		counter += 1;
		document.getElementById('client-email').innerHTML = inputValue4;
		const clientEmailInputElement = document.getElementById('client-email-input');
		clientEmailInputElement.remove();

		counter += 1;
		document.getElementById('client-project').innerHTML = inputValue5;
		const clientProjectStarElement = document.getElementById('project-required-field');
		clientProjectStarElement.remove();
		const clientProjectInputElement = document.getElementById('client-project-input');
		clientProjectInputElement.remove();

		counter += 1;
		document.getElementById('client-estimate').innerHTML = inputValue6 + " plus GST.";
		const clientEstimateStarElement = document.getElementById('estimate-required-field');
		clientEstimateStarElement.remove();
		const clientEstimateInputElement = document.getElementById('client-estimate-input');
		clientEstimateInputElement.remove();
	};
};

/* send email function */
function sendEmail() {
	let inputValue = document.getElementById('client-email').innerHTML;
	if (counter >= 6 && inputValue) {								// the required amount of fields that a user should fill and save
		const clientEmailElement = document.getElementById('client-email');
		clientEmailElement.remove();
		Email.send({
			SecureToken: '9410fea9-caec-4800-9d73-faa1c7a96f66',
			To: inputValue,											// in order to send to multiple email addresses, make an array[]
			From: "testing.websoft@gmail.com",
			Subject: "Estimate / Work order",
			Body: document.getElementById('email-body').innerHTML,
		}).then(
			message => alert("email has been sent"));
	} else { window.alert("Please fill and save the required fields."); };
};

/* prevent page refresh on submit */
const memoForm = document.getElementById('memo-form');
const preventPageRefresh = (event) => {
	event.preventDefault();
};
memoForm.addEventListener('submit', preventPageRefresh);