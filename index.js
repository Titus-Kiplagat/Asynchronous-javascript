console.log('start');

const user = getUser(1);
console.log(user);

function getUser(id) {
	setTimeout(() => {
		console.log('Reading user from the database.....');
	}, 3000);
	return { id: id, gitUsername: 'lagat' };
}

console.log('end');