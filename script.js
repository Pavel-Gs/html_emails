counter = 1;
const currentDiv = document.getElementById('add-email-button');

// Another workaround for the "+" button styling
const mediaQuery = window.matchMedia('(max-width: 600px)');
handleChange = (e) => {
	if (e.matches && counter === 1) { currentDiv.style.transform = 'translateX(30vw) translateY(-42px)'; }
	if (!e.matches && counter === 1) { currentDiv.style.transform = 'translateX(245px) translateY(-42px)'; }
	if (e.matches && counter > 1) { currentDiv.style.transform = 'translateX(30vw) translateY(-25px)'; }
	if (!e.matches && counter > 1) { currentDiv.style.transform = 'translateX(245px) translateY(-25px)'; }
};
mediaQuery.addListener(handleChange);  // deprecated, should refactor later
handleChange(mediaQuery);

// ADD NEW EMAIL INPUT FUNCTION
// add a new form-input
const addEmail = () => {
	const newDiv = document.createElement('div');
	newDiv.className = 'remove-on-send new-div';
	newDiv.id = `newDiv${counter}`;
	newDiv.innerHTML = document.getElementById('email-div').innerHTML;
	document.getElementById('primary-inputs-container').insertBefore(newDiv, currentDiv);
	counter++;

	// add "remove form-input" button
	const minusButton = document.createElement('button');
	minusButton.className = 'remove-on-send no-print minus-button';
	minusButton.id = `minus-button${counter}`;
	minusButton.innerHTML = "-";
	document.getElementById('primary-inputs-container').insertBefore(minusButton, currentDiv);
	// remove inputs onClick
	minusButton.addEventListener('click', (event) => {
		document.getElementById(newDiv.id).remove(); // seems like it works as intended
		document.getElementById(minusButton.id).remove(); // seems like it works as intended
		counter--;
		if (counter === 1) { currentDiv.style.transform = 'translateX(245px) translateY(-42px)'; }; // compensates the "+" button offset

		// Another workaround for the "+" button styling
		mediaQuery.addListener(handleChange); // deprecated, should refactor later
		handleChange(mediaQuery);
	});
	// Technically, the "minus" button located directly under the new div. In CSS - that button translated to the side of the input field, but the gap remains. This function compensates that.
	newDiv.style.marginTop = '-1.125rem';

	// Another workaround for the "+" button styling
	mediaQuery.addListener(handleChange); // deprecated, should refactor later
	handleChange(mediaQuery);
};

// PREVENT PAGE REFRESH ON SUBMIT
const emailForm = document.getElementById('email-form');
const plusButton = document.getElementById('add-email-button');
const preventPageRefresh = (event) => {
	event.preventDefault();
};
emailForm.addEventListener('submit', preventPageRefresh);
plusButton.addEventListener('click', preventPageRefresh); // prevents window prompt on other inputs