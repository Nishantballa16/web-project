const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6e15152c1mshaa2f616b5defcb8p16bc80jsn33447ba48ca4',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));