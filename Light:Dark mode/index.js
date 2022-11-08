const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', (e) => {
	const isChecked = e.target.checked;

	if(isChecked) {
		body.classList.add('dark-mode');
	} else {
		body.classList.remove('dark-mode');
	}
});

// function darkMode(){
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }
