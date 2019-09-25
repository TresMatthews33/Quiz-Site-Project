//Objects
//Pretty much everything that we deal with in Js is an object.
//An object is a collection of related values and functionality.
var name = "Tres"; //A variabler containing a single value
var person = {firstName: "Tres", lastName: "Matthews", age: 17}; //A JavaScript object representing a person stored in a variable named person
//Objects consist of key-value pairs, which means that we have keys with an associated value. Above we have the keys firstName, lastName, and age, which each have an associated value.
console.log(person.firstName); //Accessing the firstName property of the person object using dot notation -> ObjectName.PropertyName
var date = new Date(); //Date is an object even if we didn't know it before!
date.getDate() //Accessing the getDate function of the date object
person["lastName"]; //We can also access properties this way.
var array = [];
array.length; //Length is a property of an array object.
var car = {make: "Chrysler", model: "300", mileage: 20000}
car.make; //Chrysler
car.mileage //20000
var pen = {inkColor: "black", brand: "Bic"};
var cat = {furColor: "Brown", spayedOrNeutered: false}