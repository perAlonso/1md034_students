/*let	 orderButton = document.getElementById("order");
orderButton.addEventListener("click", order);*/
/*
function order() {
	info = [document.getElementById("fullName").value];
	info.push(document.getElementById("email").value);
	info.push(document.getElementById("street").value);
	info.push(document.getElementById("house_no").value);
	info.push(document.getElementById("payment").value);
	var gender;
	if(document.getElementById("r0").checked) {
		info.push(document.getElementById("r0").value);
	} else if(document.getElementById("r1").checked) {
		info.push(document.getElementById("r1").value);
	} else if(document.getElementById("r2").checked) {
		info.push(document.getElementById("r2").value);
	}
	console.log(info);
}

*/
/*
function Burger(name, bread, meat, allergy, kCal, img_path, dsc1, dsc2, dsc3) {
	this.name = name;
	this.bread = bread;
	this.meat = meat;
	this.allergy = allergy;
	this.img_path = img_path;
	this.kCal = kCal;

	this.dsc1 = dsc1;
	this.dsc2 = dsc2;
	this.dsc3 = dsc3;

	this.heading = function() {
	return this.name + ': ' + this.kCal + ' kCal';
	};
}

let burgerArray = [{item: new Burger('Floor-burger', 'some kind of bread', '(possibly suitable for vegans)', 'We don\'t know what it contains.', '1337', 'https://i.ytimg.com/vi/y0M4wlUHeFY/maxresdefault.jpg', 'We found it on the floor, has', 'It may or may not contain meat ', 'Let\'s hope you\'re not allergic to something in it! '), gluten:true, lactose:true}];

burgerArray.push({item: new Burger('Some other burger', '(soggy and contains gluten)', 'It sure does contain meat', 'you probably don\'t want to eat this.', '1234', 'https://aht.seriouseats.com/assets_c/2014/02/20140203-sad-burger-dimly-lit-meals-for-one-thumb-300xauto-381436.jpg', 'White bread that was supposed to be my dinner ', 'Something something. ', 'Doesn\'t matter if you\'re allergic to something, '), gluten:true, lactose:false});
burgerArray.push({item:new Burger('This isn\'t even a burger', '', '', 'I don\'t think that\'s a burger...', '???', 'https://cdn.foodbeast.com/content/uploads/2016/05/Shitty-Food-Porn-1-408x450.jpg', 'Hold on!', 'I though we were selling burgers!!?!?!?', ''), gluten:true, lactose:false});
burgerArray.push({item: new Burger('Meep', 'BREAD', 'MEAT', 'A FAX MACHINE!', '0x1fc', 'https://www.cpsc.gov/s3fs-public/styles/large/public/Recall.2012.12101.12101a.jpg?pgK1xQYak69VAg8LgezAva4ccH2dKZR2&itok=5EWU_eEd', 'After you take away the ', 'and the ', 'What do you have? '), gluten:false, lactose:true});
burgerArray.push({item: new Burger('Moop', 'POTATO', 'POTATO', 'POTATO', '0', 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/9/24/1411574454561/03085543-87de-47ab-a4eb-58e7e39d022e-620x372.jpeg?width=300&quality=85&auto=format&fit=max&s=6ff150c2e9d651486fb5eff841979323', 'I say ', 'You say ', 'Javascript is awful by the way '), gluten:false, lactose:true});

let menuTable = document.getElementById('menu-table');

for(i = 0; i < burgerArray.length; i++) {
	burg = burgerArray[i];
	var burger = burg.item;

	var div_text = 'box 0' + i;
	let listItem = document.createElement('div');
	listItem.setAttribute("class", div_text)
	let listValue = document.createTextNode(burger.heading());
	listItem.appendChild(listValue);
	menuTable.appendChild(listItem);


	
	div_text = "box 1" + i
	listItem = document.createElement('div');
	listItem.setAttribute("class", div_text)
	let image = document.createElement("img");
	image.setAttribute("src", burger.img_path);
	listItem.appendChild(image);
	menuTable.appendChild(listItem);



	div_text = "box 2" + i
	listItem = document.createElement('div');
	listItem.setAttribute('class', div_text);
	let ul = document.createElement("ul");
	let li1 = document.createElement("li");
	let li2 = document.createElement("li");
	let li3 = document.createElement("li");

	//Bread Meat Allergy
	//NOTE: no bold letters due to allergy class not added
	let li1Val = document.createTextNode(burger.dsc1 + burger.bread);
	let li2Val = document.createTextNode(burger.dsc2 + burger.meat);
	let li3Val = document.createTextNode(burger.dsc3 + burger.allergy);

	li1.appendChild(li1Val);
	li2.appendChild(li2Val);
	li3.appendChild(li3Val);
	ul.appendChild(li1);
	ul.appendChild(li2);
	ul.appendChild(li3);
	listItem.appendChild(ul);
	menuTable.appendChild(listItem);

	
}
*/
