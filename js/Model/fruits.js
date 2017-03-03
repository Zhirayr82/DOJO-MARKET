'use strict'
class fruit {
	constructor(json) {
		this.name = json.name;
		this.prix = json.prix;
		console.log(json.name);
		console.log(this.prix);
	}
}

