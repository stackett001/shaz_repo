console.log("hey it's Darren");


$.get('https://jsonplaceholder.typicode.com/todos', function(todos){
	console.log(todos);
});

$.get('https://jsonplaceholder.typicode.com/todos', {userId: 1}, function(t){
});

$.post('https://jsonplaceholder.typicode.com/todos', {		
        completed: false,
		title: "Teach Promises",
		userId: 1}, 
	function(response){
		//Handle response, which usually contains the updated object including new ID's

	})


// userId
// id
// title
// completed


