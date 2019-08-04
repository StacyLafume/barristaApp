
module.exports = {

    'url' : "mongodb+srv://Barrista:Hgo2lyt1aDrtXGyS@cluster0-nsl94.mongodb.net/BarristaApp?retryWrites=true&w=majority", // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot
    'dbName': 'BarristaApp'
};

// Create an app that enables the cashier to enter the customer's name and their order.
// //anyone can create an order.
// //orders will go to a new page.
// Then add that order to a queue that the baristas can see
// //new page will have a login that the Barrista must log in before completing order.
// give them the ability to mark an order complete.
//
//  Completed orders should show which barista completed the order
//  have their own list.
//  Bonus points if the app automatically says the customer's name out loud
//  when an order is complete.
