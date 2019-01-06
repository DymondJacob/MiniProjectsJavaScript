// Get modal element
let modal = document.getElementById('simpleModal');

// Get the open modal button
let modalBtn = document.getElementById('modalBtn');

// Get the close button, must grab first one
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);

// listen for cloe click
closeBtn.addEventListener('click', closeModal);

// click outside it will close, listen for outside click
window.addEventListener('click', windowClose);

// openModal function
function openModal() {
	modal.style.display = 'block';
}

// deleteModal function
function closeModal() {
	modal.style.display = 'none';
}

function windowClose(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}
