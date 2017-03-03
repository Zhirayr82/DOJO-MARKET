angular.module("basketApp").controller("basketController", ["$http", function ($http) {
	// recuperatation les friuts 
	$http.get("../fruits.json").then((response) => {
		// creation l'object pour les fruits
		this.fruitList = response.data;
		//declaration un variable pour total montent
		this.t = 0;
		//le tableaux qui aura les list des achats
		this.achatFruit = [];
	})
//la founction qui va demarer quand on va clicker sur le button "Ajouter"
this.add = function(){
		//declaration une variable, qui recevra le nom de de fruit choisis
		this.count = this.fruitList.find((fruit) => {
			return fruit.name === this.selectiveFruit.name;
		})
		//declaration une variable, qui aura le montents d'achat
		this.montent = this.count.prix * this.quantity;
		//ajoutation de chaque montent d'achat sur le total montent d'achat
		this.t+=this.montent;
		//declaration une object, qui aura le les details de la fruit choisis
		this.achat = {
			"name" : this.count.name,
			"quantité" : this.quantity,
			"prix" :  this.count.prix,
			"montent" : this.montent
		};
		console.log("les details d'achat : ", this.achat);
		//declaration une object, ou sera inserer chaque achat avec ses tetails, et sera envoyé vers la DOM
		this.achatFruit.push(this.achat);
	}
	//la founction qui va demarer quand on va clicker sur le button "suprimer"
	this.deleteAchat = function(id) {

		this.achatFruit.splice( id, 1 );
		// le total montent sera diminuer avec la montent d'achat c'est ce que on va suprimé
		this.t-=this.montent;
	}
}])