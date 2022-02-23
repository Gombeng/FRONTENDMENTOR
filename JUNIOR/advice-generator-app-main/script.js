fetch('https://api.adviceslip.com/advice')
	.then((response) => response.json())
	.then((advice) => generateHtml(advice));

const generateHtml = (data) => {
	console.log(data);

	const html = `
    <p class="advice-id">ADVICE #${data.slip.id}</p>
    <p class="advice">"${data.slip.advice}"</p>
    <div class="divider"></div>
    <div class="dice" onClick="reloadPage()"></div>
    `;

	const adviceDiv = document.querySelector('.card');
	adviceDiv.innerHTML = html;
};
