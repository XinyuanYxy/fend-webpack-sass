const apiKey = '4a43c889a024d86915894a250382b482&units=metric';
function handleSubmit(event) {
	event.preventDefault();

	// check what text was put into the form field
	let formText = document.getElementById('name').value;
	Client.checkForName(formText);

	console.log('::: Form Submitted :::');
	// fetch('http://localhost:8081/test')
	// 	.then((res) => res.json())
	// 	.then(function (res) {
	// 		document.getElementById('results').innerHTML = res.message;
	// 	});

	fetch(
		`http://api.openweathermap.org/data/2.5/weather?zip=${formText},us&appid=${apiKey}`
	)
		.then((res) => res.json())
		.then(function (res) {
			document.getElementById('results').innerHTML = res.main.temp;
		});
}

export { handleSubmit };
