const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("German");
    // const myobj = [
    //     {name: 'Johnny', address: 'Highway 67'},
    //     {name: 'Pete', address: 'South Bend 4'}
    // ];
    // dbo.collection("products").insertMany([
    //     { _id: 154, name: 'Chocolate Heaven' },
    //     { _id: 155, name: 'Tasty Lemons' },
    //     { _id: 156, name: 'Vanilla Dreams' }
    // ], function(err, res) {
    // dbo.collection("w3_collection2").deleteMany({address: /.*way.*/}, function (err, res) {
    //     dbo.collection("w3_collection2").find({address: /.*way.*/},{projection:{ _id:0}}).sort({name: -1}).toArray(function(err, res) {
    // dbo.collection("w3_collection2").find({}, {projection: {_id: 0}}).limit(5).sort({name: 1}).toArray(function (err, res) {
    // dbo.collection("w3_collection2").updateOne({address:"Park Lane 38"}, {$set: {name:"Bento"}}, function(err,res){
        // dbo.collection("w3_collection").drop(function(err, delOK) {
    // dbo.collection("w3_collection2").updateMany({address:/.* 2$/}, {$set: {marker:"Number !2!"}}, function(err,res){
    dbo.collection("orders").find({}).toArray(function (err, res) {
    // dbo.collection("Words").aggregate([{$lookup:{from:"Selected", localField:"German", foreignField:"selectedWord", as: "extra"}}]).toArray(function (err, res) {
    // dbo.collection('orders').aggregate([
    //     { $lookup:
    //             {
    //                 from: 'products',
    //                 localField: 'product_id',
    //                 foreignField: '_id',
    //                 as: 'orderdetails'
    //             }
    //     }
    // ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        // console.log(res[2].address);
        db.close();
    });
});
