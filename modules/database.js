const assert = require('assert')

const database = {
  getAllUsers(db, callback) {
    console.log('adsdfasf');
    
    const collection = db.collection('user')
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records")
      console.log(docs)
      callback(docs)
    })
  }
}

module.exports = database