var id = 0;
var phoneList = [];
var addBtn = document.getElementById('add-phone');



// helper functions
function generateID() {
	return ++id;
}
function validateFields(brand, model, price) {
	if (brand.length > 0  &&  model.length > 0 && price.length > 0){
		return true;
	} else {
		return false;
	}
	
}
// constructor function
function Phone(brand, model, price) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.id = generateID();
	
}

// click event
addBtn.addEventListener('click', function(){
	var brand = document.getElementById('brand').value;
	var model = document.getElementById('model').value;
	var price = document.getElementById('price').value;
	var isValid = validateFields(brand, model, price);
	console.log(isValid);
	
	if (isValid == true ){
		var newPhone = new Phone(brand, model, price);
		console.log(newPhone);
		phoneList.push(newPhone);
		console.log(phoneList);
		
	}
	
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(newPhone));
	ul.appendChild(li);
	
	
	
	
	
});





	
