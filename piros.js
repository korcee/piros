let randX;
let randy;

function start() {
	let meret = document.getElementById('meret').value;
	if (meret < 2 || meret > 10) return;
	console.log(meret);
	rajzol(meret);
	randX = randNr(meret);
	randY = randNr(meret);
	console.log(randX, randY);
}

function rajzol(nr) {
	for (let i = 1; i <= nr; i++) {
		let sor = document.createElement('div');
		sor.classList.add('row');
		sor.classList.add('justify-content-center');
		document.getElementById('racs').appendChild(sor);
		for (let j = 1; j <= nr; j++) {
			let cella = document.createElement('div');
			cella.setAttribute('class', 'border bg-secondary box');
			cella.dataset.x = i;
			cella.dataset.y = j;
			sor.appendChild(cella);
		}
	}
}
function pozicio(e) {
	if (!e.target.classList.contains('box')) return;
	let x = e.target.dataset.x;
	let y = e.target.dataset.y;
	if (e.target.dataset.x != randX || e.target.dataset.y != randY) {
		e.target.classList.add('bg-dark');
	} else if (e.target.dataset.x == randX || e.target.dataset.y == randY) {
		e.target.classList.add('bg-danger');
	}
}
function randNr(n) {
	return Math.floor(Math.random() * n) + 1;
}
function refresh() {
	let cell = document.getElementById('racs');
	cell.innerHTML = '';
}
