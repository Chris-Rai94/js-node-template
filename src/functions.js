//test 1
const order = {
	price: 10,
	quantity: 2,
};

function calculateTotal(order) {
	return order.price * order.quantity;
}
console.log(calculateTotal(order));
//test 2
function formatUsername(firstName, lastName) {
	return `${lastName}, ${firstName}`;
}
console.log(formatUsername("John", "Doe"));
//test 3
function combineStrings(str1, str2) {
	return `${str1} ${str2}`;
}
console.log(combineStrings("Hello", "World"));
//test 4
const cart = {
	price: 100,
	tax: 0.07,
};

function calculateCartTotal(cart) {
	return cart.price + cart.price * cart.tax;
}
console.log(calculateCartTotal(cart));
//test 5
const nameInfo = {
	firstName: "John",
	lastName: "Doe",
};
function buildFullName(name) {
	return `${name.firstName} ${name.lastName}`;
}
console.log(buildFullName(nameInfo));
//test 6
const character = {
	name: "Hero",
	weapon: "Sword",
	level: 1,
};

function createCharacterDescription(character) {
	return `Level ${character.level} ${character.name} wields a ${character.weapon}.`;
}
console.log(createCharacterDescription(character));
