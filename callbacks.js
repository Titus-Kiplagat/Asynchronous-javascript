console.log("start");
//callback
getUser(1, (user) => {
	console.log('User:', user)
	//callback
	getRepositories(user.gitUsername, (repos) => {
		console.log('Repos:', repos)
		//another callback
	})
});


function getUser(id, callback) {
  setTimeout(() => {
		console.log("Reading user from the database.....");
		callback({ id: id, gitUsername: 'lagat'})
  }, 2000);
}

function getRepositories(username, callback) {
	setTimeout(() => {
		callback(['repo1', 'repo2', 'repo3'])
	}, 3000)
}

console.log("end");
