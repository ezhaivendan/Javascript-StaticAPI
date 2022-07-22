document.addEventListener("DOMContentLoaded", function(event) {


		function createNode(element) {
			return document.createElement(element);
		}

		function append(parent, el) {
			return parent.appendChild(el);
		}

		const UserSection = document.getElementById('users');


		const url = 'https://randomuser.me/api/?results=10';

		fetch(url)
		.then((resp) => resp.json())
		.then(function(data) {

			let Users = data.results;
			return Users.map(function(User) {

				let Items = createNode('li'),
				Image = createNode('img'),
				Name = createNode('p');
				const Email = createNode('a');
				Email.setAttribute('class', 'signature');
				Email.setAttribute('href', 'mailto:'+ User.email);
				Image.src = User.picture.medium;


				Name.innerHTML = User.name.first +' '+ User.name.last;

				Email.innerHTML = User.email;
				append(Items, Image);
				append(Items, Name);
				append(Items, Email);
				append(UserSection, Items);
			})
		})

		.catch(function(error) {
			console.log(JSON.stringify(error));
		});   
	});
