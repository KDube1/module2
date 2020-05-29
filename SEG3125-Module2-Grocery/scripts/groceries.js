import {preferences} from "./main.js";
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "tomato",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: "1.50"
	},
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: "1.99"
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: "2.35"
	},
	{
		name: "croissant",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: "3.00"
	},
	{
		name: "butter",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: "3.50"
	},
	{
		name: "raddish",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: "5.00"
	},
	{
		name: "cereal",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: "6.00"
	},
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: "8.00"
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: "10.00"
	},
	{
		name: "pork bun",
		vegetarian: false,
		glutenFree: false,
		organic: false,
		price: "15.00"
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

export function restrictListProducts() {

	let product_names = [];
	for (let i=0; i<products.length; i+=1) {
		if (preferences["vegetarian"] && !products[i].vegetarian){
			continue;
		}
		if (preferences["glutenFree"] && !products[i].glutenFree){
			continue;
		}
		if (preferences["organic"] && !products[i].organic){
			continue;
		}
		product_names.push(products[i].name +" $" + products[i].price);
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
export function getTotalPrice(chosenProducts) {
	let totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i++) {
			let currPrice = chosenProducts[i].match("\\d[0-9.]*");
			//console.log(chosenProducts[i])
			console.log(currPrice[0])
			totalPrice += parseFloat(currPrice);
		}
	return totalPrice;
}
