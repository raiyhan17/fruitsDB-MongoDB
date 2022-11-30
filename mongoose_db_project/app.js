
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser:true});

//creating schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required :[true, "You should add a valid name"]
    },
    // rating: Number, //setting validation
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review: String
});

//creating model
const Fruit = mongoose.model("Fruit",fruitSchema); //naming singular form because mongoose automatically makes it plural form.eg Fruit-Fruits

//creating collections

const fruit = new Fruit({
     name: "Bleuberry",
    rating:10,
    review: "Blueberry is a great fruit but I don't like much"
});
// fruit.save();

// const peopleSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// const  People = mongoose.model("People",peopleSchema);

// const people = new People({
//     name: "John",
//     age: 37
// });

// people.save();


//new
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
});

const  Person = mongoose.model("Person",personSchema); //Person >>people as mongoose converted singular form to pluralized collection

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit"
});
const papaya = new Fruit({
    name : "Papaya",
    score: 10,
    review: "One of the best fruit"
});

 papaya.save();

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favoriteFruit: pineapple
// });

//updating John Kane's favorite fruit
Person.updateOne({_id: "638466d8da0467d4bbd650ce"},{favoriteFruit:papaya},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully updated the document papaya");
    }
});
// person.save();

//-----
//adding more element in Fruit Model
 const kiwi = new Fruit(
     {
         name: "Kiwi",
         score: 10,
         review: "Awesome fruit"
     }
 );
const jackfruit = new Fruit(
    {
        name: "Jackfruit",
        score: 6,
        review: "Not a bad fruit"
    }
);
const mango = new Fruit(
    {
        name: "Mango",
        score: 10,
        review: "Awesome fruit and my favorite"
    }
);
// console.log(fruit);
// Fruit.insertMany([kiwi,jackfruit,mango],function (err){
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log("Successfully saved all the fruits to fruitsDB");
//     }
// });

//here we tap into our fruits collection through fruit model
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        fruits.forEach(function (fruit){
            console.log(fruit.name);
        });

        mongoose.connection.close();
    }
});

//updating by using id

// Fruit.updateOne({_id: "638446bceccb1b505eaac563"},{name:"Peach"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Successfully updated the document");
//     }
// });

//deleting model
// Fruit.deleteOne({name:"Peach"},function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//     console.log("Successfully deleted!")
//     }
// });

//delete Many

// People.deleteMany({name:"John"},function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Deleted all John");
//     }
// });

// delete

// Person.deleteMany({name:"Kane"},function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Deleted all Kane");
//     }
// });

