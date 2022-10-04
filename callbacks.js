console.log("start");

getUser(1, (user) => {
	console.log('User:', user)
});


function getUser(id, callback) {
  setTimeout(() => {
		console.log("Reading user from the database.....");
		callback({ id: id, gitUsername: 'lagat'})
  }, 3000);
}

console.log("end");
