const MongoClient = require("mongodb").MongoClient;

const db_mongo = "mongodb+srv://joseda8:joseda8@cluster0.hdfou.mongodb.net/BattleCounter?retryWrites=true&w=majority";
const dbName = "BattleCounter";
const dbCollectionName = "counters";

function do_query(query, info, dataCallback){

    MongoClient.connect(db_mongo, function(err, db) {
        if (err) throw err;
        
        var dbo = db.db(dbName);

        switch(query) {

            case "FIND_ALL":                    
                dbo.collection(dbCollectionName).find({}).toArray(function(err, result) {
                    if (err) throw err;
                    dataCallback(result);
                    db.close();
                });
                break;

                case "PLUS_JOSE":                    
                dbo.collection(dbCollectionName).updateOne({ name: "jose"},  { $inc: { counter: 1 } }, function(err, result) {
                    if (err) throw err;
                    dataCallback(result);
                    db.close();
                });
                break;

                case "PLUS_ANA":                    
                dbo.collection(dbCollectionName).updateOne({ name: "ana"},  { $inc: { counter: 1 } }, function(err, result) {
                    if (err) throw err;
                    dataCallback(result);
                    db.close();
                });
                break;

                case "LESS_JOSE":                    
                dbo.collection(dbCollectionName).updateOne({ name: "jose"},  { $inc: { counter: -1 } }, function(err, result) {
                    if (err) throw err;
                    dataCallback(result);
                    db.close();
                });
                break;

                case "LESS_ANA":                    
                dbo.collection(dbCollectionName).updateOne({ name: "ana"},  { $inc: { counter: -1 } }, function(err, result) {
                    if (err) throw err;
                    dataCallback(result);
                    db.close();
                });
                break;

            default:
                dataCallback("Consulta no encontrada");
          }

      });
}


module.exports = {
    do_query
};