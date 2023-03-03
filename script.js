counter = 1;
// ADD NEW EMAIL INPUT FUNCTION
// add a new form-input
const addEmail = () => {
	const newDiv = document.createElement('div');
	newDiv.className = 'remove-on-send new-div';
	newDiv.id = `newDiv${counter}`;
	newDiv.innerHTML = document.getElementById('email-div').innerHTML;
	const currentDiv = document.getElementById('add-email-button');
	document.getElementById('primary-inputs-container').insertBefore(newDiv, currentDiv);

	// add "remove form-input" button
	const minusButton = document.createElement('button');
	minusButton.className = 'remove-on-send no-print minus-button';
	minusButton.id = `minus-button${counter}`;
	minusButton.innerHTML = "-";
	document.getElementById('primary-inputs-container').insertBefore(minusButton, currentDiv);
	// remove inputs onClick
	minusButton.addEventListener('click', (event) => {
		document.getElementById(newDiv.id).remove(); // I have no idea why it works as intended
		document.getElementById(minusButton.id).remove(); // I have no idea why it works as intended
	});
	counter++;
	// Technically, the "minus" button located directly under the new div. In CSS - that button translated to the side of the input field, but the gap remains. This function compensates that.
	if (counter > 2) {
		document.getElementById(newDiv.id).style.marginTop = '-1.125rem';
	};
};

// PREVENT PAGE REFRESH ON SUBMIT
const emailForm = document.getElementById('email-form');
const preventPageRefresh = (event) => {
	event.preventDefault();
};
emailForm.addEventListener('submit', preventPageRefresh);