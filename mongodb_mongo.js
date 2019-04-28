const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'Login';
const client = new MongoClient(url);

client.connect(
    function(err, client) {
        console.log('Connected');
        const db = client.db(dbName);
        db.createCollection("users",
            {
                'validator': {'$or': [
                        {'phone':{'type':'string'}},
                        {'email':{'$regex':/@mongodb\.com$/}},
                        {'status':{'$in':["Unknown",  "Incomplete"]}}
                    ]}
            }, function(err, results) {console.log('collection created')}
        );
        db.collection('users').insertOne({phone:1, email:'q@mongodbq.com', status:'aa'},function(err,res){console.log('item inserted')});
        client.close();
    }
);
