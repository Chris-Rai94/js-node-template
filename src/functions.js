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
