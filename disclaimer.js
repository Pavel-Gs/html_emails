
const showDisclaimer = () => {
	setTimeout(() => {document.getElementById('disclaimer-section').style.opacity = '1'}, 2000);
	setTimeout(() => {document.getElementById('email-body').style.opacity = '0.5'}, 2000);
};

const hideDisclaimer = () => {
	document.getElementById('email-body').style.opacity = '1';
	document.getElementById('disclaimer-section').style.opacity = '0';
	setTimeout(() => {document.getElementById('disclaimer-section').style.display = 'none'}, 700);
};