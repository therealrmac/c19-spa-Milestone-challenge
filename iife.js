console.log('iife has loaded');
var CarLot= (function(CarLot){
	var cars=[];

	return {
		loadInventory: function(event){
			var loader= new XMLHttpRequest();
			loader.addEventListener('load', function(){
				cars= JSON.parse(this.resonseText).cars;
				event(cars);
				loader.send();
			});
			loader.open('GET', 'inventory.json');
			console.log('carlot has loaded');
		}

	}
	return CarLot;
}(Carlot || {}));